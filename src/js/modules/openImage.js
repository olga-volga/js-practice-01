function openImage() {
	const parentImg = document.querySelector('.works'),
		  modalImg = document.createElement('div'),
		  imgBig = document.createElement('img');

	modalImg.classList.add('popupImg');
	modalImg.style.cssText = 'display: none;position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 9;background-color: rgba(0, 0, 0, 0.5);justify-content:center;align-items:center;';
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
			imgBig.classList.add('grow');
		}

		if (e.target && e.target.matches('div.popupImg')) {
			modalImg.style.display = 'none';
			document.body.style.overflow = '';
		}
	});
}

export default openImage;