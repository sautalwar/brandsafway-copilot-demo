const request = require('supertest');
const app = require('../src/app');
const { getInspections, resetInspections } = require('../src/data/inspections');

describe('Safety Inspection Tracker API', () => {
  beforeEach(() => {
    resetInspections();
  });

  test('GET /api/inspections returns all inspections', async () => {
    const response = await request(app).get('/api/inspections');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(5);
    expect(response.body).toEqual(getInspections());
  });

  test('GET /api/inspections/:id returns a single inspection', async () => {
    const response = await request(app).get('/api/inspections/1');

    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject({
      id: '1',
      site: 'Houston Refinery Scaffold Zone A'
    });
  });

  test('POST /api/inspections creates a new inspection', async () => {
    const newInspection = {
      site: 'Chicago Industrial Coatings Yard',
      inspector: 'Taylor Morgan',
      date: '2025-05-12',
      status: 'open',
      findings: 'Forklift inspection found damaged warning light cover near paint storage lane.',
      severity: 'medium'
    };

    const response = await request(app)
      .post('/api/inspections')
      .send(newInspection);

    expect(response.statusCode).toBe(201);
    expect(response.body).toMatchObject(newInspection);
    expect(response.body.id).toBe('6');
    expect(getInspections()).toHaveLength(6);
  });

  test('PUT /api/inspections/:id updates an inspection', async () => {
    const response = await request(app)
      .put('/api/inspections/2')
      .send({ status: 'closed', severity: 'low' });

    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject({
      id: '2',
      status: 'closed',
      severity: 'low'
    });
  });

  test('DELETE /api/inspections/:id deletes an inspection', async () => {
    const response = await request(app).delete('/api/inspections/3');

    expect(response.statusCode).toBe(204);
    expect(getInspections()).toHaveLength(4);
    expect(getInspections().find((inspection) => inspection.id === '3')).toBeUndefined();
  });

  test('GET /api/health returns 200', async () => {
    const response = await request(app).get('/api/health');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });

  // TODO: Add test for invalid input on POST.
  // TODO: Add test for invalid input on PUT.
  // TODO: Add test coverage for 404 responses and edge cases.
});
