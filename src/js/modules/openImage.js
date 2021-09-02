function openImage() {
	const parentImg = document.querySelector('.works'),
		  modalImg = document.createElement('div'),
		  imgBig = document.createElement('img');

	modalImg.classList.add('popup');
	modalImg.style.cssText = 'justify-content:center;align-items:center;';
	parentImg.append(modalImg);

	imgBig.style.cssText = 'width:auto;height:85vh';
	modalImg.append(imgBig);

	parentImg.addEventListener('click', (e) => {
		e.preventDefault();

		if (e.target && e.target.classList.contains('preview')) {
			modalImg.style.display = 'flex';
			document.body.style.overflow = 'hidden';

			const path = e.target.parentNode.getAttribute('href');
			imgBig.setAttribute('src', path);
		}

		if (e.target && e.target.matches('div.popup')) {
			modalImg.style.display = 'none';
			document.body.style.overflow = '';
		}
	});
}

export default openImage;