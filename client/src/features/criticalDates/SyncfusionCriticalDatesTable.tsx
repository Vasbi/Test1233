// Syncfusion DataGrid for Critical Dates (modular, feature-based)
import React from 'react';
import { CriticalDate } from '@shared/schema';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Sort, Filter, Toolbar, ColumnChooser } from '@syncfusion/ej2-react-grids';
import { useCriticalDates } from './useCriticalDates';
import { Button } from '@/components/ui/button';

const SyncfusionCriticalDatesTable = () => {
  const {
    criticalDates,
    isLoading,
    updateCriticalDate,
    deleteCriticalDate,
    isUpdating,
    isDeleting,
  } = useCriticalDates();

  // Action column template
  const ActionTemplate = (props: any) => (
    <div className="flex gap-2">
      <Button size="sm" onClick={() => updateCriticalDate({ id: props.id, data: {} })} disabled={isUpdating}>Edit</Button>
      <Button size="sm" variant="destructive" onClick={() => deleteCriticalDate(props.id)} disabled={isDeleting}>Delete</Button>
    </div>
  );

  if (isLoading) {
    return <div className="text-center py-4">Loading critical dates...</div>;
  }
  if (!criticalDates.length) {
    return <div className="text-center py-4">No critical dates found</div>;
  }

  return (
    <GridComponent
      dataSource={criticalDates}
      allowPaging={true}
      allowSorting={true}
      allowFiltering={true}
      toolbar={['Search', 'ColumnChooser']}
      showColumnChooser={true}
      pageSettings={{ pageSize: 10 }}
      height={400}
    >
      <ColumnsDirective>
        <ColumnDirective field="title" headerText="Title" width="200" />
        <ColumnDirective field="status" headerText="Status" width="100" />
        <ColumnDirective field="entity" headerText="Entity" width="120" />
        <ColumnDirective field="department" headerText="Department" width="120" />
        <ColumnDirective field="state" headerText="State" width="80" />
        <ColumnDirective field="contractValue" headerText="Contract Value" width="120" />
        <ColumnDirective field="criticalIssue" headerText="Critical Issue" width="150" />
        <ColumnDirective field="dueDate" headerText="Due Date" width="120" />
        <ColumnDirective headerText="Actions" width="180" template={ActionTemplate} />
      </ColumnsDirective>
      <Inject services={[Page, Sort, Filter, Toolbar, ColumnChooser]} />
    </GridComponent>
  );
};

export default SyncfusionCriticalDatesTable;
