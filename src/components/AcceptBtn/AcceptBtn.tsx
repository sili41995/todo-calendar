import { FC } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IProps } from './AcceptBtn.types';
import IconButton from '@/components/IconButton';
import { AriaLabels, IconSizes, BtnTypes, IconBtnTypes } from '@/constants';

const AcceptBtn: FC<IProps> = ({ disabled = false }) => (
  <IconButton
    disabled={disabled}
    iconBtnType={IconBtnTypes.accept}
    type={BtnTypes.submit}
    icon={<FaCheck size={IconSizes.secondarySize} />}
    ariaLabel={AriaLabels.accept}
  />
);

export default AcceptBtn;
