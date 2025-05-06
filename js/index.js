const inputElems = document.querySelectorAll('input');
const submitBtn = document.querySelector('.form__btn');

if (localStorage.getItem('userData')) {

	const userDataS = JSON.parse(localStorage.getItem('userData'))

	inputElems.forEach(elem => {
		elem.value = userDataS[elem.name]
	})
}

submitBtn.addEventListener('click', e => {
	e.preventDefault();

	const userData = {};

	inputElems.forEach(elem => {
		if (elem.value !== '') {
			userData[elem.name] = elem.value;
		}
	})

	localStorage.setItem('userData', JSON.stringify(userData))
});
