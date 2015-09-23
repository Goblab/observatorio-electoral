import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		return Ember.RSVP.hash({
          candidate: this.get('store').find('candidate', params.candidate_id),
     	});
	}	
});
