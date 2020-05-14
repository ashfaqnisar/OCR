import React from 'react';
import _ from 'lodash';

export const isBlank = value => {
  return (_.isEmpty(value) && !_.isNumber(value)) || _.isNaN(value);
};
export const handleUndefined = (data, character) => {
  if (character) {
    return !isBlank(data) ? data : character;
  }
  return !isBlank(data) ? data : '';
};
