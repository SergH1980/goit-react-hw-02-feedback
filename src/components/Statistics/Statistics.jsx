import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import { StatItem, StatList } from './Statistics.styled';

export class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    if (good === 0 && neutral === 0 && bad === 0) {
      return <Notification message="There is no feedback!" />;
    }
    return (
      <StatList>
        <StatItem>Good: {good}</StatItem>
        <StatItem>Neutral: {neutral}</StatItem>
        <StatItem>Bad: {bad}</StatItem>
        <StatItem>Total: {total}</StatItem>
        <StatItem>
          Positive feedback: {positivePercentage > 0 ? positivePercentage : 0}%
        </StatItem>
      </StatList>
    );
  }
}
