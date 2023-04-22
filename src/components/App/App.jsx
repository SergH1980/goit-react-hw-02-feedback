import React, { Component } from 'react';
import { FeedbackOptions } from '../FeedbackButtons/FeedbackOptions';
// import { Statistics } from '../Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const parameter = event.currentTarget.name;
    this.setState(prevState => {
      return {
        [parameter]: prevState[parameter] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good / this.countTotalFeedback(this.state)) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <p>Please leave feedback</p>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <p>Statistics</p>
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>
            Positive feedback:{' '}
            {this.countPositiveFeedbackPercentage() > 0
              ? this.countPositiveFeedbackPercentage()
              : 0}
            %
          </p>
        </div>
      </div>
    );
  }
}
