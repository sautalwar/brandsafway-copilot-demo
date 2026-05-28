# GitHub Copilot Instructions

## Project Overview
This repository hosts the BrandSafway Safety Inspection Tracker API demo. It is used to demonstrate a GitHub Copilot coding agent workflow integrated with Azure DevOps work items, pull requests, and pipeline validation.

## Tech Stack
- Node.js 20
- Express for the API layer
- Jest for unit and integration testing
- Supertest for HTTP endpoint tests

## Coding Guidelines
- Prefer `const` by default and use `let` only when reassignment is required.
- Use `async`/`await` instead of raw promise chains.
- Add concise JSDoc comments for exported functions, route handlers, and shared utilities when intent is not obvious.
- Keep functions focused and favor small modules over large files.
- Follow existing naming and folder conventions before introducing new patterns.

## Testing Requirements
- All new code must include automated tests.
- Use Jest for test execution and Supertest for API coverage.
- Add or update tests for every behavior change, bug fix, or new endpoint.
- Run tests locally with `npm test` before finishing work.

## Repository Structure
- `.github/workflows/` contains GitHub Actions workflows, including CI and Copilot setup steps.
- `docs/` contains Azure DevOps and repository process documentation.
- `src/app.js` should define the Express app, `src/index.js` should start the server, and `src/data/` should hold demo data modules.
- `tests/` contains Jest and Supertest coverage such as `tests/inspections.test.js`.
- `.squad/` stores team-specific operating context and decision records for the demo.

## Delivery Expectations
- Run tests with `npm test` after making code changes.
- Check for existing `TODO` comments and treat them as potential enhancement opportunities when relevant to the task.
- Keep pull requests scoped, explain what changed, and reference the related issue number.
- When creating a PR, include the GitHub issue reference and the Azure DevOps work item reference when available.

## Azure DevOps Integration
- When working on an issue that references an ADO work item (identified by `AB#<number>` in the issue title or body), include the `AB#<number>` reference in:
  - Every commit message (e.g., `feat: Add input validation for POST endpoint AB#123`)
  - The PR title
  - The PR description body
- This ensures Azure Boards automatically links commits and PRs to the work item for full traceability.

## Branch Naming Convention
- Use the pattern: `copilot/<issue-number>-<short-kebab-description>`
- Examples:
  - `copilot/42-add-input-validation`
  - `copilot/57-stats-endpoint`
- Always branch from `main`.

## Pull Request Guidelines
- PR title format: `<type>: <description> AB#<work-item-id>` (if ADO link exists)
- PR description must include:
  - **Summary** of what changed and why
  - **Issue reference** using `Closes #<issue-number>` or `Fixes #<issue-number>`
  - **ADO reference** using `AB#<work-item-id>` if applicable
  - **Testing** section describing what tests were added or modified
- Request review from the repository maintainer.
- Ensure all CI checks pass before marking PR as ready for review.

## Security Considerations
- Never commit secrets, API keys, or credentials to the repository.
- Use environment variables for sensitive configuration.
- Be aware that GitHub Advanced Security (CodeQL, Dependabot, secret scanning) is enabled on this repository.
- Address any security findings flagged by CodeQL before opening a PR.
