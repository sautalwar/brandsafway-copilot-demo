const express = require('express');
const {
  getInspections,
  getInspectionById,
  createInspection,
  updateInspection,
  deleteInspection
} = require('./data/inspections');

const app = express();

app.use(express.json());
// TODO: Add request logging middleware.

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/api/inspections', (req, res) => {
  // TODO: Add pagination and filtering support.
  res.status(200).json(getInspections());
});

app.get('/api/inspections/:id', (req, res) => {
  const inspection = getInspectionById(req.params.id);

  if (!inspection) {
    return res.status(404).json({ message: 'Inspection not found' });
  }

  return res.status(200).json(inspection);
});

app.post('/api/inspections', (req, res) => {
  // TODO: Add input validation for required fields.
  const inspection = createInspection(req.body);
  res.status(201).json(inspection);
});

app.put('/api/inspections/:id', (req, res) => {
  // TODO: Add input validation for required fields.
  const inspection = updateInspection(req.params.id, req.body);

  if (!inspection) {
    return res.status(404).json({ message: 'Inspection not found' });
  }

  return res.status(200).json(inspection);
});

app.delete('/api/inspections/:id', (req, res) => {
  const deleted = deleteInspection(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: 'Inspection not found' });
  }

  return res.status(204).send();
});

// TODO: Add GET /api/inspections/stats endpoint.
// It should return summary statistics including:
//   - total: total number of inspections
//   - byStatus: object with counts for each status (open, in-review, closed, scheduled)
//   - bySeverity: object with counts for each severity (low, medium, high)
//   - recentCount: number of inspections in the last 30 days

// TODO: Add centralized error handling middleware.

module.exports = app;
