function tabs(parentSelector, tabSelector, contentSelector, activeClass, display = 'block') {

	const tabsParent = document.querySelector(parentSelector),
		  tabs = document.querySelectorAll(tabSelector),
		  tabsContent = document.querySelectorAll(contentSelector);

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.style.display = 'none';
		});

		tabs.forEach(item => {
			item.classList.remove(activeClass);
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].style.display = display;
		tabsContent[i].classList.add('faded');
		tabs[i].classList.add(activeClass);
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (e) => {
		if (e.target && (e.target.classList.contains(tabSelector.replace(/\./, "")) || e.target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
			tabs.forEach((item, i) => {
				if (e.target == item || e.target.parentNode == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
}

export default tabs;