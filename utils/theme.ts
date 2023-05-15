import { Roboto } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
export let theme = createTheme({
  palette: {
    primary: {
      main: '#00ccff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#ecfaff',
    },
  },
  typography: {
    // fontFamily: roboto.style.fontFamily,
    fontFamily: 'Heebo, sans-serif ',
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthSm: {
          maxWidth: 680,
          '@media (min-width: 600px)': {
            maxWidth: 680,
          },
        },
        maxWidthMd: {
          maxWidth: 860,
          '@media (min-width: 900px)': {
            maxWidth: 860,
          },
        },
      },
      defaultProps: { maxWidth: 'md' },
      variants: [],
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: 'black',
          '&:hover, &.active': {
            color: '#00ccff',
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'secondary' },
          style: { color: 'white' },
        },
      ],
    },
  },
});
theme = responsiveFontSizes(theme);
