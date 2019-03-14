// NPM Packages
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import QRCode from 'qrcode.react';

// Material UI
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { Typography, Button } from '@material-ui/core';

// Components
import ItemsTable from '../../components/QRSummaryPage/ItemsTable/ItemsTable';

// Services
import { ItemsService } from '../../services/ItemsService';

// Css
import { styles } from './QRSummaryPageCss';

class QRSummaryPage extends Component {
  state = {
    items: [],
    isLoading: true,
    isAccepted: false,
  }

  async componentDidMount() {
    const items = await ItemsService.getItems(this.props.scanResult);
    this.setState({
      items,
      isLoading: false,
    });
  }

  handleAccept = () => {
    this.setState({
      isAccepted: true,
    })
  }

  getQRCode = () => {
    const { classes } = this.props;
    
    return(
      <QRCode id="canvas" value="http://facebook.github.io/react/" size={300} className={classes.qrCode} />
    );
  }

  downloadQR = () => {
    var download = document.getElementById("download");
    var image = document.getElementById("canvas").toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
  }

  render() {
    const { classes, scanResult } = this.props;
    console.log(scanResult);
    return (
      this.state.isLoading ?
        <h3>Loading</h3>
      :
        <Grid container className={classes.main}>
          <CssBaseline />
          <Grid item sm={8} xs={11} className={classes.contentGrid}>
            <Typography variant="h4">
              סיכום הזמנה
            </Typography>
            {this.state.isAccepted ?
            <React.Fragment>
              {this.getQRCode()}
              <Grid container className={classes.btnGrid}>
                <a href="/" id="download" download="OrderSummary.png">
                  <Button className={classes.downloadBtn} variant="contained" color="secondary" onClick={this.downloadQR}>
                    הורד קוד
                  </Button>
                </a>
                <a href="/">
                  <Button variant="contained" color="secondary">
                    חזרה לדף הבית
                  </Button>
                </a>
              </Grid>
            </React.Fragment>
            :
              <React.Fragment>
                <ItemsTable items={this.state.items} />
                <Button onClick={this.handleAccept} className={classes.createQR} color="secondary" variant="contained">
                  אשר קבלת הזמנה
                </Button>
              </React.Fragment>
            }
          </Grid>
        </Grid>
    );
  }
}

QRSummaryPage.propTypes = {
  classes: PropTypes.object.isRequired,
  
};

export default withStyles(styles)(withRouter((QRSummaryPage)));