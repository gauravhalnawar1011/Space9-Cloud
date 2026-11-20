import re
import urllib.request
from pathlib import Path
from urllib.parse import quote, urlparse

BASE = "https://www.space9.in"

SOURCE_FILES = [
    "assets/index-formatted.js",
    "assets/CoursesPage-DGNww11V-formatted.js",
    "assets/CourseDetailPage-Z4nDbAbC-formatted.js",
    "assets/CertificationSupportPage-DiIqqx9m-formatted.js",
    "assets/JobApplicationSupportPage-formatted.js",
]

# Match complete quoted paths, including spaces.
pattern = re.compile(
    r"""["'](/images/[^"']+\.(?:webp|png|jpe?g|svg|gif|avif))["']""",
    re.IGNORECASE
)

image_paths = set()

for filename in SOURCE_FILES:
    path = Path(filename)

    if not path.exists():
        print(f"Missing source: {filename}")
        continue

    content = path.read_text(encoding="utf-8", errors="ignore")
    image_paths.update(pattern.findall(content))

print(f"\nFound {len(image_paths)} unique website image paths.\n")

downloaded = 0
failed = []

for image_path in sorted(image_paths):
    # Preserve the original directory structure.
    relative_path = image_path.lstrip("/")
    destination = Path("public") / relative_path
    destination.parent.mkdir(parents=True, exist_ok=True)

    if destination.exists() and destination.stat().st_size > 0:
        print(f"Already exists: {relative_path}")
        continue

    # Encode spaces and special characters without encoding directory separators.
    encoded_path = quote(image_path, safe="/")
    url = BASE + encoded_path

    try:
        request = urllib.request.Request(
            url,
            headers={"User-Agent": "Mozilla/5.0"}
        )

        with urllib.request.urlopen(request, timeout=30) as response:
            data = response.read()

        if not data:
            raise ValueError("Empty response")

        destination.write_bytes(data)
        downloaded += 1

        print(f"Downloaded: {relative_path}")

    except Exception as error:
        failed.append((url, str(error)))
        print(f"FAILED: {relative_path} - {error}")

print("\n========== SUMMARY ==========")
print(f"Total references: {len(image_paths)}")
print(f"New downloads: {downloaded}")
print(f"Failures: {len(failed)}")

Path("image-download-failures-v2.txt").write_text(
    "\n".join(f"{url} | {error}" for url, error in failed),
    encoding="utf-8"
)
