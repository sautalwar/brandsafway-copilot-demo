# Safety Inspection Tracker API

A simple Node.js and Express API for tracking BrandSafway safety inspections across scaffolding, equipment, and fall protection job sites. This repository is intentionally incomplete in a few areas so it can be enhanced during a GitHub Copilot and Azure DevOps demo.

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install
```bash
npm install
```

### Run the API
```bash
npm start
```

For local development:
```bash
npm run dev
```

### Run tests
```bash
npm test
```

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/health` | Health check |
| GET | `/api/inspections` | Return all inspections |
| GET | `/api/inspections/:id` | Return one inspection by id |
| POST | `/api/inspections` | Create a new inspection |
| PUT | `/api/inspections/:id` | Update an existing inspection |
| DELETE | `/api/inspections/:id` | Delete an inspection |

## Project Notes

- Data is stored in-memory in `src/data/inspections.js`.
- The API currently has intentional gaps such as missing validation, pagination, logging, and centralized error handling.
- This demo app is designed for GitHub Copilot + Azure DevOps integration scenarios.
