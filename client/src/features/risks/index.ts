// Feature folder for Risk Register
// Move all Risk-related components, hooks, and logic here for modularity

export { default as SyncfusionRiskTable } from './SyncfusionRiskTable';
export { default as RiskTable } from './RiskTable';
export { default as AddRiskModal } from './AddRiskModal';
export { default as EditRiskModal } from './EditRiskModal';
export { default as DeleteConfirmDialog } from './DeleteConfirmDialog';
export { default as DynamicRiskModal } from './DynamicRiskModal';
export { default as RiskDashboard } from './RiskDashboard';
export { default as RiskFilter } from './RiskFilter';
export * from './useRisks';
// Remove legacy export for useIssues (now in issues feature)
// export { default as useIssues } from './useIssues';
// Add more exports as you migrate components
