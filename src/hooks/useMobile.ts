import { useTheme, useMediaQuery } from '@mui/material';

// Returns true if current viewport is mobile (< md breakpoint)
export const useMobile = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('md'));
};
