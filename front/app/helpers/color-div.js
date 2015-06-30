import Ember from 'ember';

export function colorDiv(color) {
	return '<div style="background-color: ' + color + ';"></div>';
}

export default Ember.HTMLBars.makeBoundHelper(colorDiv);
