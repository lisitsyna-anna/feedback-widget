import { OptionsList, OptionButton } from './FeedbackOptions.styled';

interface IFeedbackOptions {
  options: string[];
  onLeaveFeedback: (option: string) => void;
}

export const FeedbackOptions: React.FC<IFeedbackOptions> = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {options.map(option => {
        return (
          <li key={option}>
            <OptionButton type="button" onClick={() => onLeaveFeedback(option)}>
              {option.toUpperCase()}
            </OptionButton>
          </li>
        );
      })}
    </OptionsList>
  );
};
