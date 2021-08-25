import checkInputs from './checkInputs';

function calc(state) {
	const windowShape = document.querySelectorAll('.balcon_icons_img'),
		  windowWidth = document.querySelectorAll('#width'),
		  windowHeight = document.querySelectorAll('#height'),
		  windowType = document.querySelectorAll('#view_type'),
		  windowProfile = document.querySelectorAll('.checkbox');

	checkInputs('#width');
	checkInputs('#height');

	function addActionToElem(elem, event, property) {
		elem.forEach((item, i) => {
			item.addEventListener(event, () => {
				if (elem.length > 1) {
					state.property = i;
				} else {
					state.property = item.value;
				}
				
				console.log(state);
			});
		});
	}

	addActionToElem(windowShape, 'click', 'shape');
	addActionToElem(windowWidth, 'input', 'width');
	addActionToElem(windowHeight, 'input', 'height');
	addActionToElem(windowType, 'change', 'type');
	addActionToElem(windowProfile, 'change', 'profile');


	// Открываем окно "Рассчитать стоимость"
	/*const calcBtn = document.querySelectorAll('.popup_calc_btn'),
		  calcModal = document.querySelector('.popup_calc'),
		  calcClose = document.querySelector('.popup_calc_close');

	function showModal() {
		calcModal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		calcModal.style.display = '';
		document.body.style.overflow = '';
	}

	calcBtn.forEach(item => {
		item.addEventListener('click', showModal);
	});

	calcClose.addEventListener('click', closeModal);

	calcModal.addEventListener('click', (e) => {
		//console.log(e.target);
		if (e.target == calcModal) {
			closeModal();
		}
	});*/

	// Табы внутри окна "Рассчитать стоимость"
	/*const iconsParent = document.querySelector('.balcon_icons'),
		  icons = document.querySelectorAll('.balcon_icons_img'),
		  iconsContent = document.querySelectorAll('.popup_calc_content .big_img img');

	function removeActiveClass() {
		icons.forEach(item => {
			item.classList.remove('do_image_more');
		});

		iconsContent.forEach(item => {
			item.style.display = 'none';
		});
	}

	function addActiveClass(i = 0) {
		icons[i].classList.add('do_image_more');
		iconsContent[i].style.display = 'inline-block';
	}

	removeActiveClass();
	addActiveClass();

	iconsParent.addEventListener('click', (e) => {
		if (e.target && (e.target.classList.contains('balcon_icons_img') || e.target.parentNode.classList.contains('balcon_icons_img'))) {
			icons.forEach((item, i) => {
				if (e.target == item || e.target.parentNode == item) {
					removeActiveClass();
					addActiveClass(i);
				}
			});
		}
	});*/

	// Проверка ввода на цифры внутри окна "Рассчитать стоимость"
	/*const inputs = document.querySelectorAll('.popup_calc input');

	let width,
		height;

	inputs.forEach(item => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/\D/g, "");
		});
	});

	// Закрытие окна "Рассчитать стоимость"
	const nextBtn = document.querySelector('.popup_calc_button');*/

	//nextBtn.addEventListener('click', closeModal);
}

export default calc;