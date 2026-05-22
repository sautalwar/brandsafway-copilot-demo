# Decisions Log

## Linus Two File Split
- Replaced the single `demo-guide.html` concept with two offline HTML artifacts: `demo-presenter-notes.html` for private presenter use and `demo-customer-facing.html` for the projected audience view.
- Kept the presenter notes in a light, quick-scan format with a fixed sidebar, exact Copilot prompts, CLI commands, coding-agent actions, fallback guidance, timing, and transitions for all 10 demo steps.
- Kept the customer-facing file visually minimal and dark-themed with BrandSafway colors, slide-like full-screen sections, a CSS-only 10-step flow diagram, and concise messaging for intro and wrap-up.
- Embedded all CSS in each file and avoided external assets so both files work offline in Chrome, Edge, and Firefox and remain print-friendly.
- Deleted the superseded `demo-guide.html` after the split so the repo reflects the new two-file presentation model.

## Danny Issue Staging Decisions
- Created four GitHub issues in `sautalwar/brandsafway-copilot-demo` as pre-staged demo work items.
- Aligned issue scope with the intentional TODO gaps in `src/app.js` and `tests/inspections.test.js`.
- Used Azure Boards references `AB#10001` through `AB#10004` in the issue bodies to support the live demo storyline.
- Confirmed the issues were created successfully and are open as issues #1 through #4.
