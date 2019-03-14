// NPM Packages
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Material UI
import { MuiThemeProvider } from '@material-ui/core/styles';

// Containers
import NavbarContainer from './NavbarContainer/NavbarContainer';
import QRSummaryPage from './QRSummaryPage/QRSummaryPage';

// Constants
import theme from '../constants/theme'

const Root = () => (
  <MuiThemeProvider
        theme={theme}
  >
    <NavbarContainer />
    <Switch>
      <Route path={'/'}
            component={QRSummaryPage} />
      <Redirect to={'/'} />
    </Switch>
  </MuiThemeProvider>
)

Root.propTypes = {
}

export default Root