import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { EmptyMessage } from './Notification.styled';

export class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };
  render() {
    return <EmptyMessage>{this.props.message}</EmptyMessage>;
  }
}
