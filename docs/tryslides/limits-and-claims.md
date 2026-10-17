# Limits, plans, and truthful claims

Verified against the reviewed repository on **2026-10-17**, not against a running public deployment. Recheck prices, plans, quotas, catalog counts, and availability before publishing.

## Plan reference

| Item                                        | Free         | Pro         |
| ------------------------------------------- | ------------ | ----------- |
| Manual editor, Steps, and interactions      | Included     | Included    |
| Manual owner exports                        | Included     | Included    |
| Cloud storage                               | 100 MB       | 5 GB        |
| Daily MCP work units                        | 15,000       | 75,000      |
| Controlled hosted sharing                   | Not included | Included    |
| Shared-link transfer per subscription month | Not included | 20 GB       |
| Price                                       | Free         | USD 9/month |

There is one monthly paid plan and no annual launch plan. Creation and editing require Google sign-in on both plans. Avoid “no account needed” or “everything is free.” Selecting a template does not require Pro.

Cancellation preserves paid benefits until the end of the paid period, then returns the account to the free storage tier and pauses hosted sharing. It does not automatically delete existing work; writes increasing storage beyond the allowance can fail.

## Creative and delivery limits

- The slide canvas is fixed at **1920 × 1080 (16:9)**. There are no per-slide aspect ratios.
- Presentations allow up to **100 slides**. A slide supports **Base plus 24 Steps**.
- Full editing requires a desktop viewport. Mobile preview is not full mobile authoring.
- Supported imports are **`.tryslides` only**. Do not promise PPTX, PDF, HTML, TXT, or generic ZIP import.
- PPTX export, built-in AI, video/audio authoring, and comments are not current product capabilities in this reference.
- Same-account synchronization is not cross-account team collaboration or simultaneous shared-text editing.
- Cloud content may lag behind local edits. Wait for synchronization before claiming another device or a share link has the newest version.

## Export comparison

| Format       | Correct promise                                                      | Important limitation                                                 |
| ------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `.tryslides` | Portable editable copy with assets, themes, and Steps                | Not a hosted link; bounded package size/resources                    |
| HTML         | Standalone browser playback with animations, Steps, and interactions | Not reimportable into TrySlides                                      |
| PDF          | Static pages for Base and every Step, including unchanged Steps      | Rendered images; no selectable text, animation, or interactive links |
| TXT          | Text with slide/Step headings                                        | No images, appearance, OCR, or text extraction from outlined shapes  |

Owner downloads are different from viewer downloads. Shared links can permit editable-package and HTML delivery; PDF and TXT downloads through shared links are not available.

Image imports accept up to ten device files at once, with supported PNG, JPEG, WebP, GIF, AVIF, and SVG formats. Each image is limited to 100,000,000 bytes; SVG is limited to 2,000,000 bytes. Portable packages have stricter limits: 100 MiB total, up to 100 image/font resources combined, and 25 MiB per resource. A successful image upload does not guarantee it fits an editable export. Remote MCP PDF export also has a 100-page limit.

## Hosted sharing

Pro and a synchronized cloud presentation are required. Links can have expiration, recipient restrictions, visitor limits, and download permissions. They open the latest successfully synchronized version on open/reload, not a guaranteed live stream of every edit.

General viewing can be anonymous; email-restricted viewing requires the matching verified Google identity. All shared-link downloads require sign-in. Revocation stops future access through that link; it cannot erase a copy already downloaded.

## Say this, not that

| Avoid                                     | Accurate direction                                                                 |
| ----------------------------------------- | ---------------------------------------------------------------------------------- |
| “Create any presentation instantly”       | Show the actual workflow and outcome without an unmeasured time promise            |
| “TrySlides has AI built in”               | “Connect a compatible AI assistant through MCP”                                    |
| “Unlimited free AI”                       | “Free includes a daily MCP work allowance”                                         |
| “Import your PowerPoint”                  | “Import an editable `.tryslides` presentation”                                     |
| “Export your presentation as video”       | “Export interactive HTML or static PDF”; the promotional video is made in Remotion |
| “Every PDF stays interactive”             | “HTML preserves playback; PDF is static”                                           |
| “Edit together with your entire team”     | Explain verified same-account synchronization without promising team collaboration |
| “Revoke a link and every copy disappears” | Revocation controls future link access, not downloaded copies                      |
| “Trusted by thousands”                    | Omit invented numbers, testimonials, and customer logos                            |

Do not make unverified speed, accessibility-conformance, competitor-superiority, security-certification, or reliability guarantees. If a feature exists only on the roadmap, it must not appear as available now.
