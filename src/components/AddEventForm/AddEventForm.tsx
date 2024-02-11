const AddEventForm = () => {
  return <div>AddEventForm</div>;
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
//       <Title>Add contact</Title>
//       <Form onSubmit={handleSubmit(handleFormSubmit)}>
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
