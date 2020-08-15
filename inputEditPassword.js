// Input Edit Password
if (document.querySelector('.js-input-wrap')) inputEditPassword();

function inputEditPassword() {
	const parents = document.querySelectorAll('.js-input-wrap');
	parents.forEach((parent) => {
		let input = parent.querySelector('input');
		let icon = parent.querySelector('svg');

		input.addEventListener('focus', () => {
			icon.style.display = 'none';
        });
        
		input.addEventListener('blur', () => {
			if (!input.value) {
				icon.style.display = 'block';
			}
		});
	});
}
