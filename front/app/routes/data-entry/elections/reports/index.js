import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import InfinityRoute from "../../../../mixins/infinity-route";


export default Ember.Route.extend(InfinityRoute, AuthenticatedRouteMixin, {
  _listName: 'model',

  model: function() {
      return this.infinityModel("report", { perPage: 10, startingPage: 1});
  },

  actions: {
    remove: function(model) {
      if(confirm('Are you sure?')) {
        model.destroyRecord();
      }
    },
    search: function () {
      this.set('_listName', 'model.content');

      var filter = { perPage: 10, startingPage: 1};
      this.get('controller').set('model', this.infinityModel("report", filter))
    }    
  }
});

