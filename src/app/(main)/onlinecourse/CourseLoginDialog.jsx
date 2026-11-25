'use client';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';

export default function CourseLoginDialog({ open, onClose, returnTo }) {
  const goToLogin = () => {
    const redirect = returnTo || '/onlinecourse';
    window.location.href = `/LoginPage?redirect=${encodeURIComponent(redirect)}`;
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="course-login-dialog-title">
      <DialogTitle id="course-login-dialog-title">Sign in to continue</DialogTitle>
      <DialogContent>
        <Typography>Please log in to continue to course enrollment.</Typography>
      </DialogContent>
      <DialogActions sx={{ p: 2, pt: 0 }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={goToLogin}>Log in</Button>
      </DialogActions>
    </Dialog>
  );
}
