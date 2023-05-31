import { Message } from './Notification.styled';

interface INotificationProps {
  message: string;
}

export const Notification: React.FC<INotificationProps> = ({ message }) => {
  return <Message>{message}</Message>;
};
