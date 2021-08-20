function modal() {
	const engineerBtn = document.querySelector('.popup_engineer_btn'),
		  closeBtn = document.querySelector('.popup_engineer .popup_close'),
		  modalEngineer = document.querySelector('.popup_engineer');

	function bindModal(trigger, modal, close) {
		trigger.addEventListener('click', (e) => {
			if (e.target) {
				e.preventDefault();
			}
			modal.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});

		function closeModal() {
			modal.style.display = '';
			document.body.style.overflow = '';
		}

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				closeModal();
			}
		});

		close.addEventListener('click', (e) => {
			closeModal();
		});
	}

	bindModal(engineerBtn, modalEngineer, closeBtn);
}

export default modal;
	