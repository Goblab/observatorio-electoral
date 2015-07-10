import DS from 'ember-data';

export default DS.Model.extend({
  	election: DS.belongsTo('election', { async: true}),
});
