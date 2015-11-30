import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import InfinityRoute from "../../../../mixins/infinity-route";


export default Ember.Route.extend(InfinityRoute, AuthenticatedRouteMixin, {
  _listName: 'model',

  model: function() {
      return this.infinityModel("election", { perPage: 25, startingPage: 1, sort: 'date DESC'});
  },

  actions: {
    remove: function(model) {
      if(confirm('Are you sure?')) {
        model.destroyRecord();
      }
    }, 
    search: function () {
      this.set('_listName', 'model.content');

      var filter = { perPage: 10, startingPage: 1, sort: 'date DESC'};

      if (this.get('controller.country')) {
        filter.country = this.get('controller.country.id'); 
      }

      if (this.get('controller.type')) {
        filter.type = this.get('controller.type.id');   
      }

      this.get('controller').set('model', this.infinityModel("election", filter))
    },     	
  }
  
});

