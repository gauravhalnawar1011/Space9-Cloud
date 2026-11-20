import re
from pathlib import Path

source_files = [
    Path("assets/index-formatted.js"),
    Path("assets/CoursesPage-DGNww11V-formatted.js"),
    Path("assets/CourseDetailPage-Z4nDbAbC-formatted.js"),
    Path("assets/CertificationSupportPage-DiIqqx9m-formatted.js"),
    Path("assets/JobApplicationSupportPage-formatted.js"),
]

pattern = re.compile(
    r"""["'](/(?:images|assets)/[^"']+\.(?:webp|png|jpe?g|svg|gif|avif))["']""",
    re.IGNORECASE
)

references = set()

for source in source_files:
    if source.exists():
        content = source.read_text(errors="ignore")
        references.update(pattern.findall(content))

missing = []

for ref in sorted(references):
    local_path = Path("public") / ref.lstrip("/")
    if not local_path.is_file():
        missing.append(ref)

print(f"Total unique local image references: {len(references)}")
print(f"Available: {len(references) - len(missing)}")
print(f"Missing: {len(missing)}")

if missing:
    print("\nMissing image files:")
    for item in missing:
        print(item)
else:
    print("\nAll extracted local image references are available.")
