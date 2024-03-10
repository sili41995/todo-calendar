import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa';
import { useMutation } from '@tanstack/react-query';
import { QueryKeys, operations, queryClient } from '@/tanStackQuery';
import Input from '@/components/Input';
import FormControls from '@/components/FormControls';
import { BtnClickEvent, INewEvent } from '@/types/types';
import { IconSizes, InputTypes, Messages } from '@/constants';
import { getDeadlineParams, makeBlur, toasts } from '@/utils';
import { IProps } from './EditEventForm.types';
import { Form, Title } from './EditEventForm.styled';

const EditEventForm: FC<IProps> = ({ event, formType }) => {
  const { _id, completed, deadline, task } = event;
  const [checked, setChecked] = useState<boolean>(() => completed);
  const { register, handleSubmit, reset } = useForm<INewEvent>();
  const { mutate: editEvent, isPending: isLoading } = useMutation({
    mutationFn: operations.updateEvent,
    onSuccess: onSuccessHTTPRequest,
    onError: onFailedHTTPRequest,
  });
  const { taskDeadline } = getDeadlineParams(deadline);

  function onFailedHTTPRequest(error: Error): void {
    toasts.errorToast(error.message);
  }

  function onSuccessHTTPRequest(): void {
    toasts.successToast(Messages.updateEvent);
    queryClient.invalidateQueries({
      queryKey: [QueryKeys.events],
    });
    queryClient.invalidateQueries({
      queryKey: [QueryKeys.monthlyEvents],
    });
  }

  const handleFormSubmit: SubmitHandler<INewEvent> = (data) => {
    const deadline = new Date(data.deadline);
    editEvent({ data: { ...data, deadline }, id: _id });
  };

  const onCheckboxChange = () => {
    setChecked((prevState) => !prevState);
  };

  const onAcceptBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
  };

  const onResetBtnClick = (e: BtnClickEvent) => {
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
          formType={formType}
          defaultValue={task}
        />
        <Input
          settings={{ ...register('deadline', { required: true }) }}
          type={InputTypes.dateTimeLocal}
          label='Deadline'
          formType={formType}
          defaultValue={taskDeadline}
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
    </>
  );
};

export default EditEventForm;
