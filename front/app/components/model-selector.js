import Ember from 'ember';

export default Ember.Component.extend({
	optionValuePath: 'content',
	optionLabelPath: 'content.name',
	countryFilter: null,

	data: Ember.computed('modelName', 'countryFilter', function () {
		if (this.get('countryFilter')) {
			return this.get('store').find(this.get('modelName'), {country: this.get('countryFilter')});
		} else {
			return this.get('store').find(this.get('modelName'));
		}
	}),
});
