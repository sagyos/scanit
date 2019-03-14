// Constants
import theme from '../../constants/theme';

export const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    zIndex: '1101',
    top: '0',
    left: '0',
    borderBottom: `4px solid ${theme.palette.secondary.light}`,
    minHeight: '55px',
  },
  appBar: {
    backgroundColor: theme.palette.primary.dark,
  },
  navbarGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    height: '2.8rem',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    textShadow: '8px 4px 7px #00000069',
  },
};