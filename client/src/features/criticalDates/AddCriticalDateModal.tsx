import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { Button } from '@/components/ui/button';
import { useCriticalDates } from './useCriticalDates';
import { type InsertCriticalDate } from '@shared/schema';

const AddCriticalDateModal = () => {
  const [open, setOpen] = useState(false);
  const { createCriticalDate, isCreating } = useCriticalDates();
  const [formState, setFormState] = useState<Partial<InsertCriticalDate>>({
    title: '',
    status: 'Open',
    entity: '',
    department: '',
    state: '',
    contractValue: 0,
    criticalIssue: '',
    dueDate: undefined, // Store as Date
  });

  const handleChange = (field: string, value: any) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };
  const handleTextChange = (field: string) => (e: { value: string }) => handleChange(field, e.value);
  const handleNumberChange = (field: string) => (e: { value: number }) => handleChange(field, e.value);
  const handleDateChange = (field: string) => (e: { value: Date }) => handleChange(field, e.value ? e.value.toISOString().split('T')[0] : '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createCriticalDate(formState as InsertCriticalDate);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button onClick={() => setOpen(true)}>Add Critical Date</Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Critical Date</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <TextBoxComponent placeholder="Title" value={formState.title ?? ''} change={handleTextChange('title')} />
            <DropDownListComponent dataSource={['Open', 'Closed']} placeholder="Status" value={formState.status} change={handleTextChange('status')} />
            <TextBoxComponent placeholder="Entity" value={formState.entity ?? ''} change={handleTextChange('entity')} />
            <TextBoxComponent placeholder="Department" value={formState.department ?? ''} change={handleTextChange('department')} />
            <TextBoxComponent placeholder="State" value={formState.state ?? ''} change={handleTextChange('state')} />
            <NumericTextBoxComponent placeholder="Contract Value" value={formState.contractValue ?? 0} min={0} step={1} change={handleNumberChange('contractValue')} />
            <TextBoxComponent placeholder="Critical Issue" value={formState.criticalIssue ?? ''} change={handleTextChange('criticalIssue')} />
            <DatePickerComponent placeholder="Due Date" value={formState.dueDate} change={handleDateChange('dueDate')} />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isCreating}>{isCreating ? 'Creating...' : 'Create Critical Date'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCriticalDateModal;
