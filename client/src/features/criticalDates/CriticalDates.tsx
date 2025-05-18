import { useState } from 'react';
import { useCriticalDates } from './useCriticalDates';
import { CriticalDatesTable, SyncfusionCriticalDatesTable } from './index';
import { type CriticalDate } from '@shared/schema';
import { Button } from '@/components/ui/button';

const CriticalDates = () => {
  const { criticalDates, isLoading, createCriticalDate, updateCriticalDate, deleteCriticalDate } = useCriticalDates();
  const [editingDate, setEditingDate] = useState<CriticalDate | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // Placeholder handlers for add/edit/delete
  const handleEdit = (cd: CriticalDate) => setEditingDate(cd);
  const handleDelete = (cd: CriticalDate) => deleteCriticalDate(cd.id);
  const handleAdd = () => setShowAddModal(true);

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Critical Dates</h1>
        <Button onClick={handleAdd}>Add Critical Date</Button>
      </div>
      {/* <CriticalDatesTable 
        criticalDates={Array.isArray(criticalDates) ? criticalDates : []} 
        isLoading={isLoading} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      /> */}
      <SyncfusionCriticalDatesTable
        criticalDates={Array.isArray(criticalDates) ? criticalDates : []}
        isLoading={isLoading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {/* TODO: Add modals for add/edit critical date */}
    </div>
  );
};

export default CriticalDates;
