# Build an interactive solar system lesson in TrySlides

Production slug: `solar-system-interactive-lesson`. Version: v01, 2026-10-17.

**Status: Awaiting review and narration — planned product recordings supplied; owner plan approval, full media/export review and audio remain pending. Not ready for final editing.**

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
2. Complete playback/privacy/continuity review of supplied R01–R03 and R05–R09 (R04 omitted), plus validation of supplied lesson files E01–E03. Receipt does not establish usable coverage.
3. English voice provider assignment and actual recorded narration; clean voice is required, music is optional.
4. Material inspection, brand/font clearance and any selected audio licenses.

All planned recordings are now supplied: R01, R02, R03 in two consecutive parts, and R05–R09. R04 is omitted by D011; R09 is a menu walkthrough under D013. Metadata is recorded in assets.md; only limited sample-frame reviews have occurred. Nine generated Sun/planet masters and the three lesson export files are supplied. Narration is still missing. No footage, file-import/export success or privacy clearance is inferred from receipt alone. No placeholder animatic authorized.

## Locations and preview

- Source archive: this package; recordings/ contains nine original MOV files; files/ contains supplied HTML/PDF/.tryslides exports; images/ contains nine Sun/planet master PNGs under masters/ plus documentation/provenance; audio/ still contains only .gitkeep.
- Proposed future implementation: `src/videos/solar-system-interactive-lesson/` (not created).
- Proposed future public media: `public/videos/solar-system-interactive-lesson/` (not created; never copy private raw recordings wholesale).
- Proposed export root: `out/solar-system-interactive-lesson/v01/` (not created).
- No registered composition IDs, Studio video preview, final exports, upload or publication exist. See proposed-only IDs in deliverables.md. Review this Markdown package before implementation.

## Next action

Review complete recordings for coverage, readability, continuity, privacy, source timing and successful navigation; validate the supplied HTML/PDF/editable package off-camera. Record any exact gaps instead of requesting blanket retakes. Then reconcile the plan with verified coverage, obtain owner approval and assign/produce English narration. No additional capture is requested merely because files have variable timing or non-16:9 framing. Final editing remains gated by review, approval and material readiness.

## R02 intake · 2026-10-18

Current file rechecked: 3024 × 1898, H.264, 25.150 seconds, 4,504,837 bytes, no audio stream; average stream rate 2520/89 (~28.31 fps), not verified constant frame rate. This supersedes the earlier 29.408-second / 3,811,361-byte intake description at the same path. Tail frames at 24.0 and 24.7 seconds show the Dark theme card and its applied result: black slide, white heading, gray question. Owner confirms creation → title → question → Dark theme; D008 records this local direction. Only tail samples reviewed in this update, not complete playback/privacy clearance. End sample still has question selected; start R03 with a deselected five-second hold. Preserve original MOV; do not stretch the non-16:9 source or request a retake solely for its format.

## Sun asset added · 2026-10-18

Nine masters now exist: eight planets plus `images/masters/09-sun-master.png`. Import the Sun before Mercury and label it Sun. See images/README.md. Supersedes native-shape Sun recommendation; size/alpha checked and generated output viewed.

## R03 intake · 2026-10-18

Both original MOVs are present: `R03-build-overview-take01.mov` (70.37 s) and `R03-build-overview-take02.mov` (92.97 s). Owner identifies them as consecutive sections: planet import/layout/sizing, then labels. Metadata checked: both 3024 × 1898 H.264 without audio. Visual content/continuity/privacy review pending; do not discard take01 as superseded. See assets.md for exact metadata. R04 is omitted by owner decision D011 because adjustments were minimal. R05 is the next capture; no staged design problems or before/after required.

## R05 intake · 2026-10-19

R05 supplied; metadata and frames at 1/15/29s plus screenshot reviewed. Step 1 has enlarged Earth at right; overview title/question remain at left. This intermediate copy can be resolved in R06 without repeating R05. Next: capture Step 1 detail copy and Back element; verify Base remains unchanged. Full playback, continuity/element identity, timing and privacy acceptance remain pending.

## R06 intake · 2026-10-19

R06 received (40.78s). File metadata and owner screenshot reviewed; complete video playback pending. Current detail view has Earth at right and Earth heading, detail copy and `Back` at left. Owner replaced title/description; verify unchanged Base in the actual editor before R07. Next capture: configure Earth Click → Step 1 and Step 1 Back Click → Base, using the actual saved controls. D012 adopts the supplied `Back` label; no return interaction is yet proven.

## R07 intake · 2026-10-19

R07 supplied as `recordings/R07-configure-interactions-take01.mov` (23.44s); file and metadata checked, not visual interaction settings or playback. Owner reports completion. Next capture: R08 in Present, uninterrupted overview → Earth detail → Back round trip twice, with reading holds. Do not equate configuration-file receipt with working navigation proof. No automatic commit or push authorized by this hand-off.

## R08 and export files received · 2026-10-19

R08 supplied (35.80s); file metadata checked, complete round-trip playback/privacy review pending. Found lesson HTML/PDF/.tryslides in `files/` with original `Our Solar System` filenames; files not opened or tested yet. E01–E03 are present, not validated. Next: R09 record actual HTML opening and Earth/Back test, plus PDF inspection; preserve existing exports and avoid duplicate downloads. R01 hero capture still outstanding.

## R09 received / scope simplified · 2026-10-19

Owner supplied R09 (17.68s) after choosing the shorter menu-overview treatment, D013. Metadata and 8s menu frame checked, not full playback/privacy. S10 narration/storyboard/checklist aligned: real menu choices plus explanatory comparison; file validation stays off-camera and pending. Next owner recording: R01 clean result in Present; preserve full slide, overview → Earth → Back with five-second holds, repeat once. Overall approval, narration and complete media/export review still outstanding.

## R01 intake / planned captures supplied · 2026-10-19

`recordings/R01-finished-result-take01.mov` is present: 27.625s container duration, 3024 × 1898 H.264, no audio. Metadata checked only; hero framing, round trips, holds, actual decoded timing and privacy remain unreviewed. All requested capture IDs are supplied except intentionally omitted R04; this is intake completion, not production or final-review completion. No commit, push, render or editing authorization inferred from this hand-off.
