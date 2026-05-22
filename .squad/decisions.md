# Decisions

## Rusty App Structure (2026-05-22)
- Chose a minimal Express structure with `src/index.js` for server startup, `src/app.js` for route wiring, and `src/data/inspections.js` for the in-memory store.
- Kept data persistence in-memory and left validation, pagination, logging, and centralized error handling as explicit TODO gaps to support the live Copilot enhancement demo.
- Added Jest + Supertest baseline coverage only for happy-path CRUD and health endpoints so future demo work has obvious next steps.

## Basher CI/CD Setup (2026-05-22)
- Added `.github/workflows/ci.yml` for PR and push validation on `main` using Node.js 20, `npm ci`, `npm test`, and optional linting.
- Added `.github/workflows/copilot-setup-steps.yml` with `workflow_dispatch` so GitHub Copilot coding agent has a deterministic environment bootstrap.
- Added `.github/copilot-instructions.md` to guide Copilot on project context, coding standards, testing expectations, structure, and PR issue linkage.
- Added `azure-pipelines.yml` with Build and Deploy stages so Azure DevOps can validate pull requests and model a staging deployment.
- Added `docs/ado-integration.md` and `docs/branch-protection.md` to document the end-to-end GitHub and Azure DevOps workflow.
- Planned for `AB#` work item references as the common traceability mechanism across commits, branches, PRs, and linked GitHub issues.
- Verified the current Node.js + Express + Jest demo app with `npm test` and `npm run lint --if-present` after adding the CI/CD and integration files.

## Linus Demo Guide (2026-05-22)
- Created a single-file offline HTML guide at `demo-guide.html` with all CSS and JavaScript embedded.
- Used a GitHub-dark-inspired visual system with industrial safety accents to fit the BrandSafway audience.
- Structured the guide around the required 10-step live demo, each with WHERE / DO / SAY / EXPECT / FALLBACK / estimated time.
- Added a CSS-based 10-step flow diagram, collapsible walkthrough sections, a dynamic progress indicator, responsive layout, and print support.
- Included Copilot capability coverage across VS Code, CLI, and coding agent surfaces, plus Q&A prep and a fallback summary card.
- Kept the file self-contained and suitable for offline use in Chrome, Edge, and Firefox.
