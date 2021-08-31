function timer() {
	const deadline = '2021-09-18';

	function countTimeRemain(endtime) {
		const today = new Date(),
		      time = Date.parse(deadline) - Date.parse(today),
		      seconds = Math.floor((time / 1000) % 60),
		      minutes = Math.floor((time / 1000 / 60) % 60),
		      hours = Math.floor((time / (1000 * 60 * 60)) % 24),
		      days = Math.floor(time / (1000 * 60 * 60 * 24));
	  
		return {
			'total': time,
		    'seconds': seconds,
		    'minutes': minutes,
		    'hours': hours,
		    'days': days
		};
	}

	function addZero(num) {
		if (num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	function setTimer(selector, endtime) {
		const timer = document.querySelector(selector),
			  days = document.querySelector('#days'),
			  hours = document.querySelector('#hours'),
			  minutes = document.querySelector('#minutes'),
			  seconds = document.querySelector('#seconds'),
			  timeInterval = setInterval(updateTimer, 1000);

		function updateTimer() {
			const time = countTimeRemain(endtime);

			days.innerHTML = addZero(time.days);
			hours.innerHTML = addZero(time.hours);
			minutes.innerHTML = addZero(time.minutes);
			seconds.innerHTML = addZero(time.seconds);

			if (time.total <= 0) {
				clearInterval(timeInterval);
			}
		}
		updateTimer();
	}

	setTimer('#timer', deadline);

}

export default timer;