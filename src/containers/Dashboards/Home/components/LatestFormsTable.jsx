import React, { useState } from 'react';
import classnames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import truncate from 'truncate';
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
  TableContainer,
  Chip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import mockData from '../../../../data/sampleTableData';
import { useHistory } from 'react-router';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
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
  },
  statusFont: {
    fontSize: '0.7rem'
  }
}));

const statusColors = {
  delivered: 'success',
  pending: 'info',
  refunded: 'danger'
};

const LatestFormsTable = props => {
  const { className, documents, ...rest } = props;

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
                <TableCell>File Id</TableCell>
                <TableCell>Uploaded File</TableCell>
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
              {documents.map(document => (
                <TableRow key={document.id}>
                  <TableCell>
                    <Typography noWrap variant={'body2'}>
                      {truncate(document.fileId.split('.')[0])}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Link href={document.fileLink} color={'primary'}>
                      {truncate(document.uploadedFile, 13)}
                    </Link>
                  </TableCell>
                  <TableCell>
                    {moment(document.processedAt).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={'Processed'}
                      size={'small'}
                      color={'primary'}
                    />
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
