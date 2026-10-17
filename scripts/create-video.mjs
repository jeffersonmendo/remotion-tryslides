import { mkdir, lstat, realpath, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const documentPaths = [
  "README.md",
  "brief.md",
  "script.md",
  "timeline.md",
  "recording-checklist.md",
  "assets.md",
  "review.md",
  "deliverables.md",
  "feedback/notes.md",
  "feedback/decisions.md",
];
const mediaDirectories = ["images", "recordings", "audio"];

export async function createVideoResources(projectRoot, slug) {
  if (
    typeof slug !== "string" ||
    slug.length > 80 ||
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
  ) {
    throw new Error(
      "Use a lowercase kebab-case video name of at most 80 characters, such as getting-started-with-tryslides.",
    );
  }

  const resources = join(projectRoot, "resources");
  await mkdir(resources, { recursive: true });
  if (!(await lstat(resources)).isDirectory()) {
    throw new Error("The resources path must be a directory, not a symlink.");
  }

  const destination = join(resources, slug);
  try {
    await mkdir(destination);
  } catch (error) {
    if (error.code === "EEXIST") {
      throw new Error(
        `Video already exists: resources/${slug}. Nothing was overwritten.`,
      );
    }
    throw error;
  }

  await mkdir(join(destination, "feedback"));
  for (const directory of mediaDirectories) {
    await mkdir(join(destination, directory));
    await writeFile(join(destination, directory, ".gitkeep"), "", {
      flag: "wx",
    });
  }
  for (const path of documentPaths) {
    await writeFile(join(destination, path), "", { flag: "wx" });
  }
  return destination;
}

async function main(args) {
  const usage = "Usage: npm run create-video -- <video-name>";
  if (args.length === 1 && ["--help", "-h"].includes(args[0])) {
    console.log(usage);
    return;
  }
  if (args.length !== 1) {
    throw new Error(usage);
  }
  const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
  const destination = await createVideoResources(projectRoot, args[0]);
  console.log(`Created ${destination}`);
  console.log(
    `${documentPaths.length} empty Markdown files and images/, recordings/, audio/ are ready.`,
  );
  console.log(
    "Next: follow docs/tryslides/video-workflow.md. This does not create a Remotion composition.",
  );
}

if (
  process.argv[1] &&
  (await realpath(resolve(process.argv[1]))) === fileURLToPath(import.meta.url)
) {
  main(process.argv.slice(2)).catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
