import Ember from 'ember';

export default Ember.Controller.extend({
	isLegislative: false,
	isReferendum: false,
	isEjecutive: false,


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
