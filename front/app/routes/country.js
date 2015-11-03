import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function () {
		if (!this.get('session.isAuthenticated')) {
			this.transitionTo('index');
		}
	},	
	
	model: function (params) {
		return Ember.RSVP.hash({
		  country: this.get('store').find('country', params.country_id),
          types: this.get('store').find('election-type'),
          elections: this.get('store').find('election', {country:  params.country_id, enabled: true, sort: 'date DESC'})
     	});
	},

	
	/*afterModel: function (model) {
		var t = model.types.objectAt(0);
		t.set('isActive', true);
		model.elections = this.get('store').find('election', {country: model.country.get('id'), enabled: true, type: t.get('id')});
	},
	*/

	setupController: function (controller, model) {
		this._super(controller, model);
		controller.set('allElections', true);
		this.controllerFor('application').set('model.country', model.country);
	},

	actions: {
	    search: function (type, country) {
	      var filter = { country: country.get('id'), enabled: true, sort: 'date DESC'};

	      this.get('controller').get('model.types').setEach('isActive', false);
	      this.get('controller').set('allElections', false);
	      if (this.get('controller.country')) {
	      	if (type) {
	    	   filter.type = type.get('id'); 
	  	       type.set('isActive', true);
	      	} else {
	      		this.get('controller').set('allElections', true);
	      	}
	      }
	      this.get('controller').set('model.elections', this.get('store').find('election', filter))
	    }		
	}	
});
