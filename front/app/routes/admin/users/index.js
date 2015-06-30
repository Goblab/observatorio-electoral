import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import InfinityRoute from "../../../mixins/infinity-route";
export default Ember.Route.extend(InfinityRoute, AuthenticatedRouteMixin, {
  _listName: 'model',

  actions: {
    remove: function(model) {
      if(confirm('Are you sure?')) {
        model.destroyRecord();
      }
    }
  },

  model: function() {
    return this.infinityModel("user", {perPage: 10, startingPage: 1});
  }
});
