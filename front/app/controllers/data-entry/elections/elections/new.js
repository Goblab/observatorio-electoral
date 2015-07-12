import Ember from 'ember';

export default Ember.Controller.extend({

	isEjecutive: false,
	isLegislative: false,
	isReferendum: false,
	isBicameral: false,

	actions: {
		addFormula: function () {
			var newFormula = this.get('store').createRecord('formula');
			this.get('model').get('formulas').pushObject(newFormula);
		},

		saveFormula: function (formula) {
			formula.save();
		},

		addProvince: function (formula) {
			var newStatus = this.get('store').createRecord('province-status');
			formula.get('provinceStatuses').pushObject(newStatus);			
		},
		addCandidate: function (formula) {
			var newStatus = this.get('store').createRecord('candicharge');
			formula.get('candidates').pushObject(newStatus);			
		},

		saveElection: function () {
	      var route = this.get('target').get('router');
	      console.log(route);	
	      this.get('model').save().then(function() {
	        route.transitionTo('data-entry.elections.elections.index');
	      }, function() {
	        console.log('Failed to save the model');
	      });			
		},		
	},

	typeHandler: function () {
		this.set('isEjecutive', false);
		this.set('isLegislative', false);
		this.set('isReferendum', false);
		if (this.get('model.type') && this.get('model.type').get('name')) {
			var t = this.get('model.type').get('name').toLowerCase();
			switch(t) {
				case 'ejecutiva':
					this.set('isEjecutive', true);
					break;
				case 'legislativas':
					this.set('isLegislative', true);
					break;
				default:
					this.set('isReferendum', true);
					break;
			}
		}
	}.observes('model.type.name'),

	bicameralChange: function () {
		if (this.get('model.cameraType') && this.get('model.cameraType.name')) {	
			if (this.get('model.cameraType.name').toLowerCase() === 'bicameral') {
				this.set('isBicameral', true);
			} else {
				this.set('isBicameral', false);
			}
		}
	}.observes('model.cameraType.name')
});
