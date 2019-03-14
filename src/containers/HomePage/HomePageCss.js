// Constants
import theme from '../../constants/theme';

export const styles = {
  main: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  contentGrid: {
    display: 'flex',
    justifyContent: 'center',
  },
  btn: {
    marginTop: theme.spacing.unit * 3,
  },
  img: {
    height: '700px',
    width: '700px',
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