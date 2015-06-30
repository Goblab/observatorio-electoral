import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  lastName: DS.attr('string'),
  fullName: DS.attr('string'),

  fullNameProperty: function () {
  	if (this.get('name') && this.get('lastName'))
  		return this.get('lastName') + " " + this.get('name');
  	else
  		return this.get('fullName');
  }.property('name', 'lastName', 'fullName'),
});
