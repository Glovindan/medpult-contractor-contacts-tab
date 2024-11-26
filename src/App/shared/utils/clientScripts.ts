import { FetchData, FetchItem, ItemDataString } from '../../../UIKit/CustomList/CustomListTypes'
import { ContactItem } from '../../components/ContactsTab/ContactsTabTypes'

/** Заглушка ожидания ответа сервера */
function randomDelay() {
	const delay = Math.random() * 1000
	return new Promise((resolve) => {
		setTimeout(resolve, delay)
	})
}

/** Получение контактных лиц */
async function getContacts(): Promise<FetchData<ContactItem>> {
	await randomDelay()
	const items: FetchItem<ContactItem>[] = [
		{
			id: 'test',
			data: {
				comment: new ItemDataString('sfsaf'),
				email: new ItemDataString('turbo69nice@gmail.com, glovindan@gmail.com'),
				fullname: new ItemDataString('sfsaf'),
				phone: new ItemDataString('sfsaf'),
				position: new ItemDataString('sfsaf'),
				type: new ItemDataString('sfsaf'),
			},
		},
		{
			id: 'test',
			data: {
				comment: new ItemDataString('sfsaf'),
				email: new ItemDataString('turbo69nice@gmail.com, glovindan@gmail.com'),
				fullname: new ItemDataString('sfsaf'),
				phone: new ItemDataString('sfsaf'),
				position: new ItemDataString('sfsaf'),
				type: new ItemDataString('sfsaf'),
			},
		},
		{
			id: 'test',
			data: {
				comment: new ItemDataString('sfsaf'),
				email: new ItemDataString('turbo69nice@gmail.com, glovindan@gmail.com'),
				fullname: new ItemDataString('sfsaf'),
				phone: new ItemDataString('sfsaf'),
				position: new ItemDataString('sfsaf'),
				type: new ItemDataString('sfsaf'),
			},
		},
		{
			id: 'test',
			data: {
				comment: new ItemDataString('sfsaf'),
				email: new ItemDataString('turbo69nice@gmail.com, glovindan@gmail.com'),
				fullname: new ItemDataString('sfsaf'),
				phone: new ItemDataString('sfsaf'),
				position: new ItemDataString('sfsaf'),
				type: new ItemDataString('sfsaf'),
			},
		},
	]

	return {
		items: items,
		hasMore: false,
	}
}

export default { getContacts }
