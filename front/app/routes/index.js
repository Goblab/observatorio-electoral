import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend({
	enter: function () {
		this._super();
		this.controllerFor('application').set('model.country', null);
	},

	model: function () {
		return Ember.RSVP.hash({
          reports: this.get('store').find('report', { published: true, sort: 'createdAt DESC'}),
     	});
	},	
});
