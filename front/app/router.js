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
    this.route('municipabilities', function() {
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