import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		return Ember.RSVP.hash({
      		reports: this.get('store').find('report', { published: true, sort: 'createdAt DESC'})
 		});	
	}
});
