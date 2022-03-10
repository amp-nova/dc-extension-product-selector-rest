import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

export const PaginationSummaryComponent = params => {
  return <Typography variant="body1">{`${params.items.length} results`}</Typography>;
};

const PaginationSummary = connect(
  state => ({
    items: state.items
  }),
  {}
)(PaginationSummaryComponent);

export default PaginationSummary;
