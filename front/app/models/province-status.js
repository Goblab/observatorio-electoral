import DS from 'ember-data';

export default DS.Model.extend({
	province: DS.belongsTo('province', {async: true}),
	votes: DS.hasOneFragment('vote', { defaultValue: { votes: 0, percent: 0, positions: 0 } }),
	positiveVotes: DS.hasOneFragment('vote', { defaultValue: { votes: 0, percent: 0, positions: 0 } }),
	negativeVotes: DS.hasOneFragment('vote', { defaultValue: { votes: 0, percent: 0, positions: 0 } }),
});
