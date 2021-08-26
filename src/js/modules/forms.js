import checkInputs from './checkInputs';
import closeModal from './closeModal';

function forms(state) {
	const form = document.querySelectorAll('form'),
		  input = document.querySelectorAll('input'),
		  windows = document.querySelectorAll('[data-modal]');

	const message = {
		load: 'Идет отправка...',
		success: 'Отправлено!',
		fail: 'Ошибка!'
	};

	const postData = async (url, data) => {
		document.querySelector('.status').textContent = message.load;

		let result = await fetch(url, {
			method: "POST",
			body: data
		});

		return await result.text();
	};

	const clearInput = () => {
		input.forEach(item => {
			item.value = '';
		});
	};

	const clearState = () => {
		for (let key in state) {
			delete state[key];
		}
	};

	checkInputs('input[name="user_phone"]');

	form.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.appendChild(statusMessage);

			const formData = new FormData(item);

			if (item.getAttribute('data-calc') === 'end') {
				for (let key in state) {
					formData.append(key, state[key]);
				}
			}

			postData('assets/server.php', formData)
				.then(res => {
					console.log(res);
					statusMessage.textContent = message.success;
				})
				.catch(() => {
					statusMessage.textContent = message.fail;
				})
				.finally(() => {
					clearInput();
					clearState();
					const fin = new Promise(resolve => {
						setTimeout(() => {
							statusMessage.remove();
					    	resolve();
						}, 5000);
					})
					.then(() => {
						windows.forEach(item => {
							closeModal(item);
						});
					})
				})
		});
	});
}

export default forms;