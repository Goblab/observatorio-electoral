import DS from 'ember-data';

export default DS.Model.extend({
  	name: DS.attr('string'),
  	date: DS.attr('string'),
  	country: DS.belongsTo('country', {async: true}),
    type: DS.belongsTo('election-type', {async: true}),
    level: DS.belongsTo('election-level', {async: true}),
    instance: DS.belongsTo('election-instance', {async: true}),
    category: DS.belongsTo('election-category', {async: true}),
    cameratype: DS.belongsTo('camera-type', {async: true}),
    vinculated: DS.attr('boolean'),
    participation: DS.belongsTo('election-participation', {async: true}),
});
