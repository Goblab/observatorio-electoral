import Ember from 'ember';
import SaveModelMixin from '../../../mixins/users/save-model-mixin';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(SaveModelMixin, AuthenticatedRouteMixin, {
  setupController: function (controller, model) {
  	this._super(controller, model);
  	controller.set('roleList', this.store.find('role'));
  },	
});
