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
