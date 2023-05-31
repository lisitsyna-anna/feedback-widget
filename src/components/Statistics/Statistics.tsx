import { StatisticList, StatisticItem } from './Statistics.styled';

interface IStatisticsProps {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
}

export const Statistics: React.FC<IStatisticsProps> = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticList>
      <StatisticItem>
        <span>Good: </span>
        <span>{good}</span>
      </StatisticItem>
      <StatisticItem>
        <span>Neutral: </span>
        <span>{neutral}</span>
      </StatisticItem>
      <StatisticItem>
        <span>Bad:</span>
        <span>{bad}</span>
      </StatisticItem>

      <StatisticItem>
        <span>Total:</span>
        <span>{total}</span>
      </StatisticItem>

      <StatisticItem>
        <span>Positive feedback:</span>
        <span>{positivePercentage}%</span>
      </StatisticItem>
    </StatisticList>
  );
};
