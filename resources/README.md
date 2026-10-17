# Video production packages

Create a new package from the project root:

```sh
npm run create-video -- getting-started-with-tryslides
```

This creates `resources/getting-started-with-tryslides/` with empty Markdown documents and media directories. It does not generate a script, invent assets, approve a plan, or create a Remotion composition.

Follow [the video workflow](../docs/tryslides/video-workflow.md) to fill the package, gather materials, approve readiness, edit, and record lessons. Shared product and audiovisual guidance remains in [docs/tryslides](../docs/tryslides/README.md).

Use English lowercase kebab-case names. Existing video packages are never overwritten. Keep raw recordings and private material out of public hosting; this directory is not automatically a Remotion media server. Review file size, privacy, and licensing before adding media to Git.

When approved production begins, follow [video organization](../docs/video-organization.md) for per-video source code, render media, composition registrations, and output paths. The generator intentionally creates none of those implementation files.

Each new package belongs to one required 12–20 minute source video and includes an empty `deliverables.md` to plan its four 40–60 second short/reel cutdowns, YouTube thumbnail, four covers, and 1080 × 1080 social post. Do not create separate packages for those derivatives or start standalone short-form productions. See [deliverables and exports](../docs/tryslides/deliverables-and-exports.md). Exported media is generated later under versioned `out/<video-slug>/` paths, not by this scaffold command.
