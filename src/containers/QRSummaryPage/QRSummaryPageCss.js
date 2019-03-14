// Constants
import theme from '../../constants/theme';

export const styles = {
  main: {
    marginTop: theme.spacing.unit * 5,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  contentGrid: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  createQR: {
    marginTop: theme.spacing.unit * 3,
    // backgroundColor: theme.palette.secondary.dark,
    color: '#fff',
    '&:hover': {
      // backgroundColor: theme.palette.secondary.main,
    }
  },
};