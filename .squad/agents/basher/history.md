# Basher — History

## Project Context
**Project:** BrandSafway Developer Agent Demo — E2E workflow: ADO work item → GitHub issue → Copilot agent → branch → code + tests → PR → review → ADO pipeline → merge + deploy.
**Stack:** Node.js, HTML/CSS, GitHub Actions, Azure DevOps Pipelines
**User:** Saurabh

## Learnings
<!-- Append learnings below -->
- Configured GitHub Actions workflows at `.github/workflows/ci.yml` and `.github/workflows/copilot-setup-steps.yml` for Node.js 20 CI and Copilot environment setup.
- Added GitHub Copilot repository guidance at `.github/copilot-instructions.md` covering project context, coding standards, testing, structure, TODO review, and PR issue references.
- Added Azure DevOps pipeline and documentation at `azure-pipelines.yml`, `docs/ado-integration.md`, and `docs/branch-protection.md` for AB# linking, PR validation, and branch protection recommendations.
- Recorded implementation decisions at `.squad/decisions/inbox/basher-cicd-setup.md`.
