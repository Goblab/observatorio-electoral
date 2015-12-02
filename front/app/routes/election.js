import Ember from 'ember';
import ResetScroll from '../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
	
	
	model: function (params) {
		return Ember.RSVP.hash({
          election: this.get('store').find('election', params.election_id),
     	});
	},

	setupController: function (controller, model) {
		this._super(controller, model);
		this.controllerFor('application').set('model.country', model.election.get('country'));
	},
});
