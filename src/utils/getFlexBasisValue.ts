import { GeneralParams } from '@/constants';

const getFlexBasisValue = (cellGap: number): string =>
  `calc((100% - ${(GeneralParams.calendarColumns - 1) * cellGap}px) / ${
    GeneralParams.calendarColumns
  })`;

export default getFlexBasisValue;
