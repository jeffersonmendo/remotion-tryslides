# Video packages, readiness, and learning

## One package per video

Plan and collect the video before starting its final edit. Keep its brief, script, audiovisual timeline, assets, recording instructions, feedback, decisions, and review together. This applies to every video type, not only tutorials.

Shared product and visual facts remain in `docs/tryslides/`. Individual production packages live in `resources/<video-slug>/`; do not create a second competing package in `docs/videos/`.

## Create the starting structure

From the project root:

```sh
npm run create-video -- getting-started-with-tryslides
```

Use `npm run create-video -- --help` for usage. This is a local npm script, not `npm create-video` or `npm create video`, and it does not download a generator.

The command creates:

```text
resources/
  getting-started-with-tryslides/
    README.md
    brief.md
    script.md
    timeline.md
    recording-checklist.md
    assets.md
    review.md
    deliverables.md
    feedback/
      notes.md
      decisions.md
    images/
    recordings/
    audio/
```

The ten Markdown files are intentionally empty. Media directories contain only `.gitkeep` so Git can retain them. There are no fake materials, preapproved decisions, sample video content, or automatically registered compositions. Reusing an existing name fails without overwriting its files; names must be lowercase kebab-case, at most 80 characters, with no path separators.

## What to write in each file

| File                     | Responsibility                                                                                                                                        |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `README.md`              | Package index, current status, approvals, blockers, composition/preview/export locations, and next action                                             |
| `brief.md`               | Audience, objective, scope, language, format, duration, CTA, product grounding, and visual/audio direction; use the shared brief reference            |
| `script.md`              | Current narration and intentional pauses, organized by scene IDs; include version/date and approval state                                             |
| `timeline.md`            | Current audiovisual sequence: scene IDs, timing, message, scene type, spoken/music cues, visual actions, text, entry/exit, effects, and asset IDs     |
| `recording-checklist.md` | Exact shots needed, starting state, actions, framing, language, holds, expected result, filenames, privacy, and capture status                        |
| `assets.md`              | Material IDs, paths, purpose, source/rights, owner, availability, and verification; include images, recordings, voice, music, and effects as relevant |
| `feedback/notes.md`      | Dated incoming comments, requested changes, affected scenes, and whether the comment is unresolved or addressed                                       |
| `feedback/decisions.md`  | Accepted production decisions, reasons, scope, related feedback, and superseded decisions                                                             |
| `deliverables.md`        | Output inventory: long-form, cutdowns, thumbnails/covers, social post, source mapping, formats, approvals, versioned export paths, and inspection     |
| `review.md`              | Evidence-based review of what worked, what did not, useful exceptions, and proposed improvements to shared guidance                                   |

The detailed timeline belongs in `timeline.md`, not in a second storyboard maintained separately. `brief.md` can link to it. Reference materials by stable IDs so a replacement file does not make the plan ambiguous.

## Delivery family

Follow [deliverables and exports](deliverables-and-exports.md). For an approved long-form package, plan the 12–20 minute video together with four 40–60 second vertical cutdowns, a YouTube thumbnail, four covers, and a 1080 × 1080 social post. Keep their specifications/status in `deliverables.md` and their edit decisions in `timeline.md`. Share sources, not competing production packages. A smaller commercial or a different approved scope does not need to follow the long-form duration.

Existing packages are not migrated or overwritten by the generator. If one predates `deliverables.md`, add that planning file during its next relevant update.

## Planning and materials first

1. Read the shared references and inspect the package if it already exists.
2. Fill the brief, script, and timeline together. Do not return only a narration paragraph in chat and leave the package empty.
3. Identify what the agent can create and what the owner must record, supply, license, or approve. Put concrete requests in the recording checklist and asset inventory.
4. Gather and inspect required materials. Check that footage shows the expected actions, audio is usable, and files can be used for this video.
5. Record approval and readiness in the package index before beginning the final edit.

Suggested status labels are **Planning**, **Awaiting materials**, **Ready for editing**, **Editing**, **In review**, and **Complete**. These are manual production states, not an automated approval system. A newly scaffolded folder has no status until populated and reviewed.

### Ready-for-editing checklist

