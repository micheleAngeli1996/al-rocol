import { createTheme } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  primaryColor: 'wine',
  colors: {
    wine: ['#fff3f5', '#f4dce4', '#e3b8c6', '#d090a8', '#bd6688', '#9f3d64', '#731732', '#5d172a', '#45111f', '#2d0b14']
  },
  radius: {
    md: '16px',
    lg: '22px',
    xl: '28px'
  }
});
