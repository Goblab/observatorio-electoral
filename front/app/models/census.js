import DS from 'ember-data';
var inflector = Ember.Inflector.inflector;
inflector.irregular("census", "censuses");

export default DS.Model.extend({
	name: DS.attr('string'),
	country: DS.belongsTo('country', {async: true}),
	year: DS.attr('string'),
	voters: DS.attr('number'),
	male: DS.attr('number'),
	female: DS.attr('number'),
	externals: DS.attr('number'),
});
