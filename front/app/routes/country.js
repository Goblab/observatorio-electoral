import Ember from 'ember';
import ResetScroll from '../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {

	
	model: function (params) {
		$('body').animate({scrollTop: 0}, '500', 'swing');
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
		this.get('controller').get('model.types').setEach('isActive', false);
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
