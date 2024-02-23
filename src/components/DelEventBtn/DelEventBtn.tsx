import IconButton from '@/components/IconButton';
import { AriaLabels, IconBtnTypes, IconSizes } from '@/constants';
import { FC } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { IProps } from './DelEventBtn.types';

const DelEventBtn: FC<IProps> = ({ onClick }) => (
  <IconButton
    iconBtnType={IconBtnTypes.delete}
    onClick={onClick}
    ariaLabel={AriaLabels.delete}
    icon={<AiOutlineDelete size={IconSizes.secondarySize} />}
  />
);

export default DelEventBtn;
