// NPM Packages
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import QrReader from 'react-qr-reader'

// Material UI
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

// Css
import { styles } from './HomePageCss';

class HomePage extends Component {

    state = {
        isScanning: false,
        ScanResult: 'No Result'
    };

    handleScanButton = () => {
        this.setState({isScanning: !this.state.isScanning});
    };

    handleScan = data => {
        if (data) {
            this.setState({ScanResult: data})
        }
    };

    renderScanResult = () => {
        if (this.state.ScanResult !== 'No Result') {
            return(
                <Redirect to={`/qrsummarypage/${this.state.ScanResult}`} />
            )
        }
    };

    handleError = () => {
        console.log("there is problem with the scanner");
    };

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.main}>
        {this.renderScanResult()}
        <CssBaseline />
        <Grid item sm={8} xs={11} className={classes.contentGrid}>
            {this.state.isScanning ?
                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: '500px', height: '500px' }}
                />
                :
                <img src={require('../../assets/ScanIT.png')} alt="logo" className={classes.img}/>
            }
        </Grid>
          <Grid item sm={8} xs={11} className={classes.contentGrid}>
              {this.state.isScanning ?
                  <Button className={classes.cancelBtn} variant="contained" onClick={this.handleScanButton}>
                    ביטול סריקת QR
                  </Button>
                :
                  <Button className={classes.btn} color="secondary" variant="contained" onClick={this.handleScanButton}>
                    סריקת QR
                  </Button>
              }
          </Grid>
      </Grid>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  
};

export default withStyles(styles)(withRouter((HomePage)));