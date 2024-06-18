/** Маршрутизация по SPA */
export const redirectSPA = (href: string) => {
	let element = document.createElement('a')
	element.href = href
	element.style.display = 'none'
	document.querySelector('body')?.appendChild(element)
	element.click()
	element.remove()
}

/** Запись идентификатора обращения в localStorage
 * @param id Идентификатор обращения
 */
async function setRequest(id: string) {
	localStorage.setItem('currentRequestId', id)
	localStorage.setItem('currentContractorId', '')
	localStorage.setItem('currentContractorPhone', '')
}

export default {
	redirectSPA,
	setRequest,
}
