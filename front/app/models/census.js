import DS from 'ember-data';

export default DS.Model.extend({
	country: DS.belongsTo('country', {async: true}),
	year: DS.attr('string'),
	enabled: DS.attr('number'),
	male: DS.attr('number'),
	female: DS.attr('number'),
	externals: DS.attr('number'),
});
