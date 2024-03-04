import ProfileSettings from './profileSettings';

const enum Messages {
  fetchEventsErr = 'Failed to fetch events',
  fetchEventByIdErr = 'Failed to fetch event',
  addEvent = 'Event added successfully',
  deleteEvent = 'Event deleted successfully',
  updateEvent = 'Event updated successfully',
  addEventErr = 'Failed to add event',
  deleteEventErr = 'Failed to delete event',
  updateEventErr = 'Failed to update event',
  eventAbsent = 'Event is absent',
  nameReqErr = 'Name is required',
  passwordReqErr = 'Password is required',
  passwordMinLengthErr = `Password minimum length is ${ProfileSettings.passMinLength} characters`,
  passwordRepeatErr = 'You must repeat the password',
  emailReqErr = 'Email is required',
  emailRegExpErr = 'Email must be letters, digits, dot and @',
  greetings = 'Welcome to Calendar',
  successfulSignUp = 'User has been successfully registered',
  successfulSignIn = 'Hello, my friend!',
  authErr = 'Please, authenticate in the app',
}

export default Messages;
