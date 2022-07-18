import { Component } from 'react';
import  FeedbackButtons from './feedbackButtons';
import StatisticBox from './statistic';
import  Notification from './Notification';
import { Section } from './section/Section';

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleFeedback = (value) => {
    //  console.log('value :>> ', value);
    this.setState(prevState => {
      return { [ value ]: prevState[ value ] + 1 };
    });
  }

  reset = () => {
    this.setState(
        { good: 0, neutral: 0, bad: 0 }
      );
  }
  
  countTotalFeedback = () => {
    const feedbackSum = this.state.good + this.state.neutral + this.state.bad;
    return feedbackSum;
  }

  countPositiveFeedbackPercentage = () => {
    const feedbackSum = this.state.good + this.state.neutral + this.state.bad;
    const goodFedbacksNumber = this.state.good;
    const positiveFeedbacksPersents = Math.round( goodFedbacksNumber / feedbackSum*100 );
    return positiveFeedbacksPersents;
  }

  render() {
    const options = Object.keys(this.state);
    const posFedbacks = this.countPositiveFeedbackPercentage();
   
    return (
      <>
        <Section title='Leave your feedback'>
          <FeedbackButtons
            options={options}
            onLeaveFeedback={this.handleFeedback}
            onReset={this.reset} />
        </Section>

        <Section title='Statistic'>
            {this.countTotalFeedback() === 0
            ? (<Notification message='No feedback given' />)
            :(<StatisticBox
              good={this.state.good}
              bad={this.state.bad}
              neutral={this.state.neutral}
              total={this.countTotalFeedback()}
              positiveFeedbacks={(Number.isNaN(posFedbacks) || 0) ? 0 : posFedbacks}/>)}
          </Section>
      </>
    )
  }
}