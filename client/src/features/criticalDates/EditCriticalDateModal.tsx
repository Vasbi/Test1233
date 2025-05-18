import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { Button } from '@/components/ui/button';
import { type CriticalDate, type InsertCriticalDate } from '@shared/schema';

interface EditCriticalDateModalProps {
  open: boolean;
  criticalDate: CriticalDate | null;
  onSave: (id: number, data: Partial<InsertCriticalDate>) => void;
  onClose: () => void;
  isUpdating: boolean;
}

const EditCriticalDateModal = ({ open, criticalDate, onSave, onClose, isUpdating }: EditCriticalDateModalProps) => {
  const [formState, setFormState] = useState<Partial<InsertCriticalDate>>({});

  useEffect(() => {
    if (criticalDate) {
      const cleaned = Object.fromEntries(
        Object.entries(criticalDate).map(([k, v]) => [k, v === null ? undefined : v])
      );
      let dueDate: Date | undefined = undefined;
      if (typeof cleaned.dueDate === 'string' || typeof cleaned.dueDate === 'number') {
        dueDate = new Date(cleaned.dueDate);
      } else if (cleaned.dueDate instanceof Date) {
        dueDate = cleaned.dueDate;
      }
      setFormState({
        ...cleaned,
        dueDate,
      });
    }
  }, [criticalDate]);

  const handleChange = (field: string, value: any) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };
  const handleTextChange = (field: string) => (e: { value: string }) => handleChange(field, e.value);
  const handleNumberChange = (field: string) => (e: { value: number }) => handleChange(field, e.value);
  const handleDateChange = (field: string) => (e: { value: Date }) => handleChange(field, e.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (criticalDate) onSave(criticalDate.id, formState);
  };

  if (!criticalDate) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Critical Date</DialogTitle>
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
            <Button type="submit" disabled={isUpdating}>{isUpdating ? 'Saving...' : 'Save Changes'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditCriticalDateModal;
