# Branch Protection Recommendations

Use these settings on the `main` branch to support the BrandSafway Copilot + Azure DevOps demo workflow.

## Recommended GitHub Branch Protection Settings
- Require a pull request before merging.
- Require at least one pull request review before merging.
- Dismiss stale approvals when new commits are pushed.
- Require conversation resolution before merging.
- Require status checks to pass before merging.
- Add the GitHub Actions `CI` workflow as a required check.
- Add the Azure DevOps PR validation pipeline as a required check once it is connected.
- Restrict direct pushes to `main`.

## Recommended Pull Request Rules
- Require PR titles or descriptions to include the related work item reference, such as `AB#123`.
- Require linked GitHub issues when the change is tied to tracked product work.
- Encourage small, reviewable PRs so Copilot-generated changes are easier to validate.

## Copilot Agent Access Recommendations
- Allow GitHub Copilot coding agent to create branches from issues.
- Allow the agent to open draft or ready-for-review pull requests.
- Keep merge rights limited to maintainers or approved automation only.
- Do not bypass required reviews or required status checks for agent-created PRs.

## Recommended Azure DevOps Alignment
- Make the Azure DevOps build validation policy required for `main`.
- Use the same `main` branch target in both GitHub and Azure DevOps.
- Ensure the staging deployment environment is protected and visible to reviewers.
- Review failed validation results in both systems so traceability remains intact for the demo.

## GitHub Advanced Security Status Checks
- Add `CodeQL` as a required status check for PRs to `main`.
- Dependabot security alerts should block merges for high/critical severity.
- Secret scanning push protection is enabled — pushes containing detected secrets will be blocked.
- The CodeQL Analysis workflow (`.github/workflows/codeql.yml`) runs on every PR to `main` and on every push to `main`.
- Consider making the CodeQL check required once the initial scan baseline is clean.

## ADO Pipeline Security Stage
- The `azure-pipelines.yml` now includes a Security Scan stage that runs `npm audit --audit-level=high`.
- This stage runs between Build and Deploy.
- While currently advisory (uses `|| true`), it can be made blocking by removing the `|| true` fallback.
- The Deploy stage depends on both Build and Security stages passing.

## Complete Required Status Checks List
| Check | Source | Required? | Notes |
|-------|--------|-----------|-------|
| CI | GitHub Actions (`ci.yml`) | Yes | Build + test + lint |
| CodeQL Analysis | GitHub Actions (`codeql.yml`) | Recommended | Security scanning |
| Build & Test | Azure DevOps Pipeline | Yes | ADO PR validation |
| Security Scan | Azure DevOps Pipeline | Advisory | npm audit |
