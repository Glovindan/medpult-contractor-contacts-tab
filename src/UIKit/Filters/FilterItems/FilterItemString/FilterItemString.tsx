import React, { PropsWithChildren, useState } from 'react'
import CustomInput from '../../../CustomInput/CustomInput'
import FilterItemWrapper from '../FilterItemWrapper/FilterItemWrapper';
import { FilterItemProps, StringFilter } from '../../FiltersTypes';

interface FilterItemStringProps extends FilterItemProps<StringFilter> {
    title: string
}

/** Обертка панели фильтров */
export default function FilterItemString({ title, filterValue, setFilterValue }: FilterItemStringProps) {

    const inputHandler = (value: string) => {
        const currentValue: StringFilter = filterValue;
        currentValue.value = value;
        setFilterValue(currentValue);
    }

    return (
        <FilterItemWrapper title={title}>
            <CustomInput value={filterValue.value} setValue={inputHandler} />
        </FilterItemWrapper>
    )
}