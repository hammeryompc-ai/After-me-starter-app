<!-- Auto-generated guidance for AI coding agents working on this repository. -->
# Copilot / AI Agent Instructions

**Purpose:**
- Provide focused, actionable guidance so an AI coding agent is immediately productive in this repository.

**Quick Repository Snapshot**
- **Files discovered:** `README.md` (root) — repository currently contains only a README.
- **Git branches:** default branch `main` (current branch `main`).
- **Environment:** dev container runs `Ubuntu 24.04.3 LTS`, default shell `bash`.

**First Actions (mandatory)**
- Confirm repository contents (list files at repo root). Example: `ls -la`.
- Search for language manifests or CI configs: look for `package.json`, `pyproject.toml`, `requirements.txt`, `Pipfile`, `go.mod`, and `.github/workflows/`.
- If no source files are present (as here), ask the repo owner whether to scaffold a project or add specific starters.

**Agent Tooling & Workflow Conventions (project-specific)**
- Always use the todo-list tool to plan multi-step work and mark progress. One item must be `in-progress` at a time.
- Before making any file edits, include a one-line preamble describing what you'll do next (this repo enforces short preambles before tool calls).
- Use the repository's `main` branch as the base; create feature branches named `feature/<short-desc>` or `fix/<short-desc>` for changes.
- Use `apply_patch` to add or update files in the repo. Keep patches minimal and focused.

**Where to look for project-specific patterns**
- `README.md` — currently the only manifest of intent. Use it as the single source of truth until more files are added.
- `.github/` — check for workflows or existing agent docs before creating new CI or automation.

**Editing & Testing Guidance (conditional)**
- If you add Node.js code, include `package.json` and provide `npm test` / `npm run lint` scripts.
- If you add Python code, include `pyproject.toml` or `requirements.txt` and provide `pytest` for tests.
- Always include a brief `README` or README section describing how to run and test the new code.

**PR / Commit Guidance**
- Keep commits small and focused. Use clear commit messages: `type(scope): short summary` (e.g., `feat(api): add auth endpoint`).
- Open a PR against `main` and include a short description of the change, how to run any new code, and what reviewers should verify.

**Examples / Notes from this repo**
- Current root `README.md` content:
```
# After-me-starter-app
```
- Because there is no source tree yet, the highest-value next step is to ask whether to scaffold a language/runtime or to add specific features.

**When unsure**
- Ask one or two clarifying questions before making large automated changes (e.g., which language to scaffold, desired test framework).

If this file needs to preserve existing content, merge carefully and keep the repo-specific facts above up to date.

---
Please review — tell me which language/runtime or starter scaffold you want next, and I will prepare a small, runnable baseline.
