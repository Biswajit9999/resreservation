import { Alert, Snackbar } from "@mui/material";

export default function AutohideSnackbar({ open, message, onClose }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity="error" variant="filled" onClose={onClose}>
        {message}
      </Alert>
    </Snackbar>
  );
}