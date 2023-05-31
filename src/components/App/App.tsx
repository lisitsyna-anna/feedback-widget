import { useState } from 'react';
import { countPositiveFeedbackPercentage } from '../../helpers';

import { Section } from '../Section';
import { FeedbackOptions } from '../FeedbackOptions';
import { Statistics } from '../Statistics';
import { Notification } from '../Notification';
import { Container } from '../Container';

export const App: React.FC = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];
  const totalFeedback = good + neutral + bad;

  const leaveFeedback = (option: string) => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        throw new Error("There isn't such option");
    }
  };

  return (
    <Container as="main">
      <Container as="div" maxWidth={1250} pl={15} pr={15} ml={'auto'} mr={'auto'}>
        <Section title={'Please leave your feedback'}>
          <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />
        </Section>

        <Section title={'Statistic'}>
          {totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={countPositiveFeedbackPercentage(good, totalFeedback)}
            />
          ) : (
            <Notification message={'There is no feedback, please leave your feedback'} />
          )}
        </Section>
      </Container>
    </Container>
  );
};
