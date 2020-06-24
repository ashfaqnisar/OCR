import React, { useState } from 'react';
import classnames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel,
  TableContainer
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import mockData from '../../../../data/sampleTableData';
import { useHistory } from 'react-router';
// import { StatusBullet } from 'components';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const statusColors = {
  delivered: 'success',
  pending: 'info',
  refunded: 'danger'
};

const LatestFormsTable = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [orders] = useState(mockData);

  const history = useHistory();

  return (
    <Card {...rest} className={classnames(classes.root, className)}>
      <CardHeader
        action={
          <Button
            color="primary"
            size="small"
            variant="outlined"
            onClick={() => history.push('/forms/upload')}
          >
            Upload New Form
          </Button>
        }
        title="Recent Forms"
      />
      <Divider />
      <CardContent className={classes.content}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order Ref</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="desc">
                      Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map(order => (
                <TableRow hover key={order.ref}>
                  <TableCell>{order.ref}</TableCell>
                  <TableCell>{order.customer.name}</TableCell>
                  <TableCell>
                    {moment(order.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    <div className={classes.statusContainer}>
                      {/*<StatusBullet*/}
                      {/*  className={classes.status}*/}
                      {/*  color={statusColors[order.status]}*/}
                      {/*  size="sm"*/}
                      {/*/>*/}
                      {order.status}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
          onClick={() => history.push('/forms')}
        >
          View all <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

LatestFormsTable.propTypes = {
  className: PropTypes.string
};

export default LatestFormsTable;
