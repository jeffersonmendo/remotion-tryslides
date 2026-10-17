# Deliverables, cutdowns, and exports

## One production, a family of content

**Required production model:** every new production starts with one **12–20 minute long-form video**. From that same source video, create **four 40–60 second vertical cutdowns**, one YouTube thumbnail, one cover per short/reel, and one **1080 × 1080 social post**.

This is mandatory for every production, not an optional package selected only for tutorials. A new short, reel, commercial cutdown, or image must belong to an existing or planned long-form source production; it is not a substitute for that source video. Confirm the source and derivative mapping in the brief before editing. If a topic cannot sustain a useful 12–20 minute video and four worthwhile cutdowns, revise the topic or report the planning blocker rather than padding the runtime, inventing weak clips, or silently switching to a short-only production.

These are outputs of this video-production project, not video-export features of the TrySlides presentation product. They remain part of the same production package and share its slug, source material, and decisions.

## Required delivery matrix

Sizes below are project production defaults unless explicitly attributed to a platform. They are not a list of universal upload requirements. Start video exports at 30 fps; retain a deliberately chosen alternative when the brief calls for it.

| Deliverable       | Count | Working output                                                            | Content                                                                                  |
| ----------------- | ----- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Long-form video   | 1     | 1920 × 1080, 16:9, MP4 with H.264 video/AAC audio                         | Complete 12–20 minute story or walkthrough                                               |
| Shorts / Reels    | 4     | 1080 × 1920, 9:16, MP4 with H.264/AAC, 40–60 seconds each                 | Four distinct self-contained extracts of the long-form content                           |
| YouTube thumbnail | 1     | 3840 × 2160, 16:9, JPG or PNG                                             | Accurate, legible promise of the long-form video                                         |
| Vertical covers   | 4     | 2160 × 3840 master; 1080 × 1920 delivery when needed, 9:16, PNG preferred | One cover matching each cutdown; adapt output size if the chosen upload flow requires it |
| Social post       | 1     | 1080 × 1080, 1:1, JPG or PNG                                              | A readable standalone announcement, takeaway, or promotion                               |

That is **five videos and six images**, before optional platform-specific versions. A short may be reused on Shorts and Reels if its content, rights, captions, and framing fit both; it does not automatically require two separate edits. A platform-specific adaptation is an additional named variant, not an untracked duplicate.

## Quality-first export policy

**Owner requirement:** prioritize the highest useful fidelity over small files and fast renders. Do not silently lower final-export quality for convenience. Record any required platform-specific reduction and obtain approval when it changes an approved deliverable.

### Source, master, and delivery

- Preserve original recordings, source-resolution images, editable scenes, and original audio. Never treat a compressed social upload or downloaded platform copy as the new master.
- Choose the highest useful resolution supported by the actual composition, source footage, and destination. Prefer native 4K capture/composition where practical for landscape work and reframing. The matrix above is a delivery baseline, not a quality ceiling.
- Do not claim that enlarging a 1080p recording creates native 4K detail. Generated text and graphics can benefit from higher-resolution rendering, but source footage retains its own detail limits.
- Preserve the intended frame cadence. Do not convert 30 fps footage to 60 fps merely to label it higher quality; plan a higher frame rate at capture/authoring time when it benefits the content.
- Keep a high-fidelity master when specified in the approved inventory, and derive platform copies from original/editable sources rather than repeatedly encoding a delivery file. A preservation master may require a lossless image sequence plus uncompressed audio or a suitable editing codec, with substantially greater storage. Do not label ProRes or the default MP4 mathematically lossless.
- The 1080 × 1080 post remains exactly that requested size. Retain its editable layout or a larger source master separately; higher quality must not silently change an agreed output dimension.

### Configured CLI defaults

`remotion.config.ts` now requests PNG video frames and PNG stills, H.264 software encoding at CRF 1, the slow x264 preset, AAC bitrate 320 kb/s, and BT.709 output color space. These are quality-first defaults for the current MP4 delivery workflow, not a guarantee that a recording is sharp or an upload remains unchanged.

CRF 1 is at the high-quality end of Remotion's documented H.264 range. H.264/AAC delivery remains lossy; compatible pixel formats can also reduce chroma detail. PNG frame capture avoids an additional JPEG stage, not the final video compression. Expect larger files, slower encoding, and potentially significant temporary storage.

A different master codec needs its own compatible options: for example, ProRes does not use CRF, and hardware encoding cannot use this software CRF profile. Do not carry H.264-specific settings blindly into another profile. The configuration applies to CLI workflows; direct Node rendering APIs and explicit CLI/Studio overrides must receive or preserve the approved settings separately.

Follow the [Remotion quality guide](https://www.remotion.dev/docs/quality) and [encoding guide](https://www.remotion.dev/docs/encoding), checked 2026-10-17, together with the installed version's options. A preset is not a substitute for inspecting the exported result.

### Static images and publishing constraints

- Keep PNG as the editable/exported image master where appropriate, especially for text and graphic edges. The default cover master is 2160 × 3840; retain a 1080 × 1920 delivery copy when useful for the chosen route. The YouTube thumbnail master remains 3840 × 2160.
- Prefer PNG delivery when accepted within the target's limits. If a platform requires JPEG or a smaller file, make a separately named high-quality delivery copy, preserve the PNG master, and inspect text edges and gradients.
- Record actual file sizes and upload acceptance. Maximum-fidelity files may exceed a destination's limits, and publishing services may recompress them. Do not promise lossless social-media playback.
- Preview crops and readable UI at the final delivery size. More pixels and higher bitrates do not correct bad framing, clipped text, distorted color, or weak source audio.

Record source resolution/fps, master and delivery profiles, codec, CRF or bitrate, audio settings, image format, color space, any scaling, overrides, and inspection results in `deliverables.md`. Lighter previews must be clearly marked and never replace final-quality output silently.

## Plan derivatives before recording

Use `deliverables.md` in the resource package as the output inventory. Use `timeline.md` for the actual edit decisions; do not maintain a competing timeline in the inventory.

For each output record:

- Deliverable ID, purpose, target platform, format, dimensions, and duration where applicable.
- Composition or Still ID once implemented; planned IDs must be marked as planned.
- Source scene IDs and, for cutdowns, source version plus in/out timecodes.
- Hook, core takeaway, visible proof, closing/CTA, and cover concept.
- Any extra material, narration, reframe, caption, music, or licensing requirement.
- Status, owner approval, output path/version, export inspection, and publication-specific checks.

When the long-form edit changes, recheck derivative source ranges, captions, claims, and cover promises. Timecodes alone are not stable identifiers; keep the source scene IDs too.

## Make cutdowns useful on their own

Each cutdown should have a distinct focus: a result, a useful action, a concept, or a small before/after example. It must make sense to someone who has not watched the long video.

- Select candidate segments while planning; confirm them against the actual edited source.
- Remove dependence on phrases such as “as we saw earlier” or missing setup. Add a concise introduction if needed and record any new narration.
- Preserve the claim, required qualifications, and visible evidence. A shorter runtime is not permission to remove a condition that changes the meaning.
- Reframe desktop UI for vertical viewing rather than shrinking an entire editor into unreadability. Use the original recordings and editable scenes where available, not only a flattened master export.
- Keep captions readable and away from the platform controls. Preview current destination layouts rather than assuming one fixed safe zone covers every app surface.
- Adjust pacing, graphics, and sound deliberately. A cutdown is an edit, not necessarily a continuous sixty-second slice or a sped-up version of the full tutorial.
- Avoid repeated near-identical extracts just to fill a count. Record why each of the four is worth publishing.

If a selected segment needs clarification, record it in the package rather than silently making an unsupported promise. Recheck music licensing for each destination and paid use; a license or platform track usable in one context may not cover another.

## Thumbnails, covers, and the social post

Design these as editable layouts, not accidental screenshots of the first frame. Keep text short, contrast strong, and the composition readable at small size. Use the same visual family as the video without forcing identical framing across 16:9, 9:16, and 1:1.

The YouTube thumbnail represents the long-form promise. Each vertical cover represents that specific cutdown, not a generic repeated title. The square post should communicate something meaningful without requiring playback; record its intended caption/CTA in the package if needed.

Use Remotion `<Still>` registrations for static output when production begins. Reuse appropriate typography and visual components, while adjusting composition for each aspect ratio. Keep delivery stills distinguishable from supporting editor scene registrations.

An exported image is an asset, not proof the platform accepted it as a cover. Check the actual publishing account and upload surface. Some surfaces crop previews differently; do not assume the entire image is visible everywhere.

### Platform checks and sources

Checked **2026-10-17**:

- YouTube's current help recommends 3840 × 2160 for long-form thumbnails and 2160 × 3840 for Shorts thumbnails, using 16:9 and 9:16 respectively. It documents custom Shorts uploads on desktop Studio with account verification. Export a higher-resolution vertical cover from the same design if following that recommendation. See [YouTube thumbnail help](https://support.google.com/youtube/answer/72431).
- YouTube's July 2026 announcement describes an initial Partner Program rollout and expansion over time. Check the actual account rather than promising identical availability everywhere. See [YouTube's thumbnail update](https://blog.youtube/news-and-events/youtube-studio-custom-thumbnail-updates/).
- Instagram's official [Reel size and aspect-ratio help](https://www.facebook.com/help/instagram/1038071743007909) was login-blocked during review. The 1080 × 1920 cover above is our working design default, not a verified quotation of Meta's cover requirements. Verify the destination's current upload and crop behavior before publication; prepare an adapted export if necessary.

File-size limits, cover availability, crops, codecs, and publishing routes can change. Record the route checked and any actual limitation in `deliverables.md`. Do not reuse old platform restrictions without rechecking them.

## Composition and file organization

Follow [video organization](../video-organization.md). Keep related outputs together, for example:

```text
src/videos/<video-slug>/
  LongForm.tsx
  shorts/
    Short01.tsx
    Short02.tsx
    Short03.tsx
    Short04.tsx
  stills/
    YouTubeThumbnail.tsx
    ShortCover.tsx
    SocialPost.tsx
  scenes/
```

This is an implementation example, not files created by the package generator. Share scenes or layouts where useful; give independently editable output registrations their own authored JSX nodes and literal IDs in `Root.tsx`. A shared cover component can serve four explicit Still registrations with different content. Register the long video and each cutdown as separate delivery compositions, not as separate projects.

Use versioned, non-conflicting output paths:

```text
out/<video-slug>/v01/
  long-form.mp4
  short-01.mp4
  short-02.mp4
  short-03.mp4
  short-04.mp4
  youtube-thumbnail.png
  short-01-cover.png
  short-02-cover.png
  short-03-cover.png
  short-04-cover.png
  social-post-1080.png
```

The output folder is generated at export time, not during resource scaffolding. Record mappings to IDs in `deliverables.md`; do not infer completion just because a filename exists.

## Export and acceptance

Follow the installed render skill: `remotion render` exports video compositions; `remotion still` exports static registrations. Request or perform exports only when authorized. There is currently no automatic batch-export command in this project, and the empty root has no deliverables to render yet. Do not report this plan as an implemented publishing pipeline.

Before delivery:

- Verify the count, IDs, paths, actual dimensions, durations, quality profiles, source-to-output scaling, codecs/image formats, and platform file-size constraints against the approved inventory. Confirm no preview-quality override leaked into final delivery.
- Open and review every video, including its beginning, ending, critical action, captions, audio, and reframing; review the stills at expected viewing size.
- Verify each short independently and against the long-form claim it derives from.
- Confirm covers and the post match their content and retain readable essential information after destination crops.
- Record what was exported, inspected, approved, still blocked, or not yet published. Rendering is not uploading, scheduling, or publishing.
- Keep review and decisions connected to the whole delivery family so corrections propagate to affected outputs.
