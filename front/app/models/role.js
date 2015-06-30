import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),

  label: function () {
  	return this.get('name') + " (" + this.get('description') + ")";
  }.property('name', 'description'),


});
