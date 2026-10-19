# Asset register — v01

At creation no media existed. Update 2026-10-18: R02 MOV received and metadata/sample frames inspected; no full playback or audio listening review. Other captures and audio remain missing. All raw material remains private in this package; no render-ready copies have been created.

| ID          | Purpose / source path                                                                       | Supplier and rights                                                             | Availability / verification                                               | Future cleared render copy                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| R01/R05–R09 | Captures named in recording-checklist.md under `recordings/`                                | Owner; use clean authorized demo account, privacy clearance required            | Missing; actual product behavior untested                                 | `public/videos/solar-system-interactive-lesson/recordings/` only selected cleared derivatives, exact mapping pending |
| E01         | `recordings/our-solar-system-v01.tryslides`                                                 | Owner-created lesson backup                                                     | Missing                                                                   | Not public by default                                                                                                |
| E02         | `recordings/our-solar-system-v01.html`                                                      | Owner-created lesson HTML                                                       | Missing; must test in browser                                             | Not public by default                                                                                                |
| E03         | `recordings/our-solar-system-v01.pdf`                                                       | Owner-created lesson handout                                                    | Missing; must inspect Base + Step                                         | Not public by default                                                                                                |
| G01         | Question and three-stage story diagram, S02                                                 | Agent-created editorial graphic after approval                                  | Planned; not product UI                                                   | Local editable Remotion scene when approved                                                                          |
| G02         | Hierarchy annotations over actual finished R03 stills, S05                                             | Agent layout + owner recording                                                  | Planned; requires visual review of R03 result (D011)                                                     | As above                                                                                                             |
| G03         | Base/Step concept diagram, S06                                                              | Agent; distinctly illustrative, not fabricated app behavior                     | Planned                                                                   | As above                                                                                                             |
| G04         | HTML/PDF comparison, S10                                                                    | Agent; facts supported by source guides                                         | Planned; actual result proof uses R09                                     | As above                                                                                                             |
| G05         | Five-step recap, S11                                                                        | Agent-created graphic                                                           | Planned                                                                   | As above                                                                                                             |
| G06         | Closing CTA and logo frame, S12                                                             | Agent layout + verified original logo                                           | Planned; no launch/access promise                                         | As above                                                                                                             |
| B01         | `../tryslides/public/logotipo.png` relative to workspace parent; product-repo original      | Owner brand; permission/use clearance before public delivery                    | Location documented; not copied or visually inspected for this production | `public/shared/` only after clearance                                                                                |
| F01         | Product repo `public/fonts/Geist/variable/Geist-Variable.woff2`, NOTICE.txt and LICENSE.txt | Documented SIL OFL; preserve actual notices                                     | Source path documented; files/notices not copied or revalidated           | `public/shared/fonts/` only when needed                                                                              |
| A01         | English narration `audio/S01-voice-v01.wav` through `S12-voice-v01.wav`                     | Provider unassigned; owner approval and rights required                         | Missing; script first, then dry read and recording                        | Cleared edited narration under per-video public audio path                                                           |
| A02         | Optional instrumental bed                                                                   | No track selected; license must cover YouTube/Reels and intended commercial use | Not required to start capture; no rights assumed                          | Pending exact track and license                                                                                      |
| A03         | Optional restrained reveal/click accents                                                    | Agent synthesis or licensed source; never imply app-native audio                | Planned; no asset exists                                                  | Pending                                                                                                              |
| C01         | English captions derived from edited A01                                                    | Agent transcription/alignment after audio edit                                  | Missing; no timestamps fabricated                                         | Editable caption data in per-video source                                                                            |

## Evidence register

