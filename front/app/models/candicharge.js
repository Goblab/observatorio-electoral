import DS from 'ember-data';

export default DS.Model.extend({
	candidate: DS.belongsTo('candidate', {async: true}),
	charge: DS.belongsTo('charge', {async: true}),
});