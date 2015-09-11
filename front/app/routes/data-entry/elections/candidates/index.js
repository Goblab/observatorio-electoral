import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import InfinityRoute from "../../../../mixins/infinity-route";


export default Ember.Route.extend(InfinityRoute, AuthenticatedRouteMixin, {
  _listName: 'model',

  model: function() {
      return this.infinityModel("candidate", { perPage: 10, startingPage: 1});
  },

  actions: {
    search: function () {
      this.set('_listName', 'model.content');

      var filter = { perPage: 10, startingPage: 1};

      if (this.get('controller.country')) {
        filter.country = this.get('controller.country.id'); 
      }
      this.get('controller').set('model', this.infinityModel("candidate", filter))
    }
  }  
}); 

