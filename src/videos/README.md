# Video implementations

Create one directory per approved production, using the same slug as `resources/<video-slug>/` and `public/videos/<video-slug>/`.

Keep the video's main component and its `scenes/` here. Register its delivery compositions explicitly in `src/Root.tsx`, with supporting editor registrations when required by the installed Remotion skills. Keep video-specific components local; do not depend on another video's internals.

Follow [video organization](../../docs/video-organization.md) and [the production workflow](../../docs/tryslides/video-workflow.md). There are no placeholder productions: create implementation files when approved production begins, not when scaffolding a resource package.
