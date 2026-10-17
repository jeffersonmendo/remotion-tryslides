# TrySlides: product reference

## What it is

TrySlides is a browser-based presentation editor for creating, designing, animating, presenting, exporting, and sharing visually expressive presentations. People edit text, images, shapes, and drawings directly on a slide.

Its guiding idea is direct editing: if an item is visible, the person should be able to select and edit it. Do not describe it as a video editor, a PowerPoint converter, or an automatic AI slideshow generator.

## Who a video can address

Possible audiences include teachers explaining a topic, founders presenting an idea, designers showing a portfolio, students presenting research, and people preparing business presentations. These are suggested use cases, not verified customer segments or evidence of adoption.

## Capabilities, benefits, and proof

| Capability                | What a person can do                                                                                    | Benefit to communicate                                  | What to show                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------- |
| Presentations and slides  | Create, rename, organize, duplicate, and delete slides and presentations                                | Build and refine a story                                | Reorder a small deck and present it                                 |
| Editable templates        | Start from a complete editable design                                                                   | Begin with a visual direction instead of a blank page   | Preview a template, create a copy, replace its title                |
| Direct text editing       | Change wording, fonts, sizes, colors, alignment, and emphasis                                           | Refine the message and hierarchy                        | Edit an actual heading on the canvas                                |
| Images                    | Upload files or import a direct public image URL; crop visually through fit/masks and adjust appearance | Use relevant visual material                            | Insert an image, change its fit, adjust brightness                  |
| Shapes and drawing        | Add shapes, lines, arrows, and freehand pencil marks                                                    | Explain relationships and annotate ideas                | Build a simple two-part diagram                                     |
| Groups and arrangement    | Move related items together and manage their placement                                                  | Keep a composition organized                            | Move a group and adjust its stacking                                |
| Themes                    | Coordinate presentation colors, typography, shape defaults, and motion                                  | Maintain a consistent visual system                     | Change a theme and show linked elements updating                    |
| Customization             | Customize the current presentation's theme                                                              | Adapt a design to the presentation                      | Preview changes, apply, and undo                                    |
| Steps                     | Give one slide successive visual states                                                                 | Reveal or focus information without duplicating slides  | Start with an overview, then enlarge one item in a Step             |
| Animations                | Add entrance, exit, and ongoing element effects                                                         | Guide attention during playback                         | Show a real Fade In or text Typewriter effect                       |
| Slide transitions         | Choose None, Fade, Slide, or Scale                                                                      | Connect slides during presentation playback             | Play a transition between two slides                                |
| Interactions              | Make elements respond to Click, Hover, or Mouse leave by navigating                                     | Let viewers explore a presentation                      | Click an item to jump to a detail Step and return                   |
| QR codes                  | Add an editable HTTPS destination and adjust its appearance                                             | Connect a presentation to an external resource          | Change the destination and scan the final code                      |
| Shape combinations        | Join, cut, overlap, exclude, or divide compatible shapes                                                | Build more expressive visual forms                      | Combine circles, then edit the source shapes                        |
| Image masks               | Show an image through a shape while keeping its sources editable                                        | Create shaped image compositions                        | Mask a photo and adjust the image inside it                         |
| Text to vector            | Convert text into shapes                                                                                | Use letterforms in visual compositions                  | Convert a short word, then undo to restore editable text            |
| Presentation mode         | Play slides, Steps, and interactions, including fullscreen                                              | Deliver and test the final experience                   | Run the same presentation outside editing mode                      |
| Local save and cloud sync | Keep work locally and synchronize selected work to the account                                          | Continue with synchronized content on another device    | Wait for synchronized status before showing the second device       |
| Owner exports             | Download editable `.tryslides`, HTML, PDF, or TXT                                                       | Choose a format for the intended audience               | Open the actual exported result                                     |
| Controlled hosted sharing | Create Pro links with audience and access rules                                                         | Share a synchronized presentation with control          | Configure a link and test it as the intended viewer                 |
| MCP                       | Authorize a compatible external assistant to work with TrySlides                                        | Use an assistant alongside a fully usable manual editor | Show consent, an actual request, and the resulting editable content |

## Three concepts that must not be mixed

**A Step** is another visual state of the same slide. Existing items can move, resize, rotate, change appearance, or disappear; new items can appear. A slide starts at Base and supports up to 24 Steps. Keep the same object when demonstrating continuity rather than replacing it with an unrelated copy.

**An element animation** is an effect such as Fade In, Slide In, Scale In, Typewriter for text, Fade Out, Slide Out, Scale Out, Float, Pulse, or Rotate. Availability depends on the element. Entrance and exit effects do not run between Steps.

**A slide transition** connects different slides. It is not a Step transformation or the video's own editing transition.

## Example: interactive solar system

1. Build an overview of the solar system in Base.
2. Add a Step focused on Earth, keeping the same Earth object for the movement.
3. Add explanatory text in that detail state.
4. Configure Earth's Click interaction in the overview to navigate to that Step.
5. Add a Back interaction in the detail state to return to Base.
6. Test in presentation mode and, if relevant, exported HTML.

This is an example to construct and verify, not a built-in solar-system template. Interactions must be configured in each state where needed; they do not inherit automatically.

## Everyday workflow

Sign in with Google → create a blank presentation or use a template → personalize content → add motion or interaction if useful → preview → check save/sync status → present, export, or share using an appropriate format.

Editing requires a desktop viewport. Mobile editor routes provide a read-only preview, navigation, and owner downloads rather than full authoring. Offline use concerns work already available locally; do not promise that first-time sign-in, cloud actions, or AI connections work offline.
