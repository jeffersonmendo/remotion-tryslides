# Reusable video brief

Use this reference when filling `resources/<video-slug>/brief.md` after scaffolding the package. It supports planning, writing, design, animation, editing, review, and later revisions. Unfilled fields are decisions still needed, not facts to invent.

The complete template below is useful for understanding the plan, but do not maintain duplicate sources of truth: keep the current narration in `script.md`, the detailed storyboard/timing in `timeline.md`, inventory in `assets.md`, capture instructions in `recording-checklist.md`, comments and accepted decisions in `feedback/`, and results in `review.md`. The brief links to those files. Follow [the video workflow](video-workflow.md) for readiness and learning.

## Intent

- Video type: commercial, feature announcement, demonstration, explainer, tutorial, social clip, or another stated format.
- Working title:
- Audience:
- Viewer need:
- One main message:
- Desired viewer action:
- Language:
- Intended channel and viewing context:
- Target duration, aspect ratio, resolution, and frame rate:
- Approved delivery family and any departure from the long-form default:
- Link to `deliverables.md`: one long video, four cutdowns, thumbnail/covers, and square post where applicable; see [deliverables and exports](deliverables-and-exports.md):

## Product grounding

- Feature or workflow:
- Relevant reference pages:
- Actual product environment and version/date checked:
- Required account plan, permissions, sync status, or connection:
- Demonstration presentation/template:
- Claims to prove on screen:
- Limits the viewer needs to know:
- Unresolved facts that block publication:

## Visual and audio direction

- Palette and appearance; distinguish UI, slide theme, and video graphics:
- Typography and hierarchy:
- Logo placement and CTA treatment:
- Real footage, illustrative scenes, and required media:
- Framing/crop approach for product UI:
- Motion and transition character:
- Voice-led, music-led, or mixed structure:
- Voiceover style and edit plan for errors, repetition, accidental gaps, and deliberate pauses:
- Music role, changes, and level relative to speech:
- Selected effects and the actions/reveals/transitions they support:
- Captions and asset rights:
- Scene vocabulary and framing changes; see [audiovisual direction](audiovisual-direction.md):

## Script and storyboard

| Beat / time                           | Message / takeaway | Scene type and visual action | Voiceover or music cue | On-screen text | Entry / exit and effects | Material / evidence ID |
| ------------------------------------- | ------------------ | ---------------------------- | ---------------------- | -------------- | ------------------------ | ---------------------- |
| Opening                               |                    |                              |                        |                |                          |                        |
| Main sequence (repeat rows as needed) |                    |                              |                        |                |                          |                        |
| Result / payoff                       |                    |                              |                        |                |                          |                        |
| Close                                 |                    |                              |                        |                |                          |                        |

Identify the word, phrase, action, or musical cue that anchors each important reveal. Do not change scenes for every word by default. Record deliberate holds and pauses rather than treating all silence as unwanted.

## Materials and capture plan

| ID  | Beat / use | Material and source | Required or optional | Supplied / captured / created by | Specification and rights | Status |
| --- | ---------- | ------------------- | -------------------- | -------------------------------- | ------------------------ | ------ |
|     |            |                     |                      |                                  |                          |        |

Include footage, images, references, diagrams, fonts, music, effects, and voice as needed. For each requested recording, specify the starting state, exact actions, expected result, framing, language, hold time, filename/location, and privacy precautions. Note baked-in zooms/effects and whether original footage or the recording project is available.

## Editing and review record

- Video slug and source entry (`src/videos/<video-slug>/`):
- Delivery composition IDs and variants; supporting editor registrations if needed:
- Render media paths (`public/videos/<video-slug>/`) and source mapping in `assets.md`:
- Distinct output paths for each video/variant:
- Follow [video organization](../video-organization.md) for implementation and registration:
- Script/caption version:
- Latest preview/export:
- Per-output delivery checks and status in `deliverables.md`:
- Source resolution/fps, master vs. delivery quality, codec/CRF or bitrate, audio/color/image settings, scaling, and any approved overrides:
- Cutdown source scene IDs, source version, and timecodes; derivative updates after source changes:
- Factual review findings:
- Visual, pacing, audio, and caption findings:
- Narration/reveal synchronization, scene continuity, and music/effects review:
- Intentional pauses and any remaining accidental gaps:
- Requested revisions and their scope:
- Final approval / date:
- Recheck triggers for future reuse, such as price or interface changes:
