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

    electors: DS.attr('string'),
    voters: DS.attr('string'),
    blank: DS.attr('string'),
    nulls: DS.attr('string'),
    
    //voters - Nulos
    valids: Ember.computed('voters', 'nulls', function () {
        return parseInt(this.get('voters')) - parseInt(this.get('nulls'));
    }),
    //Validos - Blancos
    positives: Ember.computed('valids', 'nulls', function () {
        return parseInt(this.get('valids')) - parseInt(this.get('blank'));
    }),
    //Electors - voters
    abstens: Ember.computed('electors', 'voters', function () {
        return parseInt(this.get('electors')) - parseInt(this.get('voters'));
    }),

    externals: DS.attr('string'),
    


});
