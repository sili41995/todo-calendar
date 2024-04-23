import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa';
import { makeBlur, toasts } from '@/utils';
import { IconSizes, InputTypes, Messages } from '@/constants';
import { BtnClickEvent, INewEvent } from '@/types/types';
import Input from '@/components/Input';
import FormControls from '@/components/FormControls';
import { Container, Form, Title } from './AddEventForm.styled';
import { IProps } from './AddEventForm.types';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { addEvent } from '@/redux/events/operations';
import { selectIsLoading } from '@/redux/events/selectors';

const AddEventForm: FC<IProps> = ({ formType }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm<INewEvent>();
  const dispatch = useAppDispatch();
  const isLoading =useAppSelector(selectIsLoading)

  const onCheckboxChange = () => {
    setChecked((prevState) => !prevState);
  };

  const handleFormSubmit: SubmitHandler<INewEvent> = (data) => {
    const deadline = new Date(data.deadline);
    dispatch(addEvent({ ...data, deadline }))
      .unwrap()
      .then(() => {
        toasts.successToast(Messages.addEvent);
        setChecked(false);
        reset();
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  const onResetBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    setChecked(false);
    reset();
  };

  const onAcceptBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
  };

  return (
    <Container>
      <Title>Add contact</Title>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          settings={{ ...register('task', { required: true }) }}
          type={InputTypes.text}
          placeholder='Task'
          label='Task'
          formType={formType}
        />
        <Input
          settings={{ ...register('deadline', { required: true }) }}
          type={InputTypes.dateTimeLocal}
          label='Deadline'
          formType={formType}
        />
        <Input
          settings={{ ...register('completed') }}
          type={InputTypes.checkbox}
          altElem={<FaCheck size={IconSizes.secondarySize} />}
          label='Completed'
          formType={formType}
          checked={checked}
          onChange={onCheckboxChange}
        />
        <FormControls
          onAcceptBtnClick={onAcceptBtnClick}
          onResetBtnClick={onResetBtnClick}
          disabled={isLoading}
        />
      </Form>
    </Container>
  );
};

export default AddEventForm;
