import DS from 'ember-data';

export default DS.Model.extend({
  	election: DS.belongsTo('election', { async: true}),
  	president: DS.attr(''),
  	vicepresident: DS.attr(''),
  	votes: DS.attr('string'),
  	percent: DS.attr('string'),

  	//Legislative
  	assemblyman: DS.attr(''),
  	diputies: DS.attr(''),
  	senators: DS.attr(''),

  	//Referendum
  	proposal: DS.attr('string'),
});
