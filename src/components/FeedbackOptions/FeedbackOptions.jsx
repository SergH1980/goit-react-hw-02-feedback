import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonList, ButtonStyle } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  static propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  onClickFeedback = event => {
    const parameter = event.currentTarget.name;
    this.props.onLeaveFeedback(parameter);
  };

  render() {
    const { options } = this.props;

    return (
      <ButtonList>
        {options.map(option => {
          return (
            <li key={option}>
              <ButtonStyle
                name={option}
                onClick={this.onClickFeedback}
                type="button"
              >
                {option}
              </ButtonStyle>
            </li>
          );
        })}
      </ButtonList>
    );
  }
}
