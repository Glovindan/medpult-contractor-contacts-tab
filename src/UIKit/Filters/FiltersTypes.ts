/** Интерфейс фильтров */
export interface IFilter {
	/** Сброс фильтра */
	reset(): void
	/** Код поля */
	fieldCode: string
	/** Название поля */
	fieldName: string
}

/** Операторы фильтров по строке */
export enum StringFilterOperator {
	/** Равно */
	eq = 'eq',
	/** Неравно */
	neq = 'neq',
	/** Содержит */
	like = 'like',
}

/** Фильтр по строке */
export class StringFilter implements IFilter {
	/** Значение */
	value: string
	/** Оператор (по умолчанию Содержит) */
	operator: StringFilterOperator
	fieldCode: string
	fieldName: string

	constructor(code: string, name: string, value?: string) {
		this.reset()
		this.fieldCode = code
		this.fieldName = name
		if (value) this.value = value
	}

	reset(): void {
		this.value = ''
		this.operator = StringFilterOperator.like
	}
}

/** Значение элемента списка */
export class ObjectItem {
	/** Значение */
	value: string
	/** Код / Идентификатор */
	code: string

	constructor({ value, code }: { value?: string; code?: string }) {
		this.value = value ?? ''
		this.code = code ?? ''
	}
}

/** Фильтр по списку */
export class ListFilter implements IFilter {
	/** Значения */
	values: ObjectItem[]
	fieldCode: string
	fieldName: string

	constructor(code: string, name: string) {
		this.reset()
		this.fieldCode = code
		this.fieldName = name
	}

	reset(): void {
		this.values = []
	}
}

/** Фильтр по датам */
export class DateFilter implements IFilter {
	/** Дата от */
	valueFrom?: string
	/** Дата до */
	valueTo?: string
	fieldCode: string
	fieldName: string

	constructor(code: string, name: string) {
		this.reset()
		this.fieldCode = code
		this.fieldName = name
	}

	reset(): void {
		this.valueFrom = undefined
		this.valueTo = undefined
	}
}

/** Базовый класс для фильтров */
export interface IFiltersData {
	/** Сброс всех фильтров */
	reset(): void
}

export interface FilterItemProps<FilterType> {
	/** Значение фильтра */
	filterValue: FilterType
	/** Изменение значения фильтра */
	setFilterValue: (value: FilterType, ...args: any) => any
}
