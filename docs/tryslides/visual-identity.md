# Visual identity

## Three different visual layers

**Verified product reference:** TrySlides does not use one identical palette everywhere. Distinguish the neutral application interface, the public page's illustrative colors, and the colors of the presentation being demonstrated. No standalone owner-approved video brand book was found during this review.

### Application interface

The interface supports light and dark appearance. The following are its neutral color values, rounded to practical sRGB HEX equivalents of the source colors:

| Role                    | Light appearance | Dark appearance |
| ----------------------- | ---------------- | --------------- |
| Main background         | `#FFFFFF`        | `#0A0A0A`       |
| Main text               | `#0A0A0A`        | `#FAFAFA`       |
| Primary control surface | `#171717`        | `#E5E5E5`       |
| Secondary surface       | `#F5F5F5`        | `#262626`       |
| Secondary text          | `#737373`        | `#A3A3A3`       |

For exact UI reproductions, use a real capture rather than rebuilding the interface from this table. Dark borders include transparency and should not be replaced with an arbitrary solid gray.

### Public-page illustration palette

These exact colors are declared for the public page's illustrative scenes. They are not a claim that every page or logo uses these colors.

| Name  | HEX       | Suggested video use              |
| ----- | --------- | -------------------------------- |
| Paper | `#F4F1E9` | Warm editorial background        |
| Ink   | `#242322` | Titles and strong contrast       |
| Blue  | `#4565EE` | Focus, annotations, and emphasis |
| Lilac | `#C4B5FD` | Secondary illustrative surface   |
| Coral | `#F5A492` | Occasional contrasting detail    |

**Production recommendation:** use Paper, Ink, and Blue as the starting palette for explanatory video graphics. Use Lilac and Coral sparingly. This is a production direction derived from existing artwork, not a newly declared official brand palette.

### Default presentation palette

The default Tryslides presentation theme uses `#0F172A`, `#334155`, `#E2E8F0`, `#F8FAFC`, and accent `#2563EB`. Its muted text color is `#64748B`.

These colors describe slide content, not the application's overall branding. Keep a template's own colors when demonstrating that template; do not recolor all examples to match the video graphics.

## Typography

**Verified product reference:** the application loads Geist Sans and Geist Mono. The default presentation theme uses **Geist**. Presentation fonts also include Geist Mono, Geist Pixel, Inter, Montserrat, Playfair Display, and Lora; these are creative choices inside slides, not seven interchangeable brand fonts.

**Production recommendation:**

- Use Geist for video titles, explanations, captions, and calls to action.
- Use weights 400–500 for body text and 600–700 for emphasis.
- Reserve Geist Mono for short prompts, file extensions, or precise values.
- Keep text in sentence case. Do not use decorative tracking or all-caps paragraphs.
- Start at 64–88 px for titles, 34–44 px for supporting copy, and 42–54 px for captions on a 1080-pixel-wide vertical video. Adjust after viewing at actual phone size; these are starting points, not product settings.
- Use at most two caption lines and avoid shrinking type to fit a long script. Rewrite instead.

The font files are not installed in this video project by this documentation. See [sources](sources-and-maintenance.md) for the original font and notice locations. Preserve font notices when copying files; check music, image, and other asset rights separately.

## Logo and name

The public-facing spelling is **TrySlides**. The current logo is a blue, overlapping-slide mark, available as `public/logotipo.png` in the product repository. The public header combines this image with the word TrySlides. The MCP-specific image is a separate asset, not a replacement for the main logo.

**Production recommendation:** use the original artwork without recoloring, stretching, tracing, or inventing a HEX palette from the raster gradient. Preserve its square image bounds and inspect contrast on the chosen background. Leave clear space of roughly one quarter of the displayed mark's width; this is a video convention, not a verified official logo rule.

## Composition and motion

**Production recommendation:**

- Let the real product be the visual evidence. Graphics should direct attention, not cover the feature.
- Use generous spacing, restrained rounded surfaces, and one visual focal point per beat.
- Use a subtle cursor highlight only when it clarifies a real action.
- Prefer brief fades, translations, and purposeful zooms over decorative bouncing and constant motion.
- Hold the result after an action so the audience can understand the change.
- Separate video transitions from TrySlides playback. Never imply an editorial zoom is a built-in product effect.
- Do not use flashing effects or rely on color alone to explain a change.
