# Pull Request Template (Node.js Backend)

## Description

Please provide a summary of the changes in this pull request, along with the reasoning behind them. Mention any related tickets or issues.

- **JIRA/Task ID**: [Link to the ticket or ID]
- **Type of change**: [Feature, Bug Fix, Refactor, etc.]
- **Components impacted**: [Specify if changes affect API routes, middleware, services, etc.]

## Checklist

Ensure that your pull request meets the following criteria:

- [ ] My code follows the style guidelines of this project (ESLint/prettier, etc.).
- [ ] I have performed a self-review of my code.
- [ ] I have written unit tests for any new functionality or significant updates.
- [ ] All existing and new tests pass (`npm test` or `jest`).
- [ ] I have tested this on a local development environment.
- [ ] Documentation has been updated for API changes (if applicable).
- [ ] I have checked for security vulnerabilities (e.g., injections, XSS, etc.).
- [ ] I have added any necessary environment variables or configurations.

## Changes

### What Changed:
- Describe the specific functionality or components that were added, removed, or modified.

### Why It Was Needed:
- Explain why the changes are necessary, e.g., new feature, bug fix, performance improvement, etc.

## Breaking Changes (if any)

- [ ] Yes
- [ ] No

If **Yes**, describe the breaking changes introduced by this PR, including any changes to API contracts, services, or database schema. Mention the steps to migrate if needed.

## API Changes (if applicable)

List any changes to API routes, request/response structures, or status codes:

- **New/Modified Endpoints**:
  - `POST /api/v1/route-name` - Description of the endpoint.
  - `GET /api/v1/another-route` - Updated with new query parameters, etc.
  
- **Request**:
  ```json
  {
    "example": "request"
  }
