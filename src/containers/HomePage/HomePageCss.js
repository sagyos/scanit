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
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    textShadow: '8px 4px 7px #00000069',
    fontSize: '6rem',
    [theme.breakpoints.down('lg')]: {
      fontSize: '5rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '4.3rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.4rem',
    },
  },
};