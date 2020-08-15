// Input Edit
if (document.querySelector('.js-input-edit')) inputEdit();



function inputEdit() {
	const parents = document.querySelectorAll('.form-row');

	parents.forEach((parent) => {
		let input = parent.querySelector('input');
		let button = parent.querySelector('.js-input-edit');

		button.addEventListener('click', () => {
			input.removeAttribute('readonly');
			input.classList.add('can-edit');
			input.focus();
			button.remove();
		});
	});
}

