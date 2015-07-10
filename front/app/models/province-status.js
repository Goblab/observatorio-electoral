import DS from 'ember-data';

export default DS.Model.extend({
	formula: DS.belongsTo('formula', {async: true}),
	province: DS.belongsTo('province', {async: true}),
	votes: DS.hasOneFragment('vote', { defaultValue: { votes: 0, percent: 0, positions: 0 } }),
});
