import { GeneralParams } from '@/constants';

// const getWeeksOfMonth = (daysOfMonth: Date[]) => {
//   const weeksOfMonth: Date[][] = [[]];

//   daysOfMonth.forEach((day) => {
//     const lastWeek = weeksOfMonth[weeksOfMonth.length - 1];
//     const isFullWeek = lastWeek.length === GeneralParams.calendarColumns;

//     if (isFullWeek) {
//       weeksOfMonth.push([day]);
//     } else {
//       lastWeek.push(day);
//     }
//   });

//   return weeksOfMonth;
// };

const getWeeksOfMonth = (daysOfMonth: Date[]): Date[][] => {
  const weeksOfMonth = daysOfMonth.reduce(
    (acc: Date[][], day) => {
      const listOfWeeks = Array.from(acc);
      const lastWeekOfList = listOfWeeks[listOfWeeks.length - 1];
      const isFullWeek =
        lastWeekOfList.length === GeneralParams.calendarColumns;

      if (isFullWeek) {
        listOfWeeks.push([day]);
      } else {
        lastWeekOfList.push(day);
      }

      return listOfWeeks;
    },
    [[]]
  );
  console.log(weeksOfMonth);
  return weeksOfMonth;
};

export default getWeeksOfMonth;
