import { GeneralParams } from '@/constants';

const getFlexBasisValue = ({
  cellGap,
  columns = GeneralParams.calendarColumns,
}: {
  cellGap: number;
  columns?: number;
}): string =>
  `calc((100% - ${
    (columns - 1) * cellGap
  }px) / ${columns})`;

export default getFlexBasisValue;
