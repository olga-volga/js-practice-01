import "./slider";

import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import calc from './modules/calc';

window.addEventListener('DOMContentLoaded', function() {
	"use strict";

	modal();
	tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
	tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
	forms();
	calc();
});