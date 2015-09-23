import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		return Ember.RSVP.hash({
          election: this.get('store').find('election', params.election_id),
     	});
	}	
});
