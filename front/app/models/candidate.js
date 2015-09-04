import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  lastName: DS.attr('string'),	
  alias: DS.attr('string'),	
  history: DS.attr('string'),
  picture: DS.belongsTo('asset', {async: true}),
  country: DS.belongsTo('country', {async: true}),

  fullName: Ember.computed('name', 'lastName', function () {
  	return this.get('lastName') + ', ' + this.get('name');
  })
});
