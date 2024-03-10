import { FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa';
import { makeBlur } from '@/utils';
import IconButton from '@/components/IconButton';
import {
  AriaLabels,
  IconBtnTypes,
  IconSizes,
  SearchParamsKeys,
  SortTypes,
} from '@/constants';
import { Container } from './Filter.styled';
import { useSetSearchParams } from '@/hooks';
import { BtnClickEvent } from '@/types/types';
import { FC } from 'react';

const Filter: FC = () => {
  const { searchParams, updateSearchParams } = useSetSearchParams();
  const descSortType =
    searchParams.get(SearchParamsKeys.sort) === SortTypes.decs;
  const sortBtnIcon = descSortType ? (
    <FaSortAlphaDown size={IconSizes.secondarySize} />
  ) : (
    <FaSortAlphaUp size={IconSizes.secondarySize} />
  );

  const onSortBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
    const value = descSortType ? SortTypes.asc : SortTypes.decs;
    updateSearchParams({ key: SearchParamsKeys.sort, value });
  };

  return (
    <Container>
      <IconButton
        iconBtnType={IconBtnTypes.filter}
        onClick={onSortBtnClick}
        ariaLabel={AriaLabels.sort}
        icon={sortBtnIcon}
      />
    </Container>
  );
};

export default Filter;
