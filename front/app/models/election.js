import DS from 'ember-data';

export default DS.Model.extend({
  	name: DS.attr('string'),
  	date: DS.attr('string'),
  	country: DS.belongsTo('country', {async: true}),
    type: DS.belongsTo('election-type', {async: true}),
    level: DS.belongsTo('election-level', {async: true}),
    instance: DS.belongsTo('election-instance', {async: true}),
    category: DS.belongsTo('election-category', {async: true}),
    cameraType: DS.belongsTo('camera-type', {async: true}),
    vinculated: DS.attr('boolean'),
    participation: DS.belongsTo('election-participation', {async: true}),
    formulas: DS.hasMany('formula', {async: true}), 
    voters: DS.attr('string'),
    votersPercent: DS.attr('string'),
    electors: DS.attr('string'),
    electorsPercent: DS.attr('string'),
    blank: DS.attr('string'),
    blankPercent: DS.attr('string'),
    nulls: DS.attr('string'),
    nullsPercent: DS.attr('string'),
    valids: DS.attr('string'),
    validsPercent: DS.attr('string'), 
    recurredPercent: DS.attr('string'), 
    recurred: DS.attr('string'), 
});
