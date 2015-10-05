import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend({
	enter: function () {
		this._super();
		this.controllerFor('application').set('model.country', null);
	}
});
