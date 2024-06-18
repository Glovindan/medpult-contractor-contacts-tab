import React from 'react';
import { ListColumnData } from '../../../UIKit/CustomList/CustomListTypes';
import CustomList from '../../../UIKit/CustomList/CustomList';
import { ContactItem } from './ContactsTabTypes';
import Scripts from '../../shared/utils/clientScripts';

interface ContactsTabProps {
}

/** Вкладка Контактные лица */
function ContactsTab() {
	/** Колонки списка */
	const columns = [
		new ListColumnData({ name: "фио", code: "fullname", fr: 1 }),
		new ListColumnData({ name: "тип контакта", code: "type", fr: 1 }),
		new ListColumnData({ name: "должность", code: "position", fr: 1 }),
		new ListColumnData({ name: "телефон", code: "phone", fr: 1 }),
		new ListColumnData({ name: "Email", code: "email", fr: 1 }),
		new ListColumnData({ name: "примечание", code: "comment", fr: 1 }),
	]

	const getDataHandler = async () => {
		const data = await Scripts.getContacts();
		console.log(data);
		return data
	}

	return (
		<div className="contacts-tab">
			{/* Табличка */}
			<CustomList<null, ContactItem> columnsSettings={columns} setSearchHandler={() => { }} getDataHandler={getDataHandler} isScrollable={false} />
		</div>
	)
}

export default ContactsTab
