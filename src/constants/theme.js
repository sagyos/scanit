import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#212121' },
  secondary: { main: '#49a80d' }
};

const themeName = 'InfoVere Marketplace';

export default createMuiTheme({ 
  palette,
  themeName,
  typography: {
    useNextVariants: true,
  },
  direction: 'rtl',
 }
);