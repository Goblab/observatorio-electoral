import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		return Ember.RSVP.hash({
		  country: this.get('store').find('country', params.country_id),
          elections: this.get('store').find('election', {country: params.country_id})
     	});
	}	
});
