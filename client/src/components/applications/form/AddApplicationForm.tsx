import { FC } from "react";
import { Dialog, DialogTitle } from "@mui/material";

export interface AddApplicationFormProps {
  open: boolean;
  onClose: () => void;
}

export const AddApplicationForm: FC<AddApplicationFormProps> = ({ onClose, open }) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Add Application</DialogTitle>
    </Dialog>
  );
};
