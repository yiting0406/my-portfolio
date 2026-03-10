## Git Commit Messages

When generating Git commit messages, follow Conventional Commits strictly.

Format:
<type>(<scope>): <subject>

Rules:

- Always use English.
- Never output Chinese, Japanese, Korean, or other non-English characters.
- Use ASCII characters only.
- Allowed types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
- Use lower-case type and scope.
- Subject must be imperative mood and concise.
- Max length 72 characters.
- Do not end subject with a period.

Examples:

feat(reservation): add API integration
fix(auth): handle token expiration
refactor(store): simplify reservation state

Common scopes in this project:

ui
api
store
router
auth
component
layout
theme
