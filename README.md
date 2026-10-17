# TrySlides Video Studio

The production workspace for TrySlides videos: plan the story, prepare recordings and other materials, build and edit scenes, preview compositions, and document what improves the result.

Every production starts with a **12–20 minute long-form video**. From that same video, create **four 40–60 second vertical shorts/reels**, a YouTube thumbnail, four covers, and a **1080 × 1080 social post**. Shorts and promotional images are derivatives, not standalone productions. Editorial treatment can include demonstrations, explanations, tutorials, announcements, and promotional scenes. Remotion powers the composition, preview, and rendering workflow; it is the tool behind the workspace, not the subject of the videos.

This is not the TrySlides presentation application or a standalone screen recorder. Capture real product footage with an appropriate recording tool, then combine it here with narration, images, animated text, explanations, music, and sound effects.

## Start with the reference

- [Project reference](docs/tryslides/README.md): what TrySlides does, visual identity, templates, MCP, limits, and factual sources.
- [Audiovisual direction](docs/tryslides/audiovisual-direction.md): how voice, images, scenes, motion, music, and effects communicate together.
- [Video workflow](docs/tryslides/video-workflow.md): planning, materials, approval, editing, feedback, and learning.
- [Video organization](docs/video-organization.md): how multiple videos, scenes, compositions, and render media coexist.
- [Agent guide](AGENTS.md): instructions for Codex and other coding agents working in this project.

## Set up

Use a Node.js version supported by `package.json`: `^20.19.0`, `^22.13.0`, or `>=24`.

```sh
npm ci
```

## Start a video

```sh
npm run create-video -- getting-started-with-tryslides
```

This creates `resources/getting-started-with-tryslides/` with ten empty Markdown documents and folders for images, recordings, and audio. Existing packages are never overwritten. Use English lowercase kebab-case names.

The command prepares the production package only. It does not write the script, record the screen, invent materials, approve the plan, or create a composition.

### Production flow

1. **Plan:** fill the brief, script, and audiovisual timeline using the shared references.
2. **Prepare materials:** list required assets and exact recording instructions; distinguish what the owner supplies from what can be created during production.
3. **Record and gather:** collect real product footage, narration, images, and licensed audio as needed. Preserve originals and inspect the files.
4. **Approve readiness:** resolve required materials and factual questions, and record owner approval before final editing.
5. **Compose and edit:** implement the video, synchronize visuals with voice or music, and preview the edit in Remotion Studio.
6. **Review and deliver:** apply feedback, check the result, and render the final output when requested.
7. **Learn:** record what worked, what changed, and whether the shared guidance should improve.

Screen footage is one resource, not the permanent background. Choose the scene that best expresses the message: a real action, an image, a progressive list, an explanation, a chapter heading, or the final result.

## Project layout

```text
docs/
  tryslides/                 Shared product and audiovisual reference
  video-organization.md     Composition and source organization
resources/
  <video-slug>/             Plan, original media, feedback, decisions, review
src/
  index.ts                  Remotion entry point
  Root.tsx                  Explicit composition registrations
  videos/
    <video-slug>/           Video implementation and its scenes
  components/               Genuinely shared visual components
public/
  videos/
    <video-slug>/           Cleared, render-ready media copies
scripts/                    Production-package generator and tests
```

Per-video source and public media directories are created when production needs them, not by the package generator. Use the same slug across the package, source, and media directories. Never put private recordings, scripts, feedback, or secrets in public media paths.

### Inside a production package

| File or folder                     | Purpose                                                                                         |
| ---------------------------------- | ----------------------------------------------------------------------------------------------- |
| `README.md`                        | Current status, approvals, blockers, composition IDs, preview/export locations, and next action |
| `brief.md`                         | Audience, objective, language, format, scope, and creative direction                            |
| `script.md`                        | Current narration, scene references, and deliberate pauses                                      |
| `timeline.md`                      | Scene order, timing, visuals, voice/music cues, transitions, and effects                        |
| `recording-checklist.md`           | Exact shots and actions to record, with capture requirements                                    |
| `assets.md`                        | Inventory, availability, paths, sources, rights, and original-to-render media mapping           |
| `images/`, `recordings/`, `audio/` | Source materials for this production                                                            |
| `feedback/notes.md`                | Incoming comments and requested changes                                                         |
| `feedback/decisions.md`            | Accepted changes, reasons, scope, and superseded decisions                                      |
| `deliverables.md`                  | Long-form video, cutdowns, thumbnails/covers, social post, and export status                    |
| `review.md`                        | Results, useful exceptions, lessons, and proposed documentation improvements                    |

Local feedback is not automatically a global rule. Support proposed improvements with concrete scenes and obtain owner approval before changing shared creative guidance.

## Preview and multiple videos

```sh
npm run dev
```

This starts Remotion Studio. Once productions are implemented and registered, select their compositions to preview and edit them. A complete video or delivery variant has its own composition ID, format, duration, and frame rate. Supporting scene registrations can enable independent scene editing without becoming separate finished deliverables.

The current root intentionally has no video compositions registered. Empty resource packages do not appear as videos in Studio; implement and register an approved production first. Do not add dummy videos merely to populate the editor.

Use distinct export paths for videos and variants so one production does not overwrite another. Follow the installed Remotion skills when implementing, previewing, or rendering; final export is separate from planning and preview.

## Long-form delivery package

Every production must include one 12–20 minute source video, four distinct 40–60 second vertical cutdowns from that same video, one YouTube thumbnail, one cover per cutdown, and a 1080 × 1080 social post. Keep all outputs under the same production package.

Use `deliverables.md` for output specifications, source mapping, composition/Still IDs, approvals, versioned paths, and export checks. Follow [deliverables and exports](docs/tryslides/deliverables-and-exports.md) for reframing, thumbnails, platform checks, and acceptance. This is a production plan, not an automatic batch-export or publishing command.

## Export quality

Final exports prioritize fidelity over file size and render speed. The CLI configuration uses PNG frames/stills and a high-quality software H.264 profile; preserve original materials and record master/delivery settings in `deliverables.md`. Do not mistake upscaling for new source detail or overwrite a master with a lighter platform copy. See the [quality-first export policy](docs/tryslides/deliverables-and-exports.md#quality-first-export-policy) for exact settings and tradeoffs.

## Checks and commands

| Command                                | Purpose                                                            |
| -------------------------------------- | ------------------------------------------------------------------ |
| `npm run create-video -- <video-name>` | Create an empty production package                                 |
| `npm run create-video -- --help`       | Show generator usage                                               |
| `npm run dev`                          | Open the composition preview/editing workspace                     |
| `npm run lint`                         | Run source lint and TypeScript checks                              |
| `npm run test:scaffold`                | Test package creation and protection against overwriting           |
| `npm run build`                        | Bundle the Remotion project; this does not render a finished video |

Documentation and source identifiers use English. Set the intended voiceover, caption, and on-screen language explicitly in each video's brief.
