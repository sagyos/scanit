// NPM Packages
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

// Css
import { styles } from './ItemsTableCss';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

class ItemsTable extends Component {
  state = {
    itemsChanged: {},
  }

  handleChangeAmount = (id, value, maxValue) => {
    if (value <= maxValue) {
      this.setState({
        itemsChanged: {
          ...this.state.itemsChanged,
          [id]: value,
        }
      });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow> 
              <CustomTableCell align="right">מק"ט</CustomTableCell>
              <CustomTableCell align="right">סדרה</CustomTableCell>
              <CustomTableCell align="right">שם פריט</CustomTableCell>
              <CustomTableCell align="right">תיאור פריט</CustomTableCell>
              <CustomTableCell align="right">כמות מבוקשת</CustomTableCell>
              <CustomTableCell align="right">כמות שניתנה</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.items.map(row => (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell align="right" component="th" scope="row">
                  {row.id}
                </CustomTableCell>
                <CustomTableCell align="right">{row.series}</CustomTableCell>
                <CustomTableCell align="right">{row.name}</CustomTableCell>
                <CustomTableCell align="right">{row.details}</CustomTableCell>
                <CustomTableCell align="right">{row.amount}</CustomTableCell>
                <CustomTableCell align="right">
                  <TextField
                    value={this.state.itemsChanged[row.id] || row.amount}
                    type="number"
                    onChange={(e) => this.handleChangeAmount(row.id, e.target.value, row.amount)}
                    className={classes.textField}
                    inputProps={{
                      min: '0',
                      max: `${row.amount}`,
                      step: '1',
                    }}                  
                    margin="normal"
                  />
                </CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

ItemsTable.propTypes = {
  classes: PropTypes.object.isRequired,
  
};

export default withStyles(styles)((ItemsTable));