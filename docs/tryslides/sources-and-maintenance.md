# Sources and maintenance

## Evidence baseline

Reviewed on **2026-10-17** from the local TrySlides product repository:

`/Users/jeffersonlopez/Documents/Workspaces/tryslides`

Repository HEAD at review: `41262d46f1e6d71f2600f74053f3a3d10f87b36e`.

This records the checkout's HEAD, not a guarantee that the working tree was clean or that production runs this commit. The reference was prepared from documentation and source inspection; it does not certify that every workflow was exercised in a running application.

## Where each kind of fact comes from

All paths below are relative to the product repository, not this Remotion project. They are an editorial verification map, not required technical reading for every contributor.

| Reference topic                                   | Evidence                                                                                                   |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Launch status and user presence                   | `docs/product/lifecycle.md`                                                                                |
| Product scope and current behavior                | `docs/product/product.md`, `content/docs/` user guides                                                     |
| Official name, domain, contact                    | `docs/product/README.md`, `src/features/landing/components/landing-brand.tsx`                              |
| Interface colors and bundled fonts                | `src/app/globals.css`, `src/app/[locale]/layout.tsx`                                                       |
| Illustrative page colors                          | `src/features/landing/components/landing.module.css`                                                       |
| Presentation theme colors and typography          | `src/features/presentations/core/capabilities/presentation-themes.ts`                                      |
| Template names, descriptions, and counts          | `src/features/presentations/application/templates/template-catalog.ts`                                     |
| Template, theme, and layout behavior              | `content/docs/design/templates-layouts.mdx`, `content/docs/design/themes.mdx`                              |
| Steps, animations, interactions, and playback     | `content/docs/motion/`, `src/features/presentations/core/steps.ts`                                         |
| Slide count                                       | `src/features/presentations/core/presentation-limits.ts`                                                   |
| Images, QR codes, drawing, masks, and vector text | `content/docs/design/`, `docs/product/product.md`                                                          |
| MCP capabilities, permissions, and budgets        | `docs/product/mcp.md`, `content/docs/ai/`                                                                  |
| Prices and access                                 | `docs/product/billing.md`, `content/docs/account/plans.mdx`, `src/features/billing/customer-operations.ts` |
| Saving and synchronization                        | `content/docs/files/save-sync.mdx`, `docs/product/persistence.md`                                          |
| Sharing                                           | `content/docs/files/sharing.mdx`, `docs/product/sharing.md`                                                |
| Export/import behavior and limits                 | `content/docs/files/export.mdx`, `content/docs/files/import.mdx`, `docs/product/product.md`                |

## Editorial direction provenance

The owner requested project-wide audiovisual direction: varied scenes representing the message, fluent edited narration where appropriate, animated typography and explanations outside the editor, and purposeful music, effects, and transitions. This applies beyond tutorials to commercials and other video types.

[Audiovisual direction](audiovisual-direction.md) records that creative direction and distinguishes it from suggested execution techniques. These preferences are not evidence of product capabilities, an official visual brand standard, or a guarantee of viewer engagement. No new production-product verification is implied by this editorial documentation update.

## Asset inventory

These are existing source assets. This documentation does not copy them into the Remotion project's `public/` directory or configure font loading.

| Asset           | Source location                                                                                  | Use                                  |
| --------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------ |
| Main logo       | `public/logotipo.png`                                                                            | Primary TrySlides mark               |
| MCP image       | `public/logotipo-mcp.png`                                                                        | MCP-specific context only            |
| Geist font      | `public/fonts/Geist/variable/Geist-Variable.woff2`                                               | Main video typography recommendation |
| Geist Mono font | `public/fonts/GeistMono/variable/GeistMono-Variable.woff2`                                       | Short monospace details              |
| Font notices    | `public/fonts/Geist/NOTICE.txt`, `public/fonts/Geist/LICENSE.txt`, corresponding GeistMono files | Preserve when redistributing fonts   |

The reviewed font catalog explicitly records redistribution under SIL Open Font License 1.1. This does not grant rights to unrelated media, template photographs, third-party logos, music, or voices. Verify those separately for publication.

## Public destinations

- Product website: **https://tryslides.app**
- English user guides: **https://tryslides.app/en/docs**
- Spanish user guides: **https://tryslides.app/es/docs**
- MCP connection URL: **https://tryslides.app/api/mcp**
- Owner-confirmed support address: **support@tryslides.app**

These destinations come from the repository. Public availability and the deployed version were not checked during this documentation task. Verify the intended destination before using it as a CTA. Public documentation references are not testimonials or proof of release status.

## Production-model decision

The owner clarified that every production must start with a 12–20 minute long-form source video, with four 40–60 second shorts/reels and the supporting images derived from that same video. Earlier wording treating long-form as optional or allowing standalone commercial/short-form productions has been superseded. This is a project workflow decision, not a product capability or platform restriction. See [deliverables and exports](deliverables-and-exports.md).

## Per-video learning

[The video workflow](video-workflow.md) defines `resources/<video-slug>/` as the per-video production and learning record. Feedback, accepted decisions, and final review have separate roles. Reusable lessons should propose precise, owner-approved improvements to the relevant shared chapter, supported by scenes and outcomes, without converting every local exception into a universal rule.

## Keep the reference useful

1. Update the relevant chapter when a product fact changes; avoid creating competing copies of the same fact in individual scripts.
2. Recheck fast-changing facts before publication: price, allowances, plan access, template counts, UI labels, client compatibility, and launch status.
3. If documentation and the visible application disagree, pause that claim and investigate. Do not silently choose the more marketable version.
4. Keep future ideas out of current-capability descriptions. A roadmap entry is not proof of availability.
5. Keep production recommendations visibly separate from verified product facts. Owner-approved visual decisions can replace recommendations when approval is recorded.
6. Update the review date and evidence baseline after a substantive factual review.

Do not copy this source map into public captions or voiceover. Its purpose is to make the entire video project maintainable and grounded in real product information.
