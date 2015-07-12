import Ember from 'ember';

export default Ember.Component.extend({
	optionValuePath: 'content',
	optionLabelPath: 'content.name',
	
	data: Ember.computed('modelName', 'value', function () {
		return this.get('store').find(this.get('modelName'));
	}),
});
