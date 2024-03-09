import AddEventForm from '@/components/AddEventForm';
import { FormTypes } from '@/constants';
import { FC } from 'react';

const NewEventPage: FC = () => <AddEventForm formType={FormTypes.addEvent} />;

export default NewEventPage;
