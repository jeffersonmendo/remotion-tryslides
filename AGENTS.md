# Agent Guide

## Project purpose

This project creates and maintains TrySlides videos with Remotion. Work includes product research, ideas, briefs, scripts, storyboards, visual design, animation, editing, captions, audio, and review. Do not treat the project documentation as a resource only for writing scripts.

## Required reference

Before starting any task, read [the project reference](docs/tryslides/README.md), then the chapters relevant to the work:

- [Product](docs/tryslides/product.md): capabilities, benefits, and real workflows.
- [Audiovisual direction](docs/tryslides/audiovisual-direction.md): message-led scenes, narration, music, effects, transitions, and editing across all video types.
- [Visual identity](docs/tryslides/visual-identity.md): colors, typography, logo, composition, and motion.
- [Templates and themes](docs/tryslides/templates-and-themes.md): catalog examples and design distinctions.
- [MCP and AI](docs/tryslides/mcp-and-ai.md): assistant workflows, permissions, and boundaries.
- [Limits and claims](docs/tryslides/limits-and-claims.md): access, exports, quotas, and truthful messaging.
- [Video production](docs/tryslides/video-production.md): planning, capture, editing, and final review.
- [Video workflow](docs/tryslides/video-workflow.md): per-video resource packages, readiness, feedback, decisions, review, and improvement of shared guidance.
- [Video organization](docs/video-organization.md): per-video source and render media, explicit composition registrations, scene editing, variants, and shared components.
- [Deliverables and exports](docs/tryslides/deliverables-and-exports.md): long-form packages, four derived shorts/reels, thumbnails/covers, square posts, and export review.
- [Video brief](docs/tryslides/video-brief.md): reusable planning and revision record.
- [Sources and maintenance](docs/tryslides/sources-and-maintenance.md): evidence and factual updates.

Read the audiovisual direction and visual reference before planning, designing, or editing scenes or audio. These apply to commercials, feature announcements, explainers, demonstrations, tutorials, and social clips, not only tutorials. Read the product and claims references before writing or changing product statements. Inspect the existing project and relevant assets before proposing replacements.

Load the applicable skills from `.agents/skills/` before implementation. Use the installed `remotion-best-practices` skill as the router to the relevant Remotion guidance. Do not assume a dependency or skill is installed without checking.

## Truthfulness

- Separate verified product facts, production recommendations, and unresolved assumptions.
- Repository documentation does not prove that a feature is deployed. Verify the environment used in the video.
- Recheck changeable claims before publication: pricing, quotas, plan access, catalog counts, interface labels, client compatibility, and launch status.
- Do not invent features, testimonials, customer numbers, performance guarantees, or competitor comparisons.
- Do not present MCP as built-in AI or promise compatibility with every AI chat.
- Do not confuse templates with themes, video formats with slide formats, or editorial effects with product capabilities.
- If sources and the visible product disagree, investigate before using the claim. Record unresolved facts rather than guessing.

## Starting a new video

For a new commercial, announcement, explainer, demonstration, tutorial, or social video, prepare a coherent production plan before implementing scenes:

1. Create or locate `resources/<video-slug>/` following the video workflow. Use `npm run create-video -- <video-slug>` for a new empty package. Define the audience, objective, main takeaway, language, intended channel, duration, format, and CTA. Mark reasonable production assumptions explicitly; do not turn them into product facts.
2. Ground the topic in the product reference and identify the exact workflow to demonstrate.
3. Use the brief template to prepare the script, storyboard, visual direction, material requirements, and delivery inventory together. For a long-form production, plan one 12–20 minute video, four distinct 40–60 second vertical cutdowns, one YouTube thumbnail, four vertical covers, and one 1080 × 1080 social post unless the owner approves a different package.
4. For each beat, specify the message, scene type, timing, voiceover or music cue, visual representation, on-screen copy, entry/exit, sound effects where useful, product evidence, and required materials. Do not return only narration with generic screen-recording instructions.
5. Separate work the agent can create from recordings, approvals, or assets the user must supply.
6. Before final editing, confirm owner approval of the plan, inspect required materials, and record readiness or exact blockers in the package index. Empty files are not an approved plan. Explicitly requested rough animatics may use clearly identified placeholders.
7. Follow the requested scope. A request for a script or materials is not permission to implement a video. If production is explicitly requested, continue within that scope once the necessary inputs are available.

Do not respond with only a voiceover paragraph when the user requests a full production plan. Do not force a new full plan for a small edit to an existing video; consult its brief and change only the relevant parts.

## Requesting recordings and other materials

Never ask vaguely for “a screen recording.” Give a concrete capture checklist that the user can follow:

- Shot ID and the beat it supports.
- Starting page, presentation, slide, or Step, including necessary account access or sync state.
- Exact actions to perform, in order, using the current interface labels.
- The result that must remain visible and suggested hold time before and after the action.
- Required framing, resolution/aspect ratio, interface language, cursor visibility, and audio needs for the chosen video.
- Private information to hide and whether the shot will be cropped or reframed.
- Suggested filename and where to place the file, following any existing project convention.

Explain whether each input is required or optional and whether it will be supplied by the user, captured through available authorized tools, or created in Remotion. Inspect available materials before requesting duplicates.

Do not claim to have recorded or inspected footage that is not available. Temporary placeholders must be clearly identified in previews and removed or explicitly approved before final delivery. Do not replace missing product evidence with fabricated interface behavior.

When a necessary decision cannot be safely inferred, ask one concise question at a time and wait for the answer. Otherwise, state reasonable production assumptions and keep planning without unnecessary questioning.

## Composition organization

- Follow `docs/video-organization.md` before adding or restructuring video code. Use the same slug for `resources/<video-slug>/`, `src/videos/<video-slug>/`, and `public/videos/<video-slug>/`.
- Track all outputs in the package's `deliverables.md`, with source scene/version/timecode mapping for cutdowns, independently useful edits, specifications, status, and versioned output paths. Register static delivery designs with `<Still>` when implemented. Do not treat a crop or a generated filename as an approved export.
- Keep each delivery video/variant as a distinct explicit composition registration in `src/Root.tsx`, with a unique stable ID and its own metadata. Keep scenes local; add supporting connected registrations when required by the installed Studio-editing guidance.
- Share components only when there is actual reuse. Preserve other videos and review affected compositions after shared changes.
- Keep original media in the resource package and cleared render-ready copies under public media paths, with source mapping in `assets.md`. Do not put private recordings or documentation in public hosting.
- Record composition IDs, source entry, variant/timeline mapping, media paths, and distinct export paths in the package. The resource command must not create empty compositions or modify the root registry.

## Design, animation, and editing

- Represent the current message visually: use relevant images, progressive lists, comparisons, diagrams, animated headings, product actions, or result scenes as appropriate. Screen recording is one resource, not the permanent background.
- Change the scene when the intention changes, not at a fixed interval or for every word. Within-scene emphasis can be sufficient.
- Plan voice, music, and effects together. Use selected clicks, drags, reveals, or transition sounds purposefully; do not imply added editorial sounds or cursor effects are TrySlides features.
- For narrated videos, edit out errors, repetition, and accidental long gaps while preserving natural speech and intentional pauses. Keep footage and captions synchronized after audio cuts. Do not force continuous speech onto a music-led video.
- Inspect existing recorded zooms before adding new ones; preserve original footage and do not assume ordinary video files include separate cursor data.

- Use the documented visual identity; distinguish application UI, public-page illustrations, and presentation themes.
- Treat suggested video colors, sizes, pacing, and logo spacing as recommendations, not an owner-approved brand book.
- Use the original logo and verified font assets. Preserve relevant notices and verify rights for other media.
- Prefer real product footage for feature demonstrations. Make illustrative scenes distinguishable from actual UI.
- Keep titles, overlays, captions, and scene timing editable where practical.
- Preserve readable UI when reframing desktop footage for vertical video.
- Use motion to explain or direct attention, not to decorate every moment.
- Do not disguise cuts as instant generation, synchronization, or export performance.
- Preserve unrelated user changes. Avoid unnecessary dependencies, broad refactors, or overwriting existing compositions and media.

## Preview, verification, and delivery

- Final exports prioritize the highest useful fidelity, not smallest files or fastest encoding. Follow the quality-first policy in `docs/tryslides/deliverables-and-exports.md`, preserve originals/masters, and record any override or required platform reduction. Do not upscale footage or invent frame detail just to claim higher quality.
- Preserve the configured PNG/H.264 CRF 1 software profile for standard final CLI MP4s; use compatible explicit options for other codecs and direct rendering APIs. Distinguish preview copies, preservation masters, and upload deliveries. Never claim the lossy MP4 profile is lossless.

- Follow the installed Remotion skills for previewing and implementing compositions.
- Do not render a final video merely because the user requested a script or preview. Render/export when explicitly requested.
- When code changes, run relevant checks using the actual package scripts; this project provides `npm run lint`, `npm run build`, and `npm run test:scaffold` for the resource generator. Report failures accurately.
- Review representative frames and playback, including text legibility, cuts, captions, audio, and the final CTA. Do not claim visual or audio review if it was not performed.
- Before final delivery, inspect every requested video and static output against `deliverables.md`, including framing, audio/captions, cover crops, and current platform upload requirements. Do not claim export, upload, or publication without performing it.
- Before final video delivery, apply the checklist in the production reference and inspect the exported file when one was requested.
- Report what was created or changed, how to preview it, checks performed, and any missing inputs or remaining limitations.

## Documentation and collaboration

- Keep shared product and audiovisual reference in `docs/tryslides/`. Keep each video's plan, materials, feedback, decisions, and review in `resources/<video-slug>/`; do not maintain a competing package in `docs/videos/`. Preserve existing work rather than silently migrating it.
- Record meaningful feedback in `feedback/notes.md` and accepted changes, reasons, scope, and superseded decisions in `feedback/decisions.md`. Keep the current script and timeline aligned with accepted revisions.
- Review specific scenes and outcomes in `review.md`, including useful departures from the guide. Distinguish owner satisfaction from measured audience results. Propose evidence-based improvements and obtain owner approval before promoting local preferences into project-wide rules.
- Keep replies concise and in the user's current language. Keep documentation and code in English unless explicitly requested otherwise; record the intended language of each video's script, captions, and visible copy in its brief.
- Do not commit or publish unless requested. When commits are requested, use conventional commits without AI attribution or `Co-Authored-By` trailers.
