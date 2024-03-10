import IconButton from '@/components/IconButton';
import { AriaLabels, IconSizes } from '@/constants';
import { FC } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { IProps } from './DelEventBtn.types';

const DelEventBtn: FC<IProps> = ({ onClick, iconBtnType, disabled }) => (
  <IconButton
    iconBtnType={iconBtnType}
    onClick={onClick}
    ariaLabel={AriaLabels.delete}
    icon={<AiOutlineDelete size={IconSizes.secondarySize} />}
    disabled={disabled}
  />
);

export default DelEventBtn;
