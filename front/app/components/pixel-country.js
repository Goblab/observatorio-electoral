import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'g',
	className: 'country',

	click: function () {
		this.container.lookup("router:main").transitionTo('country', this.get('id'));
	},
});
