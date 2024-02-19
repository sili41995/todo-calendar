import { FC } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { ButtonsList, ListItem } from './FormControls.styled';
import IconButton from '@/components/IconButton';
import { AriaLabels, BtnTypes, IconBtnTypes, IconSizes } from '@/constants';
import { IProps } from './FormControls.types';

const FormControls: FC<IProps> = ({ onAcceptBtnClick, onResetBtnClick }) => (
  <ButtonsList>
    <ListItem>
      <IconButton
        iconBtnType={IconBtnTypes.accept}
        type={BtnTypes.submit}
        icon={<FaCheck size={IconSizes.secondarySize} />}
        ariaLabel={AriaLabels.accept}
        onClick={onAcceptBtnClick}
      />
    </ListItem>
    <ListItem>
      <IconButton
        iconBtnType={IconBtnTypes.reset}
        icon={<FaTimes size={IconSizes.secondarySize} />}
        ariaLabel={AriaLabels.reset}
        onClick={onResetBtnClick}
      />
    </ListItem>
  </ButtonsList>
);

export default FormControls;
