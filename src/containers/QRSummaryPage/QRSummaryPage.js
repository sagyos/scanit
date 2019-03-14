// NPM Packages
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// Material UI
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

// Components
import ItemsTable from '../../components/QRSummaryPage/ItemsTable/ItemsTable';

// Css
import { styles } from './QRSummaryPageCss';
import { Typography, Button } from '@material-ui/core';

class QRSummaryPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.main}>
        <CssBaseline />
        <Grid item sm={8} xs={11} className={classes.contentGrid}>
          <Typography variant="h4">
            סיכום הזמנה
          </Typography>
          <ItemsTable />
          <Button className={classes.createQR} color="secondary" variant="contained">
            אשר קבלת הזמנה
          </Button>
        </Grid>
      </Grid>
    );
  }
}

QRSummaryPage.propTypes = {
  classes: PropTypes.object.isRequired,
  
};

export default withStyles(styles)(withRouter((QRSummaryPage)));