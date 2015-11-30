import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

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
    enabled: DS.attr('boolean'),
    participation: DS.belongsTo('election-participation', {async: true}),
    formulas: DS.hasMany('formula', {async: true}), 

    history: DS.attr('string'),

    banks: DS.attr('string'),
    
    unchecked: DS.attr('string'),
    uncheckedPercent: DS.attr('string'),

    electors: DS.attr('string'),
    electorsPercent: DS.attr('string'),    

    
    voters: DS.attr('string'),
    votersPercent: DS.attr('string'),
    
    blank: DS.attr('string'),
    blankPercent: DS.attr('string'),
    
    nulls: DS.attr('string'),
    nullsPercent: DS.attr('string'),
    
    //voters - Nulos
    valids: DS.attr('string'),
    validsPercent: DS.attr('string'),

    //Validos - Blancos
    positives: DS.attr('string'),
    positivesPercent: DS.attr('string'),

    //Electors - voters
    abstens: DS.attr('string'),
    abstensPercent: DS.attr('string'),

    externals: DS.attr('string'),
    externalsPercent: DS.attr('string'),


    fixDate: Ember.computed('date', function () {
        return moment(this.get('date')).add(4, 'h').format('LL');
    }),
    
    bestFormulas: Ember.computed('formulas.@each', function () {
        var bf = [];
        this.get('formulas').forEach(function (formula) {
            if (bf.length < 3) {
                bf.pushObject(formula);
            }
        });
        return bf;
    }),

    formulasSorted: Ember.computed('formulas.@each.votesCount', function () {
        return this.get('formulas').sortBy('votesCount').reverse();
    }),

    isEjecutive: Ember.computed('type.name', function () {
        return  this.get('type').get('name') === 'Ejecutiva';
    }),

    isLegislative: Ember.computed('type.name', function () {
        var rg = /legislativas/i;
        return rg.test(this.get('type').get('name')); 
    }),

    isReferendum: Ember.computed('type.name', function () {
        var rg = /refer/i;
        return rg.test(this.get('type').get('name')); 
    }),


    isSenators: Ember.computed('type.name', function () {
        var rg = /senador/i;
        return rg.test(this.get('type').get('name')); 
    }),

    isDiputies: Ember.computed('type.name', function () {
        var rg = /diputado/i;
        return rg.test(this.get('type').get('name')); 
    }),
});
