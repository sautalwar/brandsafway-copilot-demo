# Azure DevOps Integration Guide

This guide explains how to connect the BrandSafway GitHub demo repository to Azure DevOps at https://dev.azure.com/brandsafway1/ so work items, pull requests, and pipeline validation are visible in one flow.

## 1. Connect GitHub to Azure Boards
1. Sign in to Azure DevOps and open the target project in the `brandsafway1` organization.
2. Go to **Project settings** > **GitHub connections** or **Boards** > **GitHub connections**.
3. Choose **Connect GitHub organization**.
4. Authorize the Azure Boards GitHub App for the GitHub organization or repository that contains this repo.
5. Select the `sautalwar/brandsafway-copilot-demo` repository and save the connection.
6. Verify the connection by opening a work item and confirming the **Development** section is available.

## 2. Link Azure DevOps Work Items with `AB#` References
Azure Boards recognizes `AB#<work item id>` patterns in commits, branch names, pull requests, and issue text.

### Common examples
- Commit message: `Add CI workflow for demo AB#123`
- Branch name: `feature/ab123-copilot-setup`
- Pull request title: `Add ADO pipeline and Copilot setup AB#123`
- Pull request body: `Implements CI/CD demo flow for AB#123`

### What happens
1. A developer or Copilot agent includes `AB#123` in the commit, branch, PR title, or PR description.
2. Azure Boards automatically links that GitHub artifact to work item 123.
3. The work item's **Development** panel shows the related branch, commit, PR, and build status.

## 3. Create an Azure DevOps Pipeline for This GitHub Repo
1. In Azure DevOps, open **Pipelines** > **Create Pipeline**.
2. Select **GitHub** as the code location.
3. Authorize Azure Pipelines to access the GitHub repository if prompted.
4. Choose the `sautalwar/brandsafway-copilot-demo` repository.
5. Select **Existing Azure Pipelines YAML file**.
6. Point the pipeline to `/azure-pipelines.yml`.
7. Save and run the pipeline.
8. Confirm the Build stage runs on pull requests and on pushes to `main`.
9. Create the `staging` environment in Azure DevOps so the placeholder deploy stage can target it cleanly.

## 4. Configure ADO Branch Policies for PR Validation
1. In Azure DevOps, go to **Repos** > **Branches**.
2. Open the context menu for `main` and choose **Branch policies**.
3. Enable **Require a minimum number of reviewers**.
4. Add a **Build validation** policy and select the pipeline created from `azure-pipelines.yml`.
5. Set the policy to **Required** so PRs cannot complete until validation succeeds.
6. Optionally enable automatic reviewer inclusion for code owners or team leads.
7. If GitHub is the system of merge, mirror these expectations with GitHub branch protection rules as well.

## 5. Create a Work Item and Connect It to a GitHub Issue
Azure Boards and GitHub do not perform full two-way field synchronization for issues and work items. The recommended demo flow is to create both artifacts and link them with a shared reference.

1. Create a work item in Azure DevOps, such as **User Story 123**.
2. Create a GitHub issue for the same task.
3. Include `AB#123` in the GitHub issue title or body so Azure Boards can detect the relationship.
4. When creating the branch, commits, and PR for that issue, continue using `AB#123`.
5. Open the Azure DevOps work item and verify the GitHub issue, branch, commit, PR, and pipeline activity appear in **Development**.
6. Use the GitHub issue for repo-native discussion and the Azure DevOps work item for planning, reporting, and board tracking.

## Recommended Demo Flow
1. Create the Azure DevOps work item.
2. Create the GitHub issue referencing the work item.
3. Let GitHub Copilot coding agent work from the GitHub issue.
4. Open a PR with `AB#<id>` in the title or body.
5. Review GitHub Actions and Azure Pipelines results.
6. Merge after checks pass and confirm the work item shows end-to-end traceability.
