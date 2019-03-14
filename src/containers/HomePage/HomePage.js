// NPM Packages
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// Material UI
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Css
import { styles } from './HomePageCss';

class HomePage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.main}>
        <CssBaseline />
        <Grid item sm={8} xs={11} className={classes.contentGrid}>
          <Typography variant="h1" className={classes.text}>
            Yeah
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  
};

export default withStyles(styles)(withRouter((HomePage)));