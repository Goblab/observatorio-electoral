import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend({
	model: function () {
		return Ember.RSVP.hash({
          lastElections: this.get('store').find('election', {sort: 'date DESC', limit: 6}),
     	});
	}
});
