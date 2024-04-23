import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa';
import Input from '@/components/Input';
import FormControls from '@/components/FormControls';
import { BtnClickEvent, INewEvent } from '@/types/types';
import { IconSizes, InputTypes, Messages } from '@/constants';
import { getDeadlineParams, makeBlur, toasts } from '@/utils';
import { IProps } from './EditEventForm.types';
import { Form, Title } from './EditEventForm.styled';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { updateEvent } from '@/redux/events/operations';
import { selectIsLoading } from '@/redux/events/selectors';

const EditEventForm: FC<IProps> = ({ event, formType, setEvent }) => {
  const { _id: id, completed, deadline, task } = event;
  const [checked, setChecked] = useState<boolean>(() => completed);
  const { register, handleSubmit, reset } = useForm<INewEvent>();
  const { taskDeadline } = getDeadlineParams(deadline);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  const handleFormSubmit: SubmitHandler<INewEvent> = (data) => {
    const deadline = new Date(data.deadline);
    dispatch(updateEvent({ data: { ...data, deadline }, id }))
      .unwrap()
      .then((data) => {
        toasts.successToast(Messages.updateEvent);
        setEvent && setEvent(data);
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
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
