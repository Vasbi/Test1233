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
  description = "This action cannot be undone. This will permanently delete the critical date from the database.",
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
          <ButtonComponent cssClass="e-flat" onClick={onClose} disabled={isDeleting}>
            Cancel
          </ButtonComponent>
          <ButtonComponent cssClass="e-danger e-primary" onClick={onConfirm} disabled={isDeleting} isPrimary={true}>
            {isDeleting ? (
              <span>
                <span className="e-icons e-loading-icon animate-spin mr-2" />
                Deleting...
              </span>
            ) : (
              "Delete"
            )}
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
