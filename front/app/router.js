import Ember from "ember";
import config from "./config/environment";
import googlePageview from './mixins/google-pageview';

var Router = Ember.Router.extend(googlePageview, {
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

    this.route('election-categories', function() {
      this.route('new');
      this.route('edit', {
        path: ":election_category_id/edit",
      });
      this.route('show', {
        path: ":election_category_id/show",
      });
    }); 

    this.route('political-alines', function() {
      this.route('new');
      this.route('edit', {
        path: ":political_aline_id/edit",
      });
      this.route('show', {
        path: ":political_aline_id/show",
      });
    }); 

    this.route('camera-types', function() {
      this.route('new');
      this.route('edit', {
        path: ":election_camera_type/edit",
      });
      this.route('show', {
        path: ":election_camera_type/show",
      });
    }); 
    this.route('election-participations', function() {
      this.route('new');
      this.route('edit', {
        path: ":election_participation_id/edit",
      });
      this.route('show', {
        path: ":election_participation_id/show",
      });
    });  
    this.route('election-instances', function() {
      this.route('new');
      this.route('edit', {
        path: ":election_instance_id/edit",
      });
      this.route('show', {
        path: ":election_instance_id/show",
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
      this.route('provinces', function() {
        this.route('new');
        this.route('edit', {
          path: ":province_id/edit",
        });
        this.route('show', {
          path: ":province_id/show",
        });
      });  

      this.route('reports', function() {
        this.route('new');
        this.route('edit', {
          path: ":report_id/edit",
        });
        this.route('show', {
          path: ":report_id/show",
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
      this.route('censuses', function() {
        this.route('new');
        this.route('edit', {
          path: ":census_id/edit",
        });
        this.route('show', {
          path: ":census_id/show",
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

  this.route('country', {
    path: "country/:country_id",
  });
  this.route('election', {
    path: "election/:election_id",
  });
  this.route('candidate', {
   path: "candidate/:candidate_id",
  });
  this.route('about', {});
  this.route('contact', {});
  this.route('reports', function() {
      this.route('show', {
        path: ":report_id/show",
      });
  });
  this.route('electoral-system');
  this.route('agenda');
});

export default Router;