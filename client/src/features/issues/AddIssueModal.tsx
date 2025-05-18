import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { Button } from '@/components/ui/button';
import { useIssues } from './useIssues';
import { type InsertIssue } from '@shared/schema';

const AddIssueModal = () => {
  const [open, setOpen] = useState(false);
  const { createIssue, isCreating } = useIssues();
  const [formState, setFormState] = useState<Partial<InsertIssue>>({
    priorityRank: 1,
    uniqueId: '',
    riskId: '',
    issueDate: '',
    raisedBy: '',
    ownedBy: '',
    issueEvent: '',
    issueEffect: '',
    resolution: '',
    category: '',
    impact: 0,
    status: 'Open',
    assignedTo: '',
    closedDate: '',
    comments: '',
    projectId: 1,
  });

  const handleChange = (field: string, value: any) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };
  const handleTextChange = (field: string) => (e: { value: string }) => handleChange(field, e.value);
  const handleNumberChange = (field: string) => (e: { value: number }) => handleChange(field, e.value);
  const handleDateChange = (field: string) => (e: { value: Date }) => handleChange(field, e.value ? e.value.toISOString().split('T')[0] : '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createIssue(formState as InsertIssue);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button onClick={() => setOpen(true)}>Add Issue</Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Issue</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <TextBoxComponent placeholder="Unique ID" value={formState.uniqueId} change={handleTextChange('uniqueId')} />
            <TextBoxComponent placeholder="Risk ID" value={formState.riskId ?? ''} change={handleTextChange('riskId')} />
            <DatePickerComponent placeholder="Issue Date" value={formState.issueDate ? new Date(formState.issueDate) : undefined} change={handleDateChange('issueDate')} />
            <TextBoxComponent placeholder="Raised By" value={formState.raisedBy} change={handleTextChange('raisedBy')} />
            <TextBoxComponent placeholder="Owned By" value={formState.ownedBy} change={handleTextChange('ownedBy')} />
            <TextBoxComponent placeholder="Issue Event" value={formState.issueEvent} change={handleTextChange('issueEvent')} />
            <TextBoxComponent placeholder="Issue Effect" value={formState.issueEffect} change={handleTextChange('issueEffect')} />
            <TextBoxComponent placeholder="Resolution" value={formState.resolution ?? ''} change={handleTextChange('resolution')} />
            <DropDownListComponent dataSource={['Category1', 'Category2']} placeholder="Category" value={formState.category} change={handleTextChange('category')} />
            <NumericTextBoxComponent placeholder="Impact" value={formState.impact} min={0} max={100} step={1} change={handleNumberChange('impact')} />
            <DropDownListComponent dataSource={['Open', 'Closed']} placeholder="Status" value={formState.status} change={handleTextChange('status')} />
            <TextBoxComponent placeholder="Assigned To" value={formState.assignedTo} change={handleTextChange('assignedTo')} />
            <DatePickerComponent placeholder="Closed Date" value={formState.closedDate ? new Date(formState.closedDate) : undefined} change={handleDateChange('closedDate')} />
            <TextBoxComponent placeholder="Comments" value={formState.comments ?? ''} change={handleTextChange('comments')} />
            <NumericTextBoxComponent placeholder="Project ID" value={formState.projectId} min={1} step={1} change={handleNumberChange('projectId')} />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isCreating}>{isCreating ? 'Creating...' : 'Create Issue'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddIssueModal;
