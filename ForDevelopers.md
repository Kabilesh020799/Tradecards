\*\*

## TradeCard Project rules for developers

We have two main development branches: development_BE_main and development_FE_main.

For both the branches, we are going to follow below common rules:

- There will be 3 branches where we will do our work:

  - **Main branch** - development_FE_main AND development_BE_main production branch
  - **Staging branch** - development_FE_staging AND development_BE_staging - testing branch
  - **Dev branch** - development_FE_dev AND development_BE_dev - development branch

- All the new development will take place on dev branch. You will always create a new branch for your development task from the dev branch.
- Branch naming convention: **IssueID_BranchPurpose**
- Always create a PR for your changes. Tag the reviewers in your PR. Post a message in teams channel to request a review for your PR, mention your PR link and issue link.
- Whoever reviews PR, mention comments if any in PR and send a message in teams thread for the same. If PR looks good, mention in teams thread and approve the PR.
- We will **merge changes** from **Dev branch** to **Staging branch every week**.
- We will **merge changes** from **Staging branch** to **main branch every 2 weeks**.
- Whenver pushing changes to main branch, update the changelog file with all the relevant changes and update the version number of the project.
