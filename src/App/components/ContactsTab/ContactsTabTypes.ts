import { ItemDataString } from '../../../UIKit/CustomList/CustomListTypes'

/** Элемент списка контактных лиц */
export interface ContactItem {
	/** ФИО */
	fullname: ItemDataString
	/** Тип контакта */
	type: ItemDataString
	/** Должность */
	position: ItemDataString
	/** Телефон */
	phone: ItemDataString
	/** Email */
	email: ItemDataString
	/** Примечание */
	comment: ItemDataString
}
