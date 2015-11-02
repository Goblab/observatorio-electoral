import Ember from 'ember';

export default Ember.Route.extend({

	beforeModel: function () {
		if (!this.get('session.isAuthenticated')) {
			this.transitionTo('index');
		}
	},	
	model: function (params) {
		return Ember.RSVP.hash({
          candidate: this.get('store').find('candidate', params.candidate_id),
     	});
	}	
});
