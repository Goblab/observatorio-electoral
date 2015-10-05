import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		return Ember.RSVP.hash({
          election: this.get('store').find('election', params.election_id),
     	});
	},

	setupController: function (controller, model) {
		this._super(controller, model);
		console.log(model);
		this.controllerFor('application').set('model.country', model.election.get('country'));
	},
});
