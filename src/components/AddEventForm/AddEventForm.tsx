import { FC, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa';
import { QueryKeys, operations, queryClient } from '@/tanStackQuery';
import { makeBlur, toasts } from '@/utils';
import { IconSizes, InputTypes, Messages } from '@/constants';
import { ClickEvent, NewEvent } from '@/types/types';
import Input from '@/components/Input';
import FormControls from '@/components/FormControls';
import { Form, Title } from './AddEventForm.styled';

const AddEventForm: FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const { mutate: addNewEvent } = useMutation({
    mutationFn: operations.addEvent,
    onSuccess: onSuccessHTTPRequest,
    onError: onFailedHTTPRequest,
  });
  const { register, handleSubmit, reset } = useForm<NewEvent>();

  function onFailedHTTPRequest(error: Error): void {
    toasts.errorToast(error.message);
  }

  function onSuccessHTTPRequest() {
    setChecked(false);
    reset();
    toasts.successToast(Messages.addEvent);
    queryClient.invalidateQueries({ queryKey: [QueryKeys.events] });
  }

  const onCheckboxChange = () => {
    setChecked((prevState) => !prevState);
  };

  const handleFormSubmit: SubmitHandler<NewEvent> = (data) => {
    addNewEvent(data);
  };

  const onResetBtnClick = (e: ClickEvent) => {
    makeBlur(e.currentTarget);
    setChecked(false);
    reset();
  };

  const onAcceptBtnClick = (e: ClickEvent) => {
    makeBlur(e.currentTarget);
  };

  return (
    <>
      <Title>Add contact</Title>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          settings={{ ...register('task', { required: true }) }}
          type={InputTypes.text}
          placeholder='Task'
          label='Task'
        />
        <Input
          settings={{ ...register('deadline', { required: true }) }}
          type={InputTypes.dateTimeLocal}
          label='Deadline'
        />
        <Input
          settings={{ ...register('completed') }}
          type={InputTypes.checkbox}
          altElem={<FaCheck size={IconSizes.secondarySize} />}
          label='Completed'
          checked={checked}
          onChange={onCheckboxChange}
        />
        <FormControls
          onAcceptBtnClick={onAcceptBtnClick}
          onResetBtnClick={onResetBtnClick}
        />
      </Form>
    </>
  );
};

export default AddEventForm;
