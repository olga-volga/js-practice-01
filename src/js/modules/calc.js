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
				switch(item.nodeName) {
					case 'SPAN':
						state[property] = i;
						break;
					case 'INPUT':
						if (item.getAttribute('type') === 'checkbox') {
							if (i === 0) {
								state[property] = 'cold';
							} else {
								state[property] = 'warm';
							}
							elem.forEach((box, j) => {
								box.checked = false;
								if (i === j) {
									box.checked = true;
									//document.querySelector('.popup_calc_profile_button').removeAttribute("disabled");
								}
							});
						} else {
							state[property] = item.value;
							/*elem.forEach(input => {
								if (input.value) {
									document.querySelector('.popup_calc_button').removeAttribute("disabled");
								}
							});*/
						}
						break;
					case 'SELECT':
						state[property] = item.value;
						break;
				}
				console.log(state);

				/*if (Object.entries(state).length == 3) {
					document.querySelector('.popup_calc_button').removeAttribute("disabled");
				} else if (Object.entries(state).length == 5) {
					document.querySelector('.popup_calc_profile_button').removeAttribute("disabled");
				}*/

				if (state.width && state.height) {
					document.querySelector('.popup_calc_button').disabled = false;
				}
				if (state.profile) {
					document.querySelector('.popup_calc_profile_button').disabled = false;
				}
			});
		});
	}

	addActionToElem(windowShape, 'click', 'shape');
	addActionToElem(windowWidth, 'input', 'width');
	addActionToElem(windowHeight, 'input', 'height');
	addActionToElem(windowType, 'change', 'type');
	addActionToElem(windowProfile, 'change', 'profile');

}

export default calc;