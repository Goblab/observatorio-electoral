import DS from 'ember-data';

export default DS.Model.extend({
    candidates: DS.hasMany('candicharge', {async: true}),

  	votes: DS.attr('string'),
  	percent: DS.attr('string'),
    politicalForce: DS.belongsTo('political-force', {async: true}),

  	//Legislative
  	assemblyman: DS.hasOneFragment('vote', { defaultValue: { votes: 0, percent: 0, positions: 0 } }),
  	diputies: DS.hasOneFragment('vote', { defaultValue: { votes: 0, percent: 0, positions: 0 } }),
  	senators: DS.hasOneFragment('vote', { defaultValue: { votes: 0, percent: 0, positions: 0 } }),

  	//Referendum
  	proposal: DS.attr('string'),
  	positiveVotes: DS.hasOneFragment('vote', { defaultValue: { votes: 0, percent: 0, positions: 0 } }),
  	negativeVotes: DS.hasOneFragment('vote', { defaultValue: { votes: 0, percent: 0, positions: 0 } }),

  	//Legislative
  	provinceStatuses: DS.hasMany('province-status', {async: true}),

});
