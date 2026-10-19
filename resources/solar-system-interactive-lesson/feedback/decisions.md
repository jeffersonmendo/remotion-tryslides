# Production decisions

## D003 · 2026-10-18 · Keep the native Mac screen recorder for this production

- Source: explicit owner preference after R02 intake; do not require OBS for this video. Owner intends to use OBS for the next video, not now.
- Accepted scope: capture workflow for this production only. Continue with the native Mac screen recorder and preserve original MOV files.
- Reason: avoid changing the owner's recording workflow mid-production.
- Tradeoff: inspect actual source dimensions and variable frame timing; do not promise constant 60 fps or require a retake solely because OBS was not used. Final framing/cadence remains subject to actual media review.
- Supersedes: OBS as the recommended immediate capture workflow, not the script or delivery-family approval gates.

## D001 · 2026-10-17 · English delivery language

- Source: F001, explicit owner request.
- Accepted scope: this production's narration, captions, lesson copy, titles and CTA.
- Reason: owner's requested delivery language.
- State: implemented in planning documents; voice/captions/video do not yet exist.
- Supersedes: no earlier approved production-language decision.

## D002 · 2026-10-17 · Prepare production resources

- Source: F001, owner request to prepare script and resource package and specify captures.
- Accepted scope: package preparation and material checklist only.
- State: documents populated. No final-edit, placeholder-animatic, paid-asset, render or publishing approval inferred.

## Pending recommendations — not owner decisions

- Teachers as primary audience, beginner level; solar-system lesson built from shapes, one slide with Base and Earth detail; ~14-minute English walkthrough and four 50-second derivatives.
- Reason: concrete end-to-end example with visible design, state and navigation proof; fewer external asset dependencies than a photo-led lesson.
- Tradeoff: narrower appeal than a general product overview, but clearer learning outcome. Shape markers are easier to supply/license than photos, but must remain explicitly not to scale.
- Scope: this production only. Owner approval pending; no project-wide creative rules changed.

## D004 · 2026-10-18 · Use transparent PNG planet images

- Source: explicit owner decision to use an individual background-free PNG for each planet.
- Scope: eight planet visuals for this production; replaces the earlier native-circle marker recommendation. Sun remains unspecified, with the existing shape plan retained provisionally.
- Reason: owner-selected visual treatment. Tradeoff: richer planet visuals but added source/rights, alpha and resolution verification.
- State: script, storyboard, brief and capture instructions updated; files not yet supplied. Preserve the same Earth image element across Base and Step for continuity.
- Does not imply approval of the entire script or permission to fabricate product footage.

## D005 · 2026-10-18 · Generate ready-sized planet PNGs

- Source: explicit owner request for agent-created planets that import at appropriate sizes.
- Accepted scope: eight supporting planet assets in this existing production, generated using built-in image_gen. No final-video production approval inferred.
- Implementation: eight transparent PNG import derivatives, eight preserved masters, full prompt manifest and import-size/readiness instructions. Sizes follow the documented code cap of 384 × 216 and an editorial two-row diagram; not actual astronomical scale.
- Tradeoff: smaller source files give correct initial geometry but cannot supply crisp enlarged detail. Preserve high-resolution masters and replace the source on the same Earth element, retaining its overview size, before making the detail Step.
- Verification: alpha/dimensions and native-size visual review completed; live import and owner approval pending. Supersedes owner-supplied-file requirement for these generated assets, not the preference for individual PNGs.


## D006 · 2026-10-18 · Keep only planet masters and use uniform visual sizing

- Source: explicit owner preference for all planets at the same size and instruction to delete the other versions, retaining masters.
- Scope: this video's planet artwork only; supersedes D005 reduced-size derivatives and the initial unequal-size layout recommendation.
- Implemented: eight reduced PNGs deleted; all eight master PNGs preserved unchanged; source/capture instructions aligned to direct master import. Documentation and prompt provenance retained.
- Tradeoff: uniform globe sizes favor comparison/readability, not scientific scale. Saturn's ring system requires wider bounds; preserve aspect ratio rather than stretch to equal file width. Editor sizing is still needed for equal visible globes, not guaranteed by untouched masters.
- Earth uses its master from first import; preserve its element identity across the Step.

## D007 · 2026-10-18 · Supply transparent Sun master

Owner requested a Sun image for import. Earlier plan used a native shape; now use `images/masters/09-sun-master.png` alongside the eight planet masters. Created using built-in image_gen, original preserved; no reduced copy, consistent with D006. Output viewed; dimensions/real alpha verified. Script, brief, storyboard and capture instructions aligned. Local asset decision only; final-edit/owner visual approval not inferred.

## D008 · 2026-10-18 · Retain the Dark presentation theme

- Source: F004, explicit owner-selected dark tone in R02.
- Scope: this lesson’s presentation artwork, not global TrySlides branding or a requirement to make all editorial scenes dark.
- Chosen direction: retain the `Dark` presentation theme, black slide background and readable light text through R03 and subsequent lesson states.
- Evidence: current MOV tail at 24.0s shows the Dark theme card; 24.7s shows its applied slide result. No exact theme HEX/font claim inferred.
- Implementation: brief, S03 narration/storyboard, capture checklist and intake records aligned. Supersedes the brief’s neutral-light lesson recommendation only. Full plan approval and final editing remain pending.
- Tradeoff: dark space imagery backdrop supports the chosen tone; gray question/labels still require readability checks at final viewing size.

## D009 · 2026-10-18 · Prefix master filenames in solar-system order

Source: F005. Renamed the nine existing master PNGs with two-digit prefixes: 00 Sun, 01 Mercury, 02 Venus, 03 Earth, 04 Mars, 05 Jupiter, 06 Saturn, 07 Uranus, 08 Neptune. Scope: this production only. Updated package paths and provenance mappings; SHA-256 checks confirm all image bytes unchanged. Sort the file picker by name; live batch import/placement ordering is not guaranteed by this rename. No imagery regenerated or duplicated.

## D010 · 2026-10-18 · Reverse master filename ordering

Source: F006. Supersedes D009 filename ordering: 01 Neptune, 02 Uranus, 03 Saturn, 04 Jupiter, 05 Mars, 06 Earth, 07 Venus, 08 Mercury, 09 Sun. Updated package paths and provenance; all nine image hashes unchanged. This is file-selection ordering only; the lesson diagram still follows the Sun-to-Neptune teaching sequence. No live import behavior is assumed.

## D011 · 2026-10-18 · Omit the separate R04 refinement capture

Source: F008, explicit owner decision. Reason: adjustments were minimal; no separate refinement recording is wanted. R04 is no longer required. Supersedes its required-capture status and the S05/SH02/CV02 before/after treatment. Keep the hierarchy teaching beat, using actual finished R03 material and editorial emphasis after source review; do not stage defects or imply undocumented changes. Script, timeline, brief, asset inventory, delivery inventory and next capture updated. Tradeoff: no transformation comparison, but avoids redundant capture and preserves the teaching point. R05 is next. Timing remains provisional; R03 visual/privacy review and broader approvals remain pending.
