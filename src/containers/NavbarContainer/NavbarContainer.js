// NPM
import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

// CSS
import { styles } from './NavbarContainerCss';
import { Typography } from '@material-ui/core';

class NavbarContainer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Grid container className={classes.navbarGrid}>
              <Typography variant="h5" className={classes.text}>
                ScanIT
              </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavbarContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavbarContainer);