# Owner capture checklist — v01

Status: R02 received and sample frames inspected; R03 received as two consecutive MOV parts with metadata checked, visual review pending. R01/R05–R09 still requested; R04 omitted by owner decision D011. First approve the plan and do a product dry run. If the interface differs, send a screenshot and environment/version instead of guessing. Final narration should wait until the dry run confirms the actions.

## What you need to find or supply

**Required from owner:** a desktop TrySlides session authorized for the demonstration; the nine recordings below; the editable `.tryslides` example, actual exported HTML and PDF; approval of the English script; an assigned English voice provider. The recommended audience is teachers, pending approval.

**Updated by owner, 2026-10-18 (D006):** import the eight agent-generated transparent PNGs from `images/masters/`. Reduced copies were deleted at owner request. Use uniform visual globe sizing in the overview; preserve aspect ratio and allow Saturn's rings extra width. See [image instructions](images/README.md). No external planet search is needed. Source imagery is AI-generated and not scientifically to scale; actual import/appearance still needs live verification. No stock footage, customer logos or music search is required now.

**Optional:** if you prefer to narrate, supply a 20-second English dry-read sample before recording the complete script, then clean per-scene WAV files after approval (48 kHz, 24-bit if available, quiet room, no music/noise processing baked in, 3 seconds room tone at ends). Otherwise the voice provider is still an open production assignment; no paid or synthetic service has been chosen.

## Common capture settings (all R01–R09)

- Owner decision, 2026-10-18: use the native Mac screen recorder for this production; OBS is deferred to the next video. Keep the same full-screen framing as R02, preserve original MOV files and inspect actual timing/resolution on arrival. The 30 fps target below is the original planning baseline, not a requirement to replace the recorder or force its output to constant fps. Final cadence is still unresolved.

- English interface and English presentation text. Desktop browser, notifications off, clean test account, no private deck names, emails, avatars, billing, bookmarks, other tabs or desktop files visible. Do not record credentials or Google login; start already signed in.
- Capture the product window at native 3840 × 2160 / 30 fps if the display supports it while controls remain readable; otherwise native 1920 × 1080 / 30 fps. Do not upscale a smaller recording. Use normal browser zoom; adjust only to restore readable controls and record any deviation.
- Keep cursor visible with deliberate movement. Turn off recorder-added zooms, cursor trails and click effects where possible; preserve a recorder project if it already contains those effects. No microphone or system audio needed for these shots.
- Prefer high-quality original MOV/MP4 or recorder master, not a compressed messaging-app copy. Keep originals unchanged. Stop and restart for errors rather than overwriting a successful take; suffix `-take02`, etc.
- Hold the clean starting state for **3 seconds**, perform actions at an understandable pace, then hold the final result for **5 seconds**. Essential navigation in R01/R08/R09 must remain continuous, normal speed and uncut.
- Capture full window/context, not permanently zoomed in. Product footage will be selectively cropped for landscape and separately reframed for vertical. Keep the Earth object, relevant properties and Back control visible in their respective shots.
- Save originals to `resources/solar-system-interactive-lesson/recordings/`. Filenames below are suggested `.mp4`; retain `.mov` if that is the original recording format. Do not move raw captures into `public/`.
- Before sending, check actual resolution/fps, readable controls, start/end holds and privacy. If privacy cannot be cleared, flag the file as blocked rather than assuming a later blur is sufficient.

## Build and capture order

Record R02 → R03 → R05 → R06 → R07 → R08 → R09; record the result-first R01 last. Keep the same presentation and object identities throughout. Dry run first; do not narrate over the capture unless separately agreed.

### R02 · Create the presentation · S03

Received: `R02-create-presentation-take01.mov` (2026-10-18). Current-file tail samples confirm English title/question and Dark presentation theme applied. Metadata rechecked: 25.150 seconds, 4,504,837 bytes, H.264, 3024 × 1898, average rate 2520/89 (~28.31 fps), no audio stream; not verified constant frame rate. This supersedes the earlier 29.408-second file metadata. Full playback/privacy acceptance pending. Preserve original; add a clean deselected five-second result hold at the beginning of R03 rather than repeating creation solely for a hold.

- Start: signed-in English presentations list; no private content visible.
- Actions: create a blank presentation using the actual current create control; name it `Our solar system`; select its slide; add text from toolbar; choose H1 if offered; type `Our Solar System`; add `Where is Earth?` as supporting text; select the presentation theme `Dark` for the owner-selected dark lesson backdrop.
- Result: title, subtitle, left slide navigation, canvas and properties readable. Hold 5 seconds.
- File: `R02-create-presentation-take01.mp4`. Required; owner capture.
- Exact create-control label is not established by the source guide. Confirm it in the dry run; do not stage a fake label.

### R03 · Build the overview · S04

Received as two consecutive parts, not alternative takes (owner report, 2026-10-18): `R03-build-overview-take01.mov` imports, arranges and resizes planets; `R03-build-overview-take02.mov` adds labels. Preserve both filenames/originals; editing order is take01 → take02. File presence and metadata checked; content, continuity, clean holds, Sun, qualification text and privacy still require visual review.

- Start: the same R02 presentation, Base state, Dark theme retained, heading and question visible. Deselect all elements and hold the clean slide for 5 seconds before importing images.
- Actions: import the Sun from `images/masters/09-sun-master.png` and the eight original `images/masters/<NN>-<planet>-master.png` files from the device; use uniform visual globe sizing with room for Saturn’s rings; place them on the canvas and add editable text labels; label in order `Mercury`, `Venus`, `Earth`, `Mars`, `Jupiter`, `Saturn`, `Uranus`, `Neptune`; use order numbers 1–8 if wrapping to two rows; keep Earth identifiable from its image and text label. Add `Simplified diagram — sizes and distances not to scale` and `Click Earth to explore`.
- Result: legible schematic with no false scale implication. Earth is the third planet marker; only Earth will be interactive. Hold full diagram 5 seconds.
- File: `R03-build-overview-take01.mp4`. Required; owner capture. Record all actions even if repetitions will be shortened later. Import the high-resolution Earth master from the start; retain the same element when creating the detail Step. No source replacement is needed.

### R04 · Omitted · D011

Owner declined a separate refinement capture because adjustments were minimal. No R04 file is required. S05/SH02/CV02 will explain hierarchy using the actual finished R03 result after visual review, not an invented before/after. Next capture: R05.

### R05 · Create the Earth Step · S06

- Start: polished Base with Earth visible; Steps controls visible.
- Actions: add a Step from Steps controls; use a recognizable Earth name if naming is supported; select the existing/inherited Earth image element, enlarge and reposition it; rearrange other content for the focused view. Do not duplicate Earth into an independent object or reimport its PNG in the detail Step. Switch Base → new Step → Base to demonstrate state independence.
- Result: Base still has the overview; the detail has the same Earth in focus. Hold each state 5 seconds.
- File: `R05-earth-step-take01.mp4`. Required; owner capture. Record the actual destination name shown by the interface for R07.

### R06 · Add Earth detail copy · S07

- Start: Earth detail Step selected.
- Actions: add `Earth`, `Third planet from the Sun`, and `Find Earth in the overview`; add a clearly visible text/shape control labeled `Back to overview`. Keep wording readable and unclipped.
- Result: focused explanation plus visible return element; do not imply it works yet. Hold 5 seconds.
- File: `R06-detail-copy-take01.mp4`. Required; owner capture.

### R07 · Configure both interactions · S08

- Start: Base selected, Earth visible.
- Actions: select Earth → Properties → plus beside `Interactions` → event `Click` → navigation to the actual Earth Step destination → save using the actual form control. Then select detail Step → select `Back to overview` → Interactions plus → `Click` → destination `Base` → save. Hold the saved settings of each for 5 seconds.
- Result: state-specific saved interactions, not an unsaved form. Source guides verify Properties/Interactions/Click/Base; exact action/save labels and Step name must be checked in the live form.
- File: `R07-configure-interactions-take01.mp4`. Required; owner capture. No account/sync prerequisites beyond authorized access to this example; hosted sharing is not used.

### R08 · Prove playback · S09 and derivative proof

- Start: completed example in editor at Base.
- Actions: use `Present`; hold overview; click Earth; hold 5 seconds; click `Back to overview`; hold 5 seconds; repeat round trip once without stopping. Capture full slide and cursor. Optional separate correction take only if a real problem is found.
- Result: readable, uninterrupted working journey; no properties panel acting as substitute for playback.
- File: `R08-present-round-trip-take01.mp4`. Required; owner capture. Preserve natural transition duration.

### R09 · Export and test · S10

- Start: completed presentation, all assets available; check save status and, if using cloud, wait for synchronized status. No second-device or hosted-share claim is needed.
- Actions: open actual presentation menu; download HTML; open actual downloaded file in browser; test Earth → Back uninterrupted. Return to editor; download PDF; open and show Base and Earth Step pages as static pages. Download editable `.tryslides` backup as well. Capture actual selected format labels; do not show sensitive filesystem paths in video.
- Result: real HTML navigation and actual PDF pages. If export fails, keep evidence privately and report blocker; do not use a graphic as a replacement result.
- File: `R09-export-and-test-take01.mp4`. Required; owner capture. Separate `-html` and `-pdf` takes are acceptable if browser/file opening needs a cut; navigation proof itself must be continuous.
- Put source outputs in this private archive directory: `recordings/our-solar-system-v01.html`, `recordings/our-solar-system-v01.pdf`, `recordings/our-solar-system-v01.tryslides`. These are lesson assets, not delivered tutorial videos.

### R01 · Opening and closing result · S01/S12

- Start: completed example in Present, Base, no editor chrome.
- Actions: hold overview 5 seconds; click Earth; hold detail 5 seconds; click Back; hold overview 5 seconds. Repeat once with cursor parked away from text.
- Result: clean hero proof, full diagram and qualification legible. No video-editor zooms baked into capture.
- File: `R01-finished-result-take01.mp4`. Required; owner capture. Record last, reuse at opening and closing.

## Hand-off manifest

For each file provide filename, capture date, environment URL/build if known, browser, native dimensions/fps, interface language, known errors, privacy clearance and whether cursor/zoom effects were baked in. Do not include passwords or session tokens. Actual materials and approvals will update README and assets; supplying files does not automatically approve their use.
