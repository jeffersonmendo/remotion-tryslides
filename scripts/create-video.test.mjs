import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import {
  mkdtemp,
  mkdir,
  readFile,
  readdir,
  rm,
  symlink,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { createVideoResources } from "./create-video.mjs";

async function temporaryProject(t) {
  const root = await mkdtemp(join(tmpdir(), "tryslides-video-test-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  return root;
}

test("creates the complete package with empty Markdown documents and tracked media directories", async (t) => {
  const root = await temporaryProject(t);
  const result = await createVideoResources(
    root,
    "getting-started-with-tryslides",
  );
  assert.equal(
    result,
    join(root, "resources", "getting-started-with-tryslides"),
  );
  const expectedFiles = [
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
    "images/.gitkeep",
    "recordings/.gitkeep",
    "audio/.gitkeep",
  ];
  for (const path of expectedFiles) {
    assert.equal(await readFile(join(result, path), "utf8"), "");
  }
  assert.deepEqual(
    (await readdir(result)).sort(),
    [
      "README.md",
      "assets.md",
      "audio",
      "brief.md",
      "feedback",
      "images",
      "recording-checklist.md",
      "recordings",
      "review.md",
      "deliverables.md",
      "script.md",
      "timeline.md",
    ].sort(),
  );
});

test("rejects unsafe or malformed names before creating any directories", async (t) => {
  const root = await temporaryProject(t);
  for (const slug of [
    undefined,
    "",
    "../escape",
    "/absolute",
    "two/parts",
    "two\\parts",
    ".",
    "..",
    "Video",
    "two words",
    "-video",
    "video-",
    "two--words",
    "a".repeat(81),
  ]) {
    await assert.rejects(createVideoResources(root, slug), /kebab-case/);
  }
  assert.deepEqual(await readdir(root), []);
});

test("refuses to overwrite an existing package or its feedback", async (t) => {
  const root = await temporaryProject(t);
  const destination = await createVideoResources(root, "demo");
  await writeFile(
    join(destination, "feedback/decisions.md"),
    "Keep subtle arrows.\n",
  );
  await assert.rejects(createVideoResources(root, "demo"), /already exists/);
  assert.equal(
    await readFile(join(destination, "feedback/decisions.md"), "utf8"),
    "Keep subtle arrows.\n",
  );
});

test("allows different videos to coexist", async (t) => {
  const root = await temporaryProject(t);
  await createVideoResources(root, "first-video");
  await createVideoResources(root, "second-video");
  assert.deepEqual((await readdir(join(root, "resources"))).sort(), [
    "first-video",
    "second-video",
  ]);
});

test("concurrent requests for the same video cannot overwrite each other", async (t) => {
  const root = await temporaryProject(t);
  await mkdir(join(root, "resources"));
  const results = await Promise.allSettled([
    createVideoResources(root, "demo"),
    createVideoResources(root, "demo"),
  ]);
  assert.equal(
    results.filter((result) => result.status === "fulfilled").length,
    1,
  );
  const failure = results.find((result) => result.status === "rejected");
  assert.match(failure.reason.message, /already exists/);
});

test("rejects a symlinked resources directory", async (t) => {
  const root = await temporaryProject(t);
  const external = await temporaryProject(t);
  await symlink(external, join(root, "resources"));
  await assert.rejects(createVideoResources(root, "demo"), /not a symlink/);
  assert.deepEqual(await readdir(external), []);
});

test("CLI creates resources relative to its project rather than the working directory", async (t) => {
  const root = await temporaryProject(t);
  const cwd = await temporaryProject(t);
  await mkdir(join(root, "scripts"));
  const script = join(root, "scripts/create-video.mjs");
  await writeFile(
    script,
    await readFile(
      join(dirname(fileURLToPath(import.meta.url)), "create-video.mjs"),
    ),
  );
  const output = execFileSync(process.execPath, [script, "demo"], {
    cwd,
    encoding: "utf8",
  });
  assert.match(output, /Created/);
  assert.match(output, /10 empty Markdown files/);
  assert.equal(
    await readFile(join(root, "resources/demo/brief.md"), "utf8"),
    "",
  );
  assert.deepEqual(await readdir(cwd), []);
});

test("CLI help succeeds and invalid invocations fail without creating a video", async (t) => {
  const root = await temporaryProject(t);
  await mkdir(join(root, "scripts"));
  const script = join(root, "scripts/create-video.mjs");
  await writeFile(
    script,
    await readFile(
      join(dirname(fileURLToPath(import.meta.url)), "create-video.mjs"),
    ),
  );
  const help = spawnSync(process.execPath, [script, "--help"], {
    encoding: "utf8",
  });
  assert.equal(help.status, 0);
  assert.match(help.stdout, /Usage:/);
  for (const args of [[], ["first", "second"], ["../escape"], ["--unknown"]]) {
    const result = spawnSync(process.execPath, [script, ...args], {
      encoding: "utf8",
    });
    assert.equal(result.status, 1);
    assert.ok(result.stderr.length > 0);
  }
  assert.deepEqual(await readdir(root), ["scripts"]);
});
