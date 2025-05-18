// Table component for Critical Dates (feature-based, modular)
import React from 'react';
import { CriticalDate } from '@shared/schema';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface CriticalDatesTableProps {
  criticalDates: CriticalDate[];
  isLoading: boolean;
  onEdit: (criticalDate: CriticalDate) => void;
  onDelete: (criticalDate: CriticalDate) => void;
}

const CriticalDatesTable: React.FC<CriticalDatesTableProps> = ({ criticalDates, isLoading, onEdit, onDelete }) => {
  if (isLoading) {
    return <div className="text-center py-4">Loading critical dates...</div>;
  }
  if (!criticalDates.length) {
    return <div className="text-center py-4">No critical dates found</div>;
  }
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Reminder Type</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {criticalDates.map(cd => (
            <TableRow key={cd.id}>
              <TableCell>{cd.title}</TableCell>
              <TableCell><Badge>{cd.status}</Badge></TableCell>
              <TableCell>{cd.dueDate}</TableCell>
              <TableCell>{cd.reminderType}</TableCell>
              <TableCell>
                <button onClick={() => onEdit(cd)} className="mr-2 text-blue-600">Edit</button>
                <button onClick={() => onDelete(cd)} className="text-red-600">Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CriticalDatesTable;
