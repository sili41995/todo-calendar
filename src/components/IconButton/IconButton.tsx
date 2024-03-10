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
  disabled,
  onClick,
}) => (
  <Button
    type={type}
    aria-label={ariaLabel}
    onClick={onClick}
    iconBtnType={iconBtnType}
    disabled={disabled}
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
