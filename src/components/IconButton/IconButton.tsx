import { FC } from 'react';
import { BtnTypes } from '@/constants';
import { IProps } from './IconButton.types';
import { Button } from './IconButton.styled';

const IconButton: FC<IProps> = ({
  type = BtnTypes.button,
  ariaLabel,
  icon,
  iconBtnType,
  onClick,
}) => (
  <Button
    type={type}
    aria-label={ariaLabel}
    onClick={onClick}
    iconBtnType={iconBtnType}
  >
    {icon}
  </Button>
);

export default IconButton;
