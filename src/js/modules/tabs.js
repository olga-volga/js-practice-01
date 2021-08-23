function tabs() {

	function bindTabs(parentSelector, tabSelector, linkSelector, contentSelector, activeClass) {
		const tabsParent = document.querySelector(parentSelector),
			  tabs = document.querySelectorAll(tabSelector),
			  tabsLink = document.querySelectorAll(linkSelector),
			  tabsContent = document.querySelectorAll(contentSelector);

		function hideTabContent() {
			tabsContent.forEach(item => {
				item.style.display = 'none';
			});

			tabsLink.forEach(item => {
				item.classList.remove(activeClass);
			});
		}

		function showTabContent(i = 0) {
			tabsContent[i].style.display = 'block';
			tabsLink[i].classList.add(activeClass);
		}

		hideTabContent();
		showTabContent();

		tabsParent.addEventListener('click', (e) => {
			console.log(e.target.parentNode);
			console.log(e.target);
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

	bindTabs('.glazing_slider', '.glazing_block', '.glazing_block a', '.glazing_content', 'active');
	bindTabs('.decoration_slider', '.no_click', '.no_click', '.decoration_content > div > div', 'after_click');

}

export default tabs;