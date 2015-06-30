import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import { CanMixin } from 'ember-can';

export default Ember.Route.extend(AuthenticatedRouteMixin, CanMixin, {

});
