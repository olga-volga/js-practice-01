function modal() {
	const headerBtn = document.querySelector('.popup_engineer_btn'),
		  callBtn = document.querySelectorAll('.phone_link'),
		  closeBtn = document.querySelectorAll('.popup_close'),
		  modalEngineer = document.querySelector('.popup_engineer'),
		  modalCall = document.querySelector('.popup');

	function openModal(classSelector) {
		classSelector.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	function closeModal(classSelector) {
		classSelector.style.display = '';
		document.body.style.overflow = '';
	}

	headerBtn.addEventListener('click', () => {
		openModal(modalEngineer);
	});

	closeBtn.forEach(item => {
		item.addEventListener('click', () => {
			if (modalEngineer.style.display === 'block') {
				closeModal(modalEngineer);
			} else {
				closeModal(modalCall);
			}
		});
	});

	callBtn.forEach(item => {
		item.addEventListener('click', () => {
			openModal(modalCall);
		});
	});
}

export default modal;
	