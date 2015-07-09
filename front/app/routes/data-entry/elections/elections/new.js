import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import SaveModelMixin from '../../../../mixins/roles/save-model-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, SaveModelMixin, {
	vinculateList: [
		Ember.Object.create({
			id: true,
			label: 'Si'
		}),
		Ember.Object.create({
			id: false,
			label: 'No'
		})		
	],	
	model: function() {
		return this.store.createRecord('election');
	},		
});

