---
description: "Security boundaries for dinesykmeldte-sidemeny"
applyTo: "**"
---

# Repository security boundaries

This repository publishes a library and an example site. Authentication and deployment belong to the consuming applications; do not introduce a backend security model into the library.

- Never commit secrets or log tokens, headers, personal identifiers or complete
  request/response payloads.
- Validate external input at the existing system boundary. Keep token exchange
  and credentials out of browser code.
- Preserve explicit access policies and least privilege. Resolve material
  changes to authentication, exposed data or permissions before implementing.
- For SQL-bearing code or examples, use parameterized queries.
- Synthetic fixtures must remain synthetic; do not copy production data to
  tests, screenshots, prompts or documentation.
