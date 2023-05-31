export const countPositiveFeedbackPercentage = (good: number, totalFeedback: number) => {
  return Math.round((good / totalFeedback) * 100) || 0;
};
