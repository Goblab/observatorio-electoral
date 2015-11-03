import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'li',
	classNameBindings: ['isActive:active'],

	isActive: Ember.computed('country', 'selected', function () {
		if (!this.get('selected')) {
			return false;
		} else {
			return this.get('country').get('id') === this.get('selected').get('id');
		}
	}),
});
