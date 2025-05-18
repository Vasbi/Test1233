import { useState } from 'react';
import { useCriticalDates } from './useCriticalDates';
import { CriticalDateGanttView, SyncfusionCriticalDatesTable } from './index';
import { type CriticalDate } from '@shared/schema';
import { Button } from '@/components/ui/button';

const CriticalDatesEnhanced = () => {
  const { criticalDates, isLoading, createCriticalDate, updateCriticalDate, deleteCriticalDate } = useCriticalDates();
  const [editingDate, setEditingDate] = useState<CriticalDate | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [view, setView] = useState<'table' | 'gantt'>('table');

  // Placeholder handlers for add/edit/delete
  const handleEdit = (cd: CriticalDate) => setEditingDate(cd);
  const handleDelete = (cd: CriticalDate) => deleteCriticalDate(cd.id);
  const handleAdd = () => setShowAddModal(true);

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Critical Dates Enhanced</h1>
        <div className="flex gap-2">
          <Button variant={view === 'table' ? 'default' : 'outline'} onClick={() => setView('table')}>Table View</Button>
          <Button variant={view === 'gantt' ? 'default' : 'outline'} onClick={() => setView('gantt')}>Gantt View</Button>
          <Button onClick={handleAdd}>Add Critical Date</Button>
        </div>
      </div>
      {view === 'table' ? (
        // <CriticalDatesTable 
        //   criticalDates={Array.isArray(criticalDates) ? criticalDates : []} 
        //   isLoading={isLoading} 
        //   onEdit={handleEdit} 
        //   onDelete={handleDelete} 
        // />
        <SyncfusionCriticalDatesTable
          criticalDates={Array.isArray(criticalDates) ? criticalDates : []}
          isLoading={isLoading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ) : (
        <CriticalDateGanttView />
      )}
      {/* TODO: Add modals for add/edit critical date */}
    </div>
  );
};

export default CriticalDatesEnhanced;