- P01: shared product/claims references, reviewed 2026-10-17. Repository evidence only; public deployment not verified.
- P02: sibling product repo English getting-started, shapes/text, Steps, interactions, Present and export guides inspected 2026-10-17. Controls not specified exactly in docs remain live-verification gates.
- N01: [NASA: About the planets](https://science.nasa.gov/solar-system/planets/), opened 2026-10-17; planet order source for R03. [NASA: Earth facts](https://science.nasa.gov/earth/facts/), opened same date; Earth position source for S07. No NASA imagery or logos used; source checking is not media licensing or endorsement.
- No customer stories, audience-performance data, stock photos or external planet textures are required.

When assets arrive, record actual filename, date, owner, license/consent, dimensions/fps, inspection results and exact source-to-public derivative mapping. Never mark the range R01–R09 cleared without reviewing every supplied file.

## R02 — received original, limited review

- Exact path: `recordings/R02-create-presentation-take01.mov`; owner supplied 2026-10-18. No conversion or public copy created.
- Current-file recheck: 4,504,837 bytes; H.264; 3024 × 1898; container duration 25.150 seconds; no audio stream; average stream rate 2520/89 (~28.31 fps). Constant frame rate has not been established.
- Supersedes the earlier 3,811,361-byte / 29.408333-second description at this path; its decoded-frame count and 27-second sample no longer describe the current file. The previous binary was not archived by this update; no replacement history is assumed.
- Tail samples reviewed at 24.0/24.7s: English title `Our Solar System`, `Where is Earth?`, presentation theme picker with `Dark`, then black slide with white title and gray question. This demonstrates a presentation-theme change, not merely dark application chrome.
- Owner reports the preceding creation/title/question actions. This update does not claim full sequence playback or privacy clearance. Question remains selected at the tail; start R03 with a clean deselected five-second hold. Retain the Dark lesson theme (D008).
- Non-16:9 source requires intentional crop/fit without stretching. Original unchanged; no public copy, edit or export created.

## Planet imagery update · 2026-10-18 · D004

Owner selected separate transparent PNG images instead of native shape markers for the eight planets. P-MERCURY, P-VENUS, P-EARTH, P-MARS, P-JUPITER, P-SATURN, P-URANUS and P-NEPTUNE map to `images/<lowercase-planet>.png`. All are missing: images/ currently contains only .gitkeep. Owner supplies source URLs/creator/license; verify real alpha, edge quality, coherent style and resolution at intended size (especially enlarged Earth). No specific pixel dimensions are approved until inspected; do not upscale to invent detail. Preserve originals and provenance; public derivative mapping remains pending. No media has been generated, downloaded or cleared. The Sun remains a native shape unless separately agreed.

## Generated planet delivery · 2026-10-18 · D005

Eight assets P-MERCURY through P-NEPTUNE are now created by the agent using built-in image_gen at owner request. This supersedes their earlier missing/owner-supplied status; no third-party photograph search is needed for these generated illustrations. Originals are archived in `images/masters/<NN>-<name>-master.png`; import-size derivatives in `images/<name>.png`. Exact dimensions, suggested placement, source-based import sizing evidence and Earth source-replacement instructions: [images/README.md](images/README.md). Full prompts/tool provenance: `images/generation-manifest.json`.

All eight import files passed RGBA/alpha and dimension checks and native-size visual review. Derivatives created by proportional sips downscale; no upscaling. AI illustrations, not scientific photography or true-scale geometry. Owner visual acceptance, live import confirmation, final usage-size inspection and publication clearance remain pending; no public media copies created. The agent generation provenance replaces the request for owner source URLs for these eight assets only.


## D006 asset update · 2026-10-18

Owner requested uniform planet sizing and removal of reduced copies. Deleted only `images/<planet>.png` for all eight planets; preserved `images/masters/<NN>-<planet>-master.png` byte-for-byte and kept provenance. Active P-* assets now map directly to masters. Earlier derivative-size/ready-sized-import instructions are superseded. No small-source replacement step is needed for Earth. See images/README.md for uniform visual globe sizing, import cap evidence and Saturn aspect-ratio caveat. No automatic equal visible diameter or live import verification is claimed.

## P-SUN · 2026-10-18

Owner requested a Sun image to import with the planets. Created `images/masters/09-sun-master.png`, 1254 × 1254, RGBA with alpha spanning 0–254. Built-in image_gen output viewed; copied unchanged into this package. Full prompt: `images/sun-generation.json`. No reduced/public copy or render. Supersedes native-shape Sun recommendation. AI-generated illustration; not scientific photography or true scale. Owner approval and live import/layout inspection pending.

## Ordered master filenames · 2026-10-18 · D009

Nine masters now use `09-sun-master.png` through `01-neptune-master.png`; see images/README.md for exact mapping. All image SHA-256 hashes match their pre-rename originals. Paths/provenance updated; no public copies or image changes.

## Reverse filename ordering · 2026-10-18 · D010

Owner correction supersedes D009 ordering: masters now sort from `01-neptune-master.png` to `09-sun-master.png`. See images/README.md for full current mapping. SHA-256 checks confirm nine unchanged image contents.

## R03 — two consecutive source parts · 2026-10-18

Owner describes part 01 as importing, arranging and resizing planets; part 02 as adding labels. These are consecutive sections, not competing takes despite the filenames. Use both in S04 order 01 → 02; no rename or public copy created.

| Source | Duration | Bytes | Metadata | Review |
| --- | --- | --- | --- | --- |
| `recordings/R03-build-overview-take01.mov` | 70.366667 s | 35,303,300 | H.264, 3024 × 1898, average rate 972000/22711 (~42.80 fps), no audio stream | File/metadata checked only |
| `recordings/R03-build-overview-take02.mov` | 92.973333 s | 35,784,202 | H.264, 3024 × 1898, average rate 1624800/57277 (~28.37 fps), no audio stream | File/metadata checked only |

No constant frame rate, content completeness, matching continuity, image quality, clean holds or privacy clearance inferred. Check the Sun, planet order, labels, `Simplified diagram — sizes and distances not to scale` and `Click Earth to explore` during visual review. Preserve originals.
