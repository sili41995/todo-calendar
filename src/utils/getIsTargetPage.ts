import { IGetIsTargetPageProps } from '@/types/types';

const getIsTargetPage = ({
  pathname,
  targetPage,
}: IGetIsTargetPageProps): boolean => pathname.includes(targetPage);

export default getIsTargetPage;
