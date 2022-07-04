import { Component } from 'react';
import { FeedbackButtons } from './feedbackButtons/feedbeackBtns';
import { StatisticBox } from './statistic/statistic';

export class App extends Component{
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleFeedback = (event) => {
    const value = event.target.id;
    if (event.target.id === '') {
      console.log('WE ARE ON RESET:>> ');
      this.setState(
        { good: 0, neutral: 0, bad: 0 }
      );
      // return `WE ARE ON RESET :>> `;
    }

    this.setState(prevState => {
      console.log('WE TABED ON :>> ', event.target.id);
      console.log('object :>> ', prevState);
      return { [value]: prevState[value] + 1 };
    });
   };

  render() {
    const options = Object.keys(this.state);
    return (
      <>
        <h1 >Leave your feedback</h1>
        <FeedbackButtons options={options} onLeaveFeedback={this.handleFeedback}/>
        <StatisticBox good={this.state.good} bad={this.state.bad} neutral={this.state.neutral} />
      </>
      )
  }
}
