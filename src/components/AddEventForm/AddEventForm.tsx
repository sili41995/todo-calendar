import { FC, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa';
import { QueryKeys, operations, queryClient } from '@/tanStackQuery';
import { makeBlur, toasts } from '@/utils';
import { IconSizes, InputTypes, Messages } from '@/constants';
import { BtnClickEvent, INewEvent } from '@/types/types';
import Input from '@/components/Input';
import FormControls from '@/components/FormControls';
import { Container, Form, Title } from './AddEventForm.styled';
import { IProps } from './AddEventForm.types';

const AddEventForm: FC<IProps> = ({ formType }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const { mutate: addEvent } = useMutation({
    mutationFn: operations.addEvent,
    onSuccess: onSuccessHTTPRequest,
    onError: onFailedHTTPRequest,
  });
  const { register, handleSubmit, reset } = useForm<INewEvent>();

  function onFailedHTTPRequest(error: Error): void {
    toasts.errorToast(error.message);
  }

  function onSuccessHTTPRequest() {
    setChecked(false);
    reset();
    toasts.successToast(Messages.addEvent);
    queryClient.invalidateQueries({
      queryKey: [QueryKeys.events],
    });
    queryClient.invalidateQueries({
      queryKey: [QueryKeys.monthlyEvents],
    });
  }

  const onCheckboxChange = () => {
    setChecked((prevState) => !prevState);
  };

  const handleFormSubmit: SubmitHandler<INewEvent> = (data) => {
    const deadline = new Date(data.deadline);
    addEvent({ ...data, deadline });
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
        />
      </Form>
    </Container>
  );
};

export default AddEventForm;
