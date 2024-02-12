import { NewEvent } from '@/types/types';
import { Form, Title } from './AddEventForm.styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/components/Input';
import { IconSizes, InputTypes } from '@/constants';
import { FaCheck } from 'react-icons/fa';
import { FC, useState } from 'react';

const AddEventForm: FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const {
    register,
    // formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<NewEvent>();

  const onCheckboxChange = () => {
    setChecked((prevState) => !prevState);
  };

  const handleFormSubmit: SubmitHandler<NewEvent> = (data) => {
    console.log(data);
    setChecked(false);
    reset();
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

// const AddContactForm: FC = () => {
//   const [contactAvatar, setContactAvatar] = useState<FileList | null>(null);
//   const contacts = useAppSelector(selectContacts);
//   const contactAvatarRef = useRef<HTMLImageElement>(null);
//   const isLoading = useAppSelector(selectIsLoading);
//   const [checked, setChecked] = useState<boolean>(false);
//   const {
//     register,
//     formState: { errors, isSubmitting },
//     handleSubmit,
//     reset,
//   } = useForm<IContact>();
//   const dispatch = useAppDispatch();

//   const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
//     if (!e.target.files?.length) {
//       return;
//     }

//     setContactAvatar(e.target.files);
//     onChangeAvatar({ e, ref: contactAvatarRef });
//   };

//   const handleFormSubmit: SubmitHandler<IContact> = (data) => {
//     const newContactName = data.name;
//     const isContact = getIsContact({ newContactName, contacts });

//     if (isContact) {
//       toasts.warnToast(`${newContactName} is already in contacts`);
//       return;
//     }

//     if (contactAvatar) {
//       data.avatar = contactAvatar;
//     }

//     const contactData = filterEmptyFields<IContact>(data);
//     const contactFormData = getProfileFormData(contactData);

//     dispatch(addContact(contactFormData))
//       .unwrap()
//       .then(() => {
//         toasts.successToast('Contact added successfully');
//         if (contactAvatarRef.current) {
//           contactAvatarRef.current.src = image;
//         }
//         reset();
//       })
//       .catch((error) => {
//         toasts.errorToast(error);
//       });
//   };

//   const onCheckboxChange = () => {
//     setChecked((prevState) => !prevState);
//   };

//   return (
//     <ModalForm>

//         <Input
//           settings={{ ...register('avatar') }}
//           accept='image/png, image/jpeg, image/jpg'
//           onChange={onChangeFile}
//           type={InputTypes.file}
//           altElem={
//             <Image
//               src={image}
//               alt='profile avatar'
//               width='150'
//               height='150'
//               ref={contactAvatarRef}
//             />
//           }
//         />
//         <ContactFormInputs
//           register={register}
//           errors={errors}
//           isSubmitting={isSubmitting}
//           onCheckboxChange={onCheckboxChange}
//           checked={checked}
//         />
//         <ButtonsList>
//           <Item>
//             <AcceptBtn disabled={isLoading} />
//           </Item>
//           <Item>
//             <GoBackLink />
//           </Item>
//         </ButtonsList>
//       </Form>
//     </ModalForm>
//   );
// };

export default AddEventForm;
