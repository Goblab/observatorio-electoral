import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function (controller, model) {
		this._super(controller, model);
		this.controllerFor('application').set('model.country', null);
	},	
});
