function openImage() {
	const parentImg = document.querySelector('.works > .container > .row'),
		  images = document.querySelectorAll('.preview');

	let modalImg = document.createElement('div'),
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

			images.forEach((item, i) => {
				if (e.target == item) {
					imgBig.setAttribute('src', `assets/img/our_works/big_img/${i+1}.png`);
				}
			});
		}
		console.log(e.target);
	});

	modalImg.addEventListener('click', (e) => {
		if (e.target == modalImg) {
			modalImg.style.display = 'none';
			document.body.style.overflow = '';
		}
	});
}

export default openImage;