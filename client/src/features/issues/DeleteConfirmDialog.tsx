// TypeScript module declarations for Syncfusion React components without types
// @ts-ignore
import { DialogComponent } from '@syncfusion/ej2-react-popups';
// @ts-ignore
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import React from 'react';

interface DeleteConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
  isDeleting: boolean;
}

const DeleteConfirmDialog = ({
  open,
  onClose,
  onConfirm,
  title = "Are you sure?",
  description = "This action cannot be undone. This will permanently delete the issue from the database.",
  isDeleting = false,
}: DeleteConfirmDialogProps) => {
  return (
    <DialogComponent
      visible={open}
      width="400px"
      showCloseIcon={true}
      close={onClose}
      header={title}
      content={<div>{description}</div>}
      footerTemplate={() => (
        <div className="flex justify-end gap-2">
          <ButtonComponent onClick={onClose} disabled={isDeleting}>Cancel</ButtonComponent>
          <ButtonComponent cssClass="e-danger" onClick={onConfirm} disabled={isDeleting} isPrimary={true}>
            {isDeleting ? "Deleting..." : "Delete"}
          </ButtonComponent>
        </div>
      )}
      allowDragging={true}
      isModal={true}
      overlayClick={onClose}
    />
  );
};

export default DeleteConfirmDialog;
