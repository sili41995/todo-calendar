import { IProps } from './DefaultMessage.types';
import { Message } from './DefaultMessage.styled';
import { FC } from 'react';

const DefaultMessage: FC<IProps> = ({ message }) => (
  <Message>{message}</Message>
);

export default DefaultMessage;
