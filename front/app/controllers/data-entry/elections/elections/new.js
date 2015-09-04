import Ember from 'ember';

export default Ember.Controller.extend({

	isEjecutive: false,
	isLegislative: false,
	isReferendum: false,
	isBicameral: false,

	actions: {
		addFormula: function () {
			var _this = this;
			var newFormula = this.get('store').createRecord('formula');
			if (this.get('isEjecutive') || this.get('isReferendum')) {
				this.get('store').find('province', {country: this.get('model').get('country').get('id')}).then(function (provinces) {
					provinces.forEach(function (province) {
						var newStatus = _this.get('store').createRecord('province-status', {
							province: province,
						});
						newFormula.get('provinceStatuses').pushObject(newStatus);	
					});
				});
			}
			this.get('model').get('formulas').pushObject(newFormula);
		},

		removeFormula: function (formula) {
			this.get('model').get('formulas').removeObject(formula);
		},

		removeCandidate: function (formula, candidate) {
			formula.get('candidates').removeObject(candidate);
		},

		removeAllProvince: function (formula, province) { 
			formula.get('provinceStatuses').clear();
		},

		removeProvincia: function (formula, province) {
			formula.get('provinceStatuses').removeObject(province);
		},		

		removeCandidateCharge: function (candidate) {
			candidate.set('charge', null);
		},		

		addProvince: function (formula) {
			var newStatus = this.get('store').createRecord('province-status', {isCustom: true});
			formula.get('provinceStatuses').pushObject(newStatus);			
		},

		addCandidate: function (formula) {
			var newStatus = this.get('store').createRecord('candicharge');
			formula.get('candidates').pushObject(newStatus);			
		},

		saveElection: function () {
			var route = this.get('target').get('router');	
			var election = this.get('model');
			var promises = Ember.A();
			var promises_formulas = Ember.A();
			

			election.get('formulas').forEach(function(item){
			    item.get('provinceStatuses').forEach(function (status) {
					promises.push(status.save());
			    });
			    item.get('candidates').forEach(function (candidate) {
					promises.push(candidate.save());
			    });			    
			});

			Ember.RSVP.Promise.all(promises).then(function(resolvedPromises){
				election.get('formulas').forEach(function(item){		    
				    promises_formulas.push(item.save());
				});
				Ember.RSVP.Promise.all(promises_formulas).then(function(resolvedPromises){
					election.save().then(function () {
				    	route.transitionTo('data-entry.elections.elections.index');
					});
				});
			});	      			
		},		
	},

	typeHandler: function () {
		this.set('isEjecutive', false);
		this.set('isLegislative', false);
		this.set('isReferendum', false);
		this.set('isDiputies', false);
		this.set('isSenators', false);
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
					var rg = /legislativas/i;
					if (rg.test(t)) {
						this.set('isLegislative', true);
						var rg2 = /diputado/i;
						var rg3 = /senador/i;

						if (rg2.test(t)) {
							this.set('isDiputies', true);
						} else {
							if (rg3.test(t)) {
								this.set('isSenators', true);
							}
						}
					} else {
						this.set('isReferendum', true);	
					}
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
