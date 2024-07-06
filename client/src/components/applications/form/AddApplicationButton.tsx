import { FC, useState } from "react";

import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { AddApplicationForm } from "./AddApplicationForm";

export const AddApplicationButton: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton aria-label="add an application" onClick={() => setOpen(true)}>
        <AddIcon fontSize="large" />
      </IconButton>
      {open && <AddApplicationForm open={open} onClose={() => setOpen(false)} />}
    </>
  );
};
