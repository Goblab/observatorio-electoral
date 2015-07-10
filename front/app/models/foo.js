import DS from 'ember-data';

export default DS.ModelFragment.extend({
  someAttr: DS.attr('string'),
  anotherAttr: DS.attr('boolean')
});