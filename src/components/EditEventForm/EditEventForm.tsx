import Input from '@/components/Input';
import { Form, Title } from './EditEventForm.styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NewEvent } from '@/types/types';
import { IconSizes, InputTypes, Messages } from '@/constants';
import { FaCheck } from 'react-icons/fa';
import { FC, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { toasts } from '@/utils';
import queryClient from '@/tanStackQuery/client';
import QueryKey from '@/tanStackQuery/keys';
import { updateEvent } from '@/tanStackQuery/operations';
import { IProps } from './EditEventForm.types';

const EditEventForm: FC<IProps> = ({ event }) => {
  const { id, completed, deadline, task } = event;
  const [checked, setChecked] = useState<boolean>(() => completed);
  const {
    register,
    handleSubmit,
  } = useForm<NewEvent>();
  const { mutate: editEvent } = useMutation({
    mutationFn: updateEvent,
    onSuccess: onSuccessHTTPRequest,
    onError: onFailedHTTPRequest,
  });

  function onFailedHTTPRequest(error: Error): void {
    toasts.errorToast(error.message);
  }

  function onSuccessHTTPRequest() {
    toasts.successToast(Messages.updateEvent);
    queryClient.invalidateQueries({ queryKey: [QueryKey.events] });
  }

  const handleFormSubmit: SubmitHandler<NewEvent> = (data) => {
    editEvent({ event: data, id });
  };

  const onCheckboxChange = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <>
      <Title>Edit contact</Title>
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
        <button type='submit'>Submit</button>
      </Form>
    </>
  );
};

export default EditEventForm;
