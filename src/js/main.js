import "./slider";

import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import calc from './modules/calc';

window.addEventListener('DOMContentLoaded', function() {
	"use strict";

	let modalState = {};

	modal();
	tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
	tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
	tabs('.balcon_icons', '.balcon_icons_img', '.popup_calc_content .big_img img', 'do_image_more', 'inline-block');
	forms();
	calc(modalState);
});