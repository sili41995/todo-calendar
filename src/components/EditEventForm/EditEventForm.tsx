import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa';
import { useMutation } from '@tanstack/react-query';
import { QueryKeys, operations, queryClient } from '@/tanStackQuery';
import Input from '@/components/Input';
import FormControls from '@/components/FormControls';
import { ClickEvent, NewEvent } from '@/types/types';
import { IconSizes, InputTypes, Messages } from '@/constants';
import { makeBlur, toasts } from '@/utils';
import { IProps } from './EditEventForm.types';
import { Form, Title } from './EditEventForm.styled';

const EditEventForm: FC<IProps> = ({ event }) => {
  const { id, completed, deadline, task } = event;
  const [checked, setChecked] = useState<boolean>(() => completed);
  const { register, handleSubmit, reset } = useForm<NewEvent>();
  const { mutate: editEvent } = useMutation({
    mutationFn: operations.updateEvent,
    onSuccess: onSuccessHTTPRequest,
    onError: onFailedHTTPRequest,
  });

  function onFailedHTTPRequest(error: Error): void {
    toasts.errorToast(error.message);
  }

  function onSuccessHTTPRequest(): void {
    toasts.successToast(Messages.updateEvent);
    queryClient.invalidateQueries({
      queryKey: [QueryKeys.events],
    });
  }

  const handleFormSubmit: SubmitHandler<NewEvent> = (data) => {
    editEvent({ event: data, id });
  };

  const onCheckboxChange = () => {
    setChecked((prevState) => !prevState);
  };

  const onAcceptBtnClick = (e: ClickEvent) => {
    makeBlur(e.currentTarget);
  };

  const onResetBtnClick = (e: ClickEvent) => {
    makeBlur(e.currentTarget);
    setChecked(completed);
    reset();
  };

  return (
    <>
      <Title>Edit event</Title>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          settings={{ ...register('task', { required: true }) }}
          type={InputTypes.text}
          placeholder='Task'
          label='Task'
          defaultValue={task}
        />
        <Input
          settings={{ ...register('deadline', { required: true }) }}
          type={InputTypes.dateTimeLocal}
          label='Deadline'
          defaultValue={deadline}
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

export default EditEventForm;
