import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Sort, Filter, Toolbar } from '@syncfusion/ej2-react-grids';
import { useIssues } from './useIssues';
import { type Issue } from '@shared/schema';
import { Button } from '@/components/ui/button';

const SyncfusionIssueTable: React.FC = () => {
  const {
    issues,
    isLoading,
    updateIssue,
    deleteIssue,
    isUpdating,
    isDeleting,
  } = useIssues();
  const safeIssues = Array.isArray(issues) ? (issues as Issue[]) : [];

  // Action column template
  const ActionTemplate = (props: any) => (
    <div className="flex gap-2">
      <Button size="sm" onClick={() => updateIssue({ id: props.id, data: {} })} disabled={isUpdating}>Edit</Button>
      <Button size="sm" variant="destructive" onClick={() => deleteIssue(props.id)} disabled={isDeleting}>Delete</Button>
    </div>
  );

  return (
    <GridComponent
      dataSource={safeIssues}
      allowPaging={true}
      allowSorting={true}
      allowFiltering={true}
      toolbar={['Search']}
      loadingIndicator={{ indicatorType: 'Shimmer' }}
      height={500}
    >
      <ColumnsDirective>
        <ColumnDirective field="raisedBy" headerText="Raised By" width="120" />
        <ColumnDirective field="ownedBy" headerText="Owned By" width="120" />
        <ColumnDirective field="issueEvent" headerText="Issue Event" width="200" />
        <ColumnDirective field="issueEffect" headerText="Issue Effect" width="200" />
        <ColumnDirective field="resolution" headerText="Resolution" width="200" />
        <ColumnDirective field="category" headerText="Category" width="120" />
        <ColumnDirective field="impact" headerText="Impact" width="80" />
        <ColumnDirective field="status" headerText="Status" width="100" />
        <ColumnDirective field="assignedTo" headerText="Assigned To" width="120" />
        <ColumnDirective field="closedDate" headerText="Closed Date" width="120" />
        <ColumnDirective field="comments" headerText="Comment" width="120" />
        <ColumnDirective headerText="Actions" width="180" template={ActionTemplate} />
      </ColumnsDirective>
      <Inject services={[Page, Sort, Filter, Toolbar]} />
    </GridComponent>
  );
};

export default SyncfusionIssueTable;
