import Ember from 'ember';

export default Ember.Controller.extend({

	isEjecutive: false,
	isLegislative: false,
	isReferendum: false,
	isBicameral: false,

	actions: {
		addFormula: function () {
			var newFormula = this.get('store').createRecord('formula', {election: this.get('model')});
			this.get('model').get('formulas').pushObject(newFormula);
		},

		saveFormula: function (formula) {
			console.log(formula);
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
		if (this.get('model.cameratype')) {
			if (this.get('model.cameratype.name').toLowerCase() === 'bicameral') {
				this.set('isBicameral', true);
			} else {
				this.set('isBicameral', false);
			}
		}
	}.observes('model.cameratype.name')
});
