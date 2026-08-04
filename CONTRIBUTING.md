# Contributing to TradeCards

TradeCards uses a monorepo containing the React frontend and Spring Boot backend.
Apply these workflow rules to changes in either application.

## Branch workflow

- `main` is the production branch.
- `staging` is the testing branch.
- `dev` is the development branch.
- Create development branches from `dev`.
- Name branches using `IssueID_BranchPurpose`.

All changes should be submitted through a pull request. Link the related issue,
identify reviewers, and share the pull request in the team channel. Reviewers
should leave actionable comments on the pull request and communicate the outcome
in its team thread.

Changes are normally promoted from `dev` to `staging` weekly and from `staging`
to `main` every two weeks. When promoting to `main`, update the changelog and the
project version with the relevant release changes.

## Before requesting review

- Do not commit `.env` files, credentials, logs, IDE settings, or generated build
  output.
- Run `sh mvnw test` from `backend/tradecards` for backend changes.
- Run `npm test -- --watchAll=false` from `frontend/tradecards_ui` for frontend
  changes.
- Update documentation when setup, configuration, or behavior changes.
