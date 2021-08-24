function forms() {
	const form = document.querySelectorAll('form'),
		  input = document.querySelectorAll('input'),
		  phoneInputs = document.querySelectorAll('input[name="user_phone"]');

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

	phoneInputs.forEach(item => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/\D/g, "");
		});
	});

	form.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.appendChild(statusMessage);

			const formData = new FormData(item);

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
					setTimeout(() => {
						statusMessage.remove();
					}, 5000);
				})
		});
	});
}

export default forms;