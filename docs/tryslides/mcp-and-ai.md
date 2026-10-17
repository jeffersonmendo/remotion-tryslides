# MCP and AI

## Plain-language explanation

MCP is the connection that lets a compatible external AI assistant work with TrySlides after the owner authorizes it. The assistant can help create and edit presentations using supported actions. The result is TrySlides content that the person can continue editing manually.

TrySlides does **not** currently have a built-in AI assistant. MCP connects an external client; it is not an AI model, an included model subscription, or a promise of universal compatibility.

## What an assistant can help with

- Discover and preview available templates and create an editable presentation from one.
- Read, create, and edit authorized presentations, slides, text, elements, and Steps.
- Apply themes, animations, transitions, and interactions through supported capabilities.
- Upload or import supported images when the client can provide the required content.
- Export supported formats and manage sharing links when the granted permissions and plan allow it.
- With an active connected editor, inspect its view, select content, change tools or zoom, and use supported undo/redo and browser actions.

Always check the actual connected client's available capabilities before planning a demonstration. This is not a guarantee that every UI dialog or gesture is available to an assistant.

## Two ways to work

| Workflow         | What it means for a video                                                  | Important boundary                                                           |
| ---------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Remote           | The assistant works with synchronized presentations without an open editor | It does not automatically see local-only browser work                        |
| Connected editor | The assistant works with a live TrySlides editor session                   | The editor must be available; some browser actions require human interaction |

A connected download starts in the browser. A remote export returns a temporary private download link. Neither is automatically a public share link or proof that a download completed.

## Connection journey to explain, not implementation details

1. Choose a client that supports a custom remote MCP connection and the required authorization flow.
2. Add TrySlides using **https://tryslides.app/api/mcp**.
3. Sign in to TrySlides with Google and review the requested access.
4. Approve the presentations and actions the assistant needs.
5. Confirm the connection, inspect available capabilities and usage, then give a clear brief.
6. Manage or revoke access in Connections when needed.

Do not say “works in every AI chat.” Client support, plan availability, and organization policies must be checked in the actual client before recording. Do not show tokens, private URLs, account email addresses, or authorization secrets.

## Example requests for a demonstration

These are briefs to test, not guaranteed one-shot outcomes:

> Create a five-slide introduction to renewable energy for high-school students. Use short English text, an available template, and one progressive diagram. Estimate the work first, then check the result.

> Read this presentation and help me improve the visual hierarchy without changing its message. Show me what changed so I can continue editing it manually.

> Build a solar-system overview with clickable planets leading to detail Steps and a way back. Check each destination and preview the result.

Record the real request, relevant progress, and final editable result. If you shorten waiting time, make the cut evident; do not present an edited sequence as proof of instant generation or a guaranteed completion time.

## Limits that matter to the audience

Free includes **15,000 work units per UTC day**; Pro includes **75,000**. They measure work, not messages, model tokens, a fixed number of slides, or a fixed number of presentations. Units are shared across the account's clients and reset at 00:00 UTC without rollover.

Manual editing, manual owner exports, and owner synchronization do not consume these MCP units. A complex task may use more than several simple tasks. Technical rate limits and cloud storage are separate limits.

Permissions matter: read access is not permission to edit, export, share, or delete. MCP cannot change account billing, expose every editor dialog, perform arbitrary pointer gestures, or import a `.tryslides` package without a browser through the remote workflow. A file attached to a chat is not automatically accessible to TrySlides.
