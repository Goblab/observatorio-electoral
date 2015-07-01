import DS from 'ember-data';

export default DS.Model.extend({
  election: DS.belongsTo('election', {async: true}),
  politicalForce: DS.belongsTo('political-force', {async: true}),
  person: DS.belongsTo('person', {async: true}),
  charge: DS.belongsTo('charge', {async: true}),
  comment: DS.attr('string'),
});
