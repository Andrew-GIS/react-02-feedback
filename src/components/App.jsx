import { Component } from 'react';
import { FeedbackButtons } from './feedbackButtons/FeedbackOptions';
import { StatisticBox } from './statistic/Statistic';
import { Notification } from './Notification/Notification';
import { Section } from './section/Section';

export class App extends Component{
  // static defaultProps = {
  //   positiveFeedbacks: 0,
  // };

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
  
  countTotalFeedback = () => {
    const feedbackSum = this.state.good + this.state.neutral + this.state.bad;
    return feedbackSum;
  }

  countPositiveFeedbackPercentage = () => {
    const feedbackSum = this.state.good + this.state.neutral + this.state.bad;
    console.log('feedbackSum :>> ', feedbackSum);
    const goodFedbacksNumber = this.state.good;
    console.log('goodFedbacksNumber :>> ', goodFedbacksNumber);
    const positiveFeedbacksPersents = Math.round( goodFedbacksNumber / feedbackSum*100 );
    return positiveFeedbacksPersents;
  }

  render() {
    const options = Object.keys(this.state);
    const posFedbacks = this.countPositiveFeedbackPercentage();
    // this.countPositiveFeedbackPercentage();
    console.log('posFedbacks :>> ', posFedbacks);
    return (
      <>
        {/* <Section title='Please leave feedback' children={this.props.children}> */}
          <FeedbackButtons
            options={options}
            onLeaveFeedback={this.handleFeedback}/>
        {/* </Section> */}
        {/* <Section title='Please leave feedback' children={StatisticBox}> */}
        <section>
          {this.countTotalFeedback() === 0 ? (<Notification message='No feedback given'/>) :
            (<StatisticBox
              good={this.state.good}
              bad={this.state.bad}
              neutral={this.state.neutral}
              total={this.countTotalFeedback()}
              positiveFeedbacks={(Number.isNaN(posFedbacks) || 0) ? 0 : posFedbacks} />)}
          </section>
          {/* </Section> */}
      </>
      )
  }
}
