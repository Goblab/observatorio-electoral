import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	polygon: DS.attr('string'),
	flag: DS.belongsTo('asset', {async: true}),
});