import closeModal from './closeModal';

function modal() {

	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
		const trigger = document.querySelectorAll(triggerSelector),
			  modal = document.querySelector(modalSelector),
			  close = document.querySelector(closeSelector),
			  windows = document.querySelectorAll('[data-modal]');

		function showModalByTime(selector, time) {
			setTimeout(function() {
				document.querySelector(selector).style.display = 'block';
				document.body.style.overflow = 'hidden';
			}, time);
		}

		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}

				windows.forEach(item => {
					closeModal(item);
				});

				modal.style.display = 'block';
				document.body.style.overflow = 'hidden';
			});
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal && closeClickOverlay) {
				windows.forEach(item => {
					closeModal(item);
				});

				closeModal(modal);
			}
		});

		close.addEventListener('click', () => {
			windows.forEach(item => {
				closeModal(item);
			});

			closeModal(modal);
		});
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');

	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

	//showModalByTime('.popup', 60000);

}

export default modal;
	