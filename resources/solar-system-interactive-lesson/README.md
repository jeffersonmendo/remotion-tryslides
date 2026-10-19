# Build an interactive solar system lesson in TrySlides

Production slug: `solar-system-interactive-lesson`. Version: v01, 2026-10-17.

**Status: Planning — draft awaiting owner approval and required materials. Not ready for editing.**

## Current package

- [Brief](brief.md): recommended teacher audience, English delivery, result-first ~14-minute tutorial.
- [English script](script.md): complete scene-organized narration, approximately 1739 spoken words, estimated timings rather than a recorded runtime.
- [Audiovisual storyboard / derived edits](timeline.md): 12 scenes, 840 seconds / 25,200 frames at 30 fps; four distinct 50-second cutdowns mapped to this source.
- [Owner recording checklist](recording-checklist.md): settings, exact actions, clean holds, filenames and capture order for nine shots.
- [Assets and evidence](assets.md), [delivery inventory](deliverables.md), [feedback](feedback/notes.md), [decisions](feedback/decisions.md), [review](review.md).

## Confirmed vs proposed

- Confirmed by owner: English video; prepare script/resources and explain owner capture/material needs.
- Recommended, not yet approved: teacher audience, transparent-PNG solar-system example (planet imagery approved by owner; broader plan still pending), detailed script/storyboard and delivery designs.
- Facts: grounded in project/product source guides; running deployment and exported behavior have NOT been checked.

## Exact blockers

1. Owner approval of brief, script, storyboard, audience and full family.
2. Remaining product captures R01/R05–R09 and lesson source/export files E01–E03; R02 and both R03 parts are supplied, but complete visual/privacy clearance remains pending.
3. English voice provider assignment and actual recorded narration; clean voice is required, music is optional.
4. Material inspection, brand/font clearance and any selected audio licenses.

R02 has been supplied as `recordings/R02-create-presentation-take01.mov` and received a metadata/sample-frame review on 2026-10-18. Other recordings, voice and lesson export files are still missing. Eight generated planet masters are now supplied; reduced copies were removed per D006; see [image import instructions](images/README.md). No user behavior or interface has been simulated as evidence. No placeholder animatic authorized.

## Locations and preview

- Source archive: this package; recordings/ now contains the original R02 MOV; images/ contains only the eight master PNG assets under masters/, plus documentation/provenance; audio/ still contains only .gitkeep.
- Proposed future implementation: `src/videos/solar-system-interactive-lesson/` (not created).
- Proposed future public media: `public/videos/solar-system-interactive-lesson/` (not created; never copy private raw recordings wholesale).
- Proposed export root: `out/solar-system-interactive-lesson/v01/` (not created).
- No registered composition IDs, Studio video preview, final exports, upload or publication exist. See proposed-only IDs in deliverables.md. Review this Markdown package before implementation.

## Next action

Owner reviews the plan. R02 is supplied; retain its Dark presentation theme. Then dry-run the remaining product actions and capture R05 → R06 → R07 → R08 → R09 → R01, following recording-checklist.md. Agent-created transparent planet masters are supplied for a uniform-size overview; see images/README.md and verify live import before recording. Assign the English voice provider before audio production. Update readiness after actual media inspection and approval.

## R02 intake · 2026-10-18

Current file rechecked: 3024 × 1898, H.264, 25.150 seconds, 4,504,837 bytes, no audio stream; average stream rate 2520/89 (~28.31 fps), not verified constant frame rate. This supersedes the earlier 29.408-second / 3,811,361-byte intake description at the same path. Tail frames at 24.0 and 24.7 seconds show the Dark theme card and its applied result: black slide, white heading, gray question. Owner confirms creation → title → question → Dark theme; D008 records this local direction. Only tail samples reviewed in this update, not complete playback/privacy clearance. End sample still has question selected; start R03 with a deselected five-second hold. Preserve original MOV; do not stretch the non-16:9 source or request a retake solely for its format.

## Sun asset added · 2026-10-18

Nine masters now exist: eight planets plus `images/masters/09-sun-master.png`. Import the Sun before Mercury and label it Sun. See images/README.md. Supersedes native-shape Sun recommendation; size/alpha checked and generated output viewed.

## R03 intake · 2026-10-18

Both original MOVs are present: `R03-build-overview-take01.mov` (70.37 s) and `R03-build-overview-take02.mov` (92.97 s). Owner identifies them as consecutive sections: planet import/layout/sizing, then labels. Metadata checked: both 3024 × 1898 H.264 without audio. Visual content/continuity/privacy review pending; do not discard take01 as superseded. See assets.md for exact metadata. R04 is omitted by owner decision D011 because adjustments were minimal. R05 is the next capture; no staged design problems or before/after required.
