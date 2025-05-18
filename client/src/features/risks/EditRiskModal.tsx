import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { Button } from '@/components/ui/button';
import { type Risk, type InsertRisk } from '@shared/schema';

interface EditRiskModalProps {
  open: boolean;
  risk: Risk | null;
  onSave: (id: number, data: Partial<InsertRisk>) => void;
  onClose: () => void;
  isUpdating: boolean;
}

const EditRiskModal = ({ open, risk, onSave, onClose, isUpdating }: EditRiskModalProps) => {
  const [formState, setFormState] = useState<Partial<InsertRisk>>({});

  useEffect(() => {
    if (risk) {
      setFormState({ ...risk });
    }
  }, [risk]);

  const handleChange = (field: string, value: any) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };
  const handleTextChange = (field: string) => (e: { value: string }) => handleChange(field, e.value);
  const handleNumberChange = (field: string) => (e: { value: number }) => handleChange(field, e.value);
  const handleDateChange = (field: string) => (e: { value: Date }) => handleChange(field, e.value ? e.value.toISOString().split('T')[0] : '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (risk) onSave(risk.id, formState);
  };

  if (!risk) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Risk</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <TextBoxComponent placeholder="Risk ID" value={formState.riskId} change={handleTextChange('riskId')} />
            <DatePickerComponent placeholder="Open Date" value={formState.openDate ? new Date(formState.openDate as string) : undefined} change={handleDateChange('openDate')} />
            <TextBoxComponent placeholder="Raised By" value={formState.raisedBy} change={handleTextChange('raisedBy')} />
            <TextBoxComponent placeholder="Owned By" value={formState.ownedBy} change={handleTextChange('ownedBy')} />
            <TextBoxComponent placeholder="Risk Cause" value={formState.riskCause} change={handleTextChange('riskCause')} />
            <TextBoxComponent placeholder="Risk Event" value={formState.riskEvent} change={handleTextChange('riskEvent')} />
            <TextBoxComponent placeholder="Risk Effect" value={formState.riskEffect} change={handleTextChange('riskEffect')} />
            <DropDownListComponent dataSource={['Construction', 'Finance', 'Legal']} placeholder="Risk Category" value={formState.riskCategory} change={handleTextChange('riskCategory')} />
            <NumericTextBoxComponent placeholder="Probability" value={formState.probability} min={0} max={1} step={0.01} change={handleNumberChange('probability')} />
            <NumericTextBoxComponent placeholder="Impact" value={formState.impact} min={0} max={100} step={1} change={handleNumberChange('impact')} />
            <NumericTextBoxComponent placeholder="Risk Rating" value={formState.riskRating} min={0} max={100} step={1} change={handleNumberChange('riskRating')} />
            <DropDownListComponent dataSource={['Open', 'Closed', 'Eventuated']} placeholder="Risk Status" value={formState.riskStatus} change={handleTextChange('riskStatus')} />
            <DropDownListComponent dataSource={['Transfer', 'Mitigate', 'Accept', 'Avoid']} placeholder="Response Type" value={formState.responseType} change={handleTextChange('responseType')} />
            <TextBoxComponent placeholder="Mitigation" value={formState.mitigation} change={handleTextChange('mitigation')} />
            <TextBoxComponent placeholder="Prevention" value={formState.prevention} change={handleTextChange('prevention')} />
            <NumericTextBoxComponent placeholder="Project ID" value={formState.projectId} min={1} step={1} change={handleNumberChange('projectId')} />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isUpdating}>{isUpdating ? 'Saving...' : 'Save Changes'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditRiskModal;
