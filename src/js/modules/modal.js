import closeModal from './closeModal';

function modal() {

	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
		const trigger = document.querySelectorAll(triggerSelector),
			  modal = document.querySelector(modalSelector),
			  close = document.querySelector(closeSelector),
			  windows = document.querySelectorAll('[data-modal]');

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
				document.body.style.marginRight = `${calcScroll()}px`;
			});
			if (item.classList.contains('popup_calc_button') || item.classList.contains('popup_calc_profile_button')) {
				item.disabled = true;
			}
			
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

	function showModalByTime(selector, time) {
		setTimeout(function() {
			document.querySelector(selector).style.display = 'block';
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = `${calcScroll()}px`;
		}, time);
	}

	function calcScroll() {
		const div = document.createElement('div');

		div.style.cssText = 'width:50px;height:50px;overflow-y:scroll;visibilty:hidden;';
		document.body.append(div);

		let scrollWidth = div.offsetWidth - div.clientWidth;

		div.remove();

		return scrollWidth;
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');

	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

	showModalByTime('.popup', 10000);

}

export default modal;
	