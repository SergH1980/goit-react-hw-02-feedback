import React, { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    return (
      <ul>
        {this.props.options.map(option => {
          return (
            <li key={option}>
              <button
                style={{ textTransform: 'capitalize' }}
                name={option}
                onClick={this.props.onLeaveFeedback}
                type="button"
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
