import re
import os
import urllib.request
from urllib.parse import urljoin, urlparse, unquote

BASE = "https://www.space9.in/"

FILES = [
    "index.html",
    "assets/index-formatted.js",
    "assets/CoursesPage-DGNww11V-formatted.js",
    "assets/CourseDetailPage-Z4nDbAbC-formatted.js",
    "assets/CertificationSupportPage-DiIqqx9m-formatted.js",
    "assets/JobApplicationSupportPage-formatted.js",
    "assets/index-BSqVMPmE.css",
]

EXTENSIONS = r"(?:png|jpe?g|webp|avif|gif|svg|ico)"
PATTERN = re.compile(
    rf"""(?P<url>
        https?://[^"'`\s<>]+?\.(?:{EXTENSIONS})(?:\?[^"'`\s<>]*)?
        |
        (?:/|\./)?[^"'`\s<>]+?\.(?:{EXTENSIONS})(?:\?[^"'`\s<>]*)?
    )""",
    re.IGNORECASE | re.VERBOSE
)

urls = set()

for filename in FILES:
    if not os.path.exists(filename):
        continue

    with open(filename, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()

    for match in PATTERN.finditer(content):
        raw = match.group("url").rstrip("),;")
        full_url = urljoin(BASE, raw)

        parsed = urlparse(full_url)
        if parsed.scheme in ("http", "https"):
            urls.add(full_url)

os.makedirs("images", exist_ok=True)

print(f"Found {len(urls)} image references.")

downloaded = 0
failed = []

for url in sorted(urls):
    parsed = urlparse(url)
    filename = unquote(os.path.basename(parsed.path))

    if not filename:
        continue

    destination = os.path.join("images", filename)

    if os.path.exists(destination):
        continue

    try:
        request = urllib.request.Request(
            url,
            headers={"User-Agent": "Mozilla/5.0"}
        )

        with urllib.request.urlopen(request, timeout=30) as response:
            data = response.read()

        with open(destination, "wb") as f:
            f.write(data)

        downloaded += 1
        print(f"Downloaded: {filename}")

    except Exception as e:
        failed.append((url, str(e)))
        print(f"FAILED: {url} - {e}")

print("\nDownload complete.")
print(f"New downloads: {downloaded}")
print(f"Failed: {len(failed)}")

with open("image-download-failures.txt", "w") as f:
    for url, error in failed:
        f.write(f"{url} | {error}\n")
