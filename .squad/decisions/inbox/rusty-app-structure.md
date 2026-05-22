# Rusty App Structure Decision

- Chose a minimal Express structure with `src/index.js` for server startup, `src/app.js` for route wiring, and `src/data/inspections.js` for the in-memory store.
- Kept data persistence in-memory and left validation, pagination, logging, and centralized error handling as explicit TODO gaps to support the live Copilot enhancement demo.
- Added Jest + Supertest baseline coverage only for happy-path CRUD and health endpoints so future demo work has obvious next steps.
