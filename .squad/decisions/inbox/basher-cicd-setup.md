# Basher CI/CD Setup Decisions

## Summary
Configured the repository with GitHub Actions CI, GitHub Copilot setup workflow instructions, Azure DevOps pipeline YAML, and supporting ADO/branch protection documentation for the BrandSafway demo flow.

## Decisions
- Added `.github/workflows/ci.yml` for PR and push validation on `main` using Node.js 20, `npm ci`, `npm test`, and optional linting.
- Added `.github/workflows/copilot-setup-steps.yml` with `workflow_dispatch` so GitHub Copilot coding agent has a deterministic environment bootstrap.
- Added `.github/copilot-instructions.md` to guide Copilot on project context, coding standards, testing expectations, structure, and PR issue linkage.
- Added `azure-pipelines.yml` with Build and Deploy stages so Azure DevOps can validate pull requests and model a staging deployment.
- Added `docs/ado-integration.md` and `docs/branch-protection.md` to document the end-to-end GitHub and Azure DevOps workflow.
- Planned for `AB#` work item references as the common traceability mechanism across commits, branches, PRs, and linked GitHub issues.

## Notes
- Verified the current Node.js + Express + Jest demo app with `npm test` and `npm run lint --if-present` after adding the CI/CD and integration files.
