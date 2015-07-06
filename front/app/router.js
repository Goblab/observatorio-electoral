import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("login");


  this.resource('admin', function () {
    this.route("users", function() {
      this.route("new");

      this.route("edit", {
        path: ":user_id/edit"
      });

      this.route("show", {
        path: ":user_id"
      });
    });
    this.route("roles", function() {
      this.route("new");
      this.route("edit", {
        path: ":role_id/edit"
      });
    });
  });

  this.route('data-entry', function() {
    this.route('elections', function() {
      this.route('political-forces', function() {
        this.route('new');
        this.route('edit', {
          path: ":political-force_id/edit",
        });
        this.route('show', {
          path: ":political-force_id/show",
        });
      });        
      this.route('charges', function() {
        this.route('new');
        this.route('edit', {
          path: ":charge_id/edit",
        });
        this.route('show', {
          path: ":charge_id/show",
        });
      });  
      this.route('countries', function() {
        this.route('new');
        this.route('edit', {
          path: ":country_id/edit",
        });
        this.route('show', {
          path: ":country_id/show",
        });
      });  

      this.route('elections', function() {
        this.route('new');
        this.route('edit', {
          path: ":election_id/edit",
        });
        this.route('show', {
          path: ":election_id/show",
        });
      });  


      this.route('election-types', function() {
        this.route('new');
        this.route('edit', {
          path: ":election_type_id/edit",
        });
        this.route('show', {
          path: ":election_type_id/show",
        });
      });  

      this.route('election-levels', function() {
        this.route('new');
        this.route('edit', {
          path: ":election_level_id/edit",
        });
        this.route('show', {
          path: ":election_level_id/show",
        });
      });  

      this.route('candidates', function() {
        this.route('new');
        this.route('edit', {
          path: ":candidate_id/edit",
        });
        this.route('show', {
          path: ":candidate_id/show",
        });
      });      
      this.route('people', function() {
        this.route('index');
        this.route('new');
        this.route('edit', {
          path: ":person_id/edit",
        });
        this.route('show', {
          path: ":person_id/show",
        });
      });
    });
  });

});

export default Router;