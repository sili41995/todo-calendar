import { NewEvent } from '@/types/types';
import { Form, Title } from './AddEventForm.styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/components/Input';
import { IconSizes, InputTypes, Messages } from '@/constants';
import { FaCheck } from 'react-icons/fa';
import { FC, useState } from 'react';
import queryClient from '@/tanStackQuery/client';
import QueryKey from '@/tanStackQuery/keys';
import { addEvent } from '@/tanStackQuery/operations';
import { toasts } from '@/utils';
import { useMutation } from '@tanstack/react-query';

const AddEventForm: FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const { mutate: addNewEvent } = useMutation({
    mutationFn: addEvent,
    onSuccess: onSuccessHTTPRequest,
    onError: onFailedHTTPRequest,
  });
  const {
    register,
    // formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<NewEvent>();

  function onFailedHTTPRequest(error: Error): void {
    toasts.errorToast(error.message);
  }

  function onSuccessHTTPRequest() {
    setChecked(false);
    reset();
    toasts.successToast(Messages.addEvent);
    queryClient.invalidateQueries({ queryKey: [QueryKey.events] });
  }

  const onCheckboxChange = () => {
    setChecked((prevState) => !prevState);
  };

  const handleFormSubmit: SubmitHandler<NewEvent> = (data) => {
    addNewEvent(data);
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
        <button type='submit'>Submit</button>
      </Form>
    </>
  );
};

export default AddEventForm;
