# Rusty — History

## Project Context
**Project:** BrandSafway Developer Agent Demo — E2E workflow: ADO work item → GitHub issue → Copilot agent → branch → code + tests → PR → review → ADO pipeline → merge + deploy.
**Stack:** Node.js, HTML/CSS, GitHub Actions, Azure DevOps Pipelines
**User:** Saurabh

## Learnings
<!-- Append learnings below -->
- Built a Node.js/Express Safety Inspection Tracker API demo app in `package.json`, `src/index.js`, `src/app.js`, `src/data/inspections.js`, and `tests/inspections.test.js`.
- Seeded five realistic BrandSafway inspection records and implemented in-memory CRUD plus `/api/health`, intentionally leaving validation, pagination/filtering, request logging, API docs, and centralized error handling as TODOs for future Copilot demo enhancements.
- Added `.gitignore`, `README.md`, and a team decision note at `.squad/decisions/inbox/rusty-app-structure.md`; verified the baseline with passing Jest/Supertest tests and a successful live health check after starting the server.
