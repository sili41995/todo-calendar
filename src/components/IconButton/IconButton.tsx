import { FC } from 'react';
import { BtnTypes } from '@/constants';
import { IProps } from './IconButton.types';
import { BtnTitle, Button } from './IconButton.styled';

const IconButton: FC<IProps> = ({
  type = BtnTypes.button,
  ariaLabel,
  icon,
  iconBtnType,
  title,
  onClick,
}) => (
  <Button
    type={type}
    aria-label={ariaLabel}
    onClick={onClick}
    iconBtnType={iconBtnType}
  >
    {title ? (
      <>
        {icon}
        <BtnTitle>{title}</BtnTitle>
      </>
    ) : (
      icon
    )}
  </Button>
);

export default IconButton;
