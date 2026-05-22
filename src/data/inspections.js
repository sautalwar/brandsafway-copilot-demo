const seedInspections = [
  {
    id: '1',
    site: 'Houston Refinery Scaffold Zone A',
    inspector: 'Maya Thompson',
    date: '2025-05-01',
    status: 'open',
    findings: 'Missing mid-rail on north access platform and incomplete scaffold tag at entry point.',
    severity: 'high'
  },
  {
    id: '2',
    site: 'Baton Rouge Turnaround Unit 4',
    inspector: 'Carlos Ramirez',
    date: '2025-05-03',
    status: 'in-review',
    findings: 'Temporary stair tower inspected with minor toe-board damage on level three.',
    severity: 'medium'
  },
  {
    id: '3',
    site: 'Denver Commercial High-Rise',
    inspector: 'Jordan Lee',
    date: '2025-05-06',
    status: 'closed',
    findings: 'Fall protection anchor points verified and all harness logs current.',
    severity: 'low'
  },
  {
    id: '4',
    site: 'Corpus Christi Tank Farm Expansion',
    inspector: 'Avery Patel',
    date: '2025-05-08',
    status: 'open',
    findings: 'Mobile elevated work platform inspection found worn tire tread and overdue maintenance sticker.',
    severity: 'high'
  },
  {
    id: '5',
    site: 'Nashville Bridge Access Project',
    inspector: 'Sydney Brooks',
    date: '2025-05-10',
    status: 'scheduled',
    findings: 'Pre-task audit flagged incomplete rescue plan briefing for suspended access crew.',
    severity: 'medium'
  }
];

let inspections = seedInspections.map((inspection) => ({ ...inspection }));

function getInspections() {
  return inspections;
}

function getInspectionById(id) {
  return inspections.find((inspection) => inspection.id === id);
}

function createInspection(inspection) {
  const nextId = String(
    inspections.reduce((maxId, current) => Math.max(maxId, Number(current.id)), 0) + 1
  );

  const newInspection = {
    id: nextId,
    ...inspection
  };

  inspections.push(newInspection);
  return newInspection;
}

function updateInspection(id, updates) {
  const inspection = getInspectionById(id);

  if (!inspection) {
    return null;
  }

  Object.assign(inspection, updates, { id: inspection.id });
  return inspection;
}

function deleteInspection(id) {
  const index = inspections.findIndex((inspection) => inspection.id === id);

  if (index === -1) {
    return false;
  }

  inspections.splice(index, 1);
  return true;
}

function resetInspections() {
  inspections = seedInspections.map((inspection) => ({ ...inspection }));
}

module.exports = {
  getInspections,
  getInspectionById,
  createInspection,
  updateInspection,
  deleteInspection,
  resetInspections
};