- The brief, current script, timeline, and intended delivery inventory are populated and approved by the owner, including the visual/audio approach and any required derivative outputs.
- Each scene has its required evidence and available source material, or an explicitly approved plan to create the graphic/audio material during production.
- Recording requests, sources, rights, and private-information handling are resolved for required material.
- Blocking factual questions and conflicting decisions are resolved.
- Feedback that changes the approved plan has been reconciled with the current files.

If a requirement is missing, identify the exact blocker and request it. Do not assume that an existing file is approved or that an empty scaffold is ready. Planning can continue; final editing should wait. An explicitly requested rough animatic can use clearly identified temporary placeholders, but it is not final delivery and does not silently authorize missing evidence.

## Editing and revisions

Follow [video and composition organization](../video-organization.md) when production begins. Use the same slug for the resource package, `src/videos/<video-slug>/`, and `public/videos/<video-slug>/`. Keep explicit delivery registrations in `src/Root.tsx`, with supporting scene registrations as required by the installed editing skills. Record their IDs and source/media/export paths in the package index. The scaffold command remains planning-only.

Build from the approved package using the audiovisual direction and applicable Remotion skills. Keep raw recordings unchanged; use derived clips and preserve the recording-app project where available. Record which source files and edits correspond to the timeline.

The resources directory is the source archive, not automatically a public media URL. When implementation needs a renderable media copy, use the per-video `public/videos/<video-slug>/` convention following the installed Remotion loading guidance and record that relationship in `assets.md`; do not copy private raw material indiscriminately into `public/` or create competing editable masters.

Keep narration, captions, visual actions, and effects synchronized after edits. Record significant requested changes in feedback; update the current script and timeline when the accepted edit changes them. The package must describe the current result, not remain frozen at the first draft.

## Feedback is not the same as a decision

For incoming feedback, capture date, source, scene/timecode, observation or requested change, and status. Preserve meaning when recording English summaries of comments in another language. Mark uncertain interpretations instead of silently presenting them as approval.

For an accepted decision, capture:

- Date and decision ID.
- Linked feedback and affected scene or timecode.
- The chosen change and why it was made.
- Scope: this scene, this video, or a proposed project-wide rule.
- Owner approval/status and implementation state.
- Any earlier decision it supersedes.

Example: “Use thinner, lower-contrast arrows in the editor walkthrough because the current arrows obscure the controls.” That is initially a local decision, not a ban on all arrows across future videos. Keep the history readable: append a superseding decision rather than silently rewriting why an earlier choice was made.

Do not log every keystroke. Record changes that affect the message, visual direction, sound, workflow, or a meaningful production constraint.

## Learn from the finished video

The package is also a learning record for the owner and future production work. Complete `review.md` after a meaningful review; do not invent success because a render finished or someone called the video “perfect.” Owner satisfaction is useful qualitative feedback, distinct from audience-performance evidence.

Record:

1. The version/export reviewed and who reviewed it.
2. What worked, with specific scenes/timecodes and reasons.
3. What did not work, what changed, and the observed result.
4. Exceptions where departing from shared guidance helped, including the original rule and the context.
5. What to reuse, what not to repeat, and what remains uncertain.
6. Proposed shared-documentation changes, with evidence, tradeoffs, scope, and approval status.

Example: a strong transition may help separate chapters even though subtle transitions are the default. The learning is not “make all transitions stronger,” but “use a more pronounced transition when a clear chapter boundary benefits from it, while keeping continuous demonstrations quieter.” Link the relevant scene and accepted feedback.

## Improve shared guidance deliberately

- Compare outcomes with the guidance instead of assuming the documentation is always right.
- Identify whether the result is a reusable principle or a successful exception for this video.
- Propose the smallest precise update to the relevant shared chapter; explain what changes and why.
- Obtain owner approval before promoting local feedback into project-wide creative rules.
- When approved, update the shared reference and record the affected path and decision in the video's review.
- Preserve product truth: a successful creative choice cannot override verified product capabilities, rights, privacy constraints, or factual limits.

This creates a loop: **plan → gather → approve → edit → review → learn → improve the reference**. Do not change global guidance automatically after every comment, and do not leave confirmed reusable learning trapped in chat.
