# Video production and editing reference

This chapter applies throughout the project, from the first idea to a revision of an existing video. The conventions below are **production recommendations**, not official product capabilities or fixed brand rules.

## Editorial direction across formats

Read [audiovisual direction](audiovisual-direction.md) before planning or editing scenes and sound. It defines the project-wide approach for commercials, announcements, explainers, demonstrations, tutorials, and social videos: the message determines the visual treatment, with voice, music, effects, and motion working together. Screen footage is used when it explains or proves the message, not as an idle background.

This chapter covers the production workflow and delivery review; the audiovisual chapter covers how the edit communicates.

## Package and readiness

Follow [the video workflow](video-workflow.md). Create or locate the video's `resources/<video-slug>/` package before writing its production plan. Keep the brief, script, timeline, material inventory, and recording checklist there. Confirm owner approval and required material readiness before the final edit; an empty scaffold is not readiness.

## Long-form first

Every production starts with one 12–20 minute source video and includes its four 40–60 second cutdowns, thumbnail, covers, and square post. Short-form and promotional techniques below apply to scenes or derivatives of that source video; they do not authorize short-only productions. See [deliverables and exports](deliverables-and-exports.md).

## Plan a clear outcome

Give each video one main audience, one main point, and one primary action. Use [the brief](video-brief.md) to record these choices. A general overview can connect several features, but a short feature video should demonstrate one coherent result rather than enumerate every toolbar button.

Start from the relevant product chapter and verify what will actually be available in the recording environment. Choose a template or sample presentation that makes the feature clear without requiring unexplained setup.

## Design the script and storyboard together

For every beat, record:

- What the audience should understand.
- The voiceover or intentional silence.
- The scene type and visual representation, including real product evidence when making a product claim.
- The music cue or selected sound effect, if it serves the beat.
- On-screen copy and captions.
- The entry/exit and connection to the next beat, including any audio continuing across the cut.

An editorial pattern is: **recognizable need → product action → visible result → next action**. It is a structure, not mandatory wording. Prefer concrete benefits such as “reveal the next part of the explanation” over vague claims such as “unlock limitless creativity.”

## Choose a video format deliberately

| Format    | Suggested starting frame | Suitable use                                           |
| --------- | ------------------------ | ------------------------------------------------------ |
| Landscape | 1920 × 1080              | Product walkthroughs and broad editor views            |
| Vertical  | 1080 × 1920              | Short focused demonstrations with deliberate reframing |
| Square    | 1080 × 1080              | Feed-oriented edits with compact compositions          |

Use 30 fps as a starting production convention unless the brief requires otherwise. These are video choices, not TrySlides slide formats or verified platform upload specifications. Check the target platform's current delivery requirements before export.

For vertical edits, do not merely shrink the entire desktop editor until nothing is readable. Alternate a brief orientation view with close views of the active control and result. Never crop away the destination or feedback needed to understand an action. Keep the slide's real aspect ratio.

## Capture and demonstrate accurately

- Use a clean demonstration account and content that can be published.
- Hide personal emails, private document titles, restricted links, tokens, and unrelated tabs.
- Capture the current interface and keep its language consistent with the brief.
- Show real UI for product claims. Illustrative recreations must be distinguishable from actual product footage.
- Show setup when it affects the promise: Pro entitlement, synchronization, MCP authorization, or a live editor session.
- Test interactions in presentation mode, not just in the editor.
- Test an export by opening it. A download menu is not proof of the output.
- Test QR codes after resizing and in the final video frame if viewers are expected to scan them.

## Pace the edit

For narrated videos, tighten the voice edit first: remove failed takes, unnecessary repetition, and accidental long gaps without clipping speech or eliminating useful natural pauses. Then align the footage, graphic scenes, and captions. If voice and actions were captured together, preserve their synchronization. For music-led videos, build timing around the intended musical structure rather than forcing a voiceover.

- Establish context, move to the action, then hold on the result.
- Remove dead time without fabricating instantaneous generation, synchronization, or exports.
- Use fewer, meaningful zooms. Keep cursor position and visual continuity understandable across cuts.
- Avoid transitions while the viewer needs to read or compare a result.
- Give captions and feature labels different jobs: captions convey speech; labels identify the feature or result.
- Keep the voiceover intelligible; music should support it rather than compete with it.
- Use licensed or owned music, voice, images, and footage. Do not invent a sonic identity or imply an unapproved voice is the official brand voice.

For a 30-second narrated scene within the source video, roughly 55–70 words is a starting writing budget, not a standalone-video specification, performance claim, or rigid rule. Read it aloud and adjust timing around the actual demonstration. Silence can be more useful than filling every second.

## Keep revisions manageable

Keep the editable composition, media, captions, and brief connected through the video package. Log significant feedback and accepted decisions in its `feedback/` directory; keep the current script and timeline synchronized with accepted changes. Record the approved script version and the product facts it relies on. Keep text, captions, and graphic overlays editable instead of baking them into footage unnecessarily.

When revising, identify whether the change concerns the message, a product fact, footage, visual style, pacing, captions, or delivery format. Change the smallest relevant part, then replay neighboring beats to check continuity. A new export should not silently change an approved product claim.

## Final review

- [ ] Every product statement agrees with the reference and the demonstrated version.
- [ ] Prices, plans, limits, and client compatibility were rechecked if mentioned.
- [ ] The correct logo and fonts are used, without confusing template style with brand identity.
- [ ] UI, slide content, titles, and captions remain readable at the audience's viewing size.
- [ ] Voiceover, captions, and visible actions agree; cuts do not create false causal steps.
- [ ] Each meaningful beat has a relevant visual treatment; scene changes, music, and effects serve the message.
- [ ] Accidental audio gaps and failed takes are removed without clipped speech or loss of intentional pauses.
- [ ] Editorial graphics, cursor devices, and added sounds are not mistaken for product features.
- [ ] The editorial checks in the audiovisual direction reference were applied.
- [ ] Animations and interactions were tested through the route shown, including return paths.
- [ ] No claim implies unavailable video export, PPTX support, built-in AI, or team collaboration.
- [ ] No private information or unlicensed assets appear.
- [ ] Intro, middle, final frame, transitions, and audio were checked in the exported file.
- [ ] The CTA is real and appropriate to launch status; any URL points to the intended public destination.

Document review findings in the video's `review.md` and approval/status in its `README.md`. Explain what worked, what changed, and whether useful exceptions suggest an improvement to shared guidance. Follow the workflow before promoting a local choice into a global rule. Rendering successfully is not the same as passing editorial or factual review.
