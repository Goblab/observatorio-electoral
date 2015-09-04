import Ember from 'ember';
import layout from '../templates/components/model-finder';

export default Ember.Component.extend({
  layout: layout,
  query: '',
  queryContent: null,
  modelName: 'user',
  list: null,
  selectedLabel: null,
  labelPath: 'name',
  countryFilter: null,
  showPath: null,

  queryChanged: function () {
  	if (this.get('query').length >= 3) {
      if (this.get('countryFilter')) {
  		  this.set('queryContent', this.get('store').find(this.get('modelName'), {country: this.get('countryFilter'), query: this.get('query')}));
      } else {
        this.set('queryContent', this.get('store').find(this.get('modelName'), {query: this.get('query')}));
      }
    }
  	else {
  		this.set('queryContent', []);
    }
  }.observes('query'),


  listLabel: function () {
    if (this.get('showPath')) {
      return this.get('list').get(this.get('showPath'));
    } else {
      return this.get('list.name');
    }
  }.property('list', 'list.name'),

  actions: {
  	add: function (model) {
      if (this.get('sigle')) {
        this.set('selectedLabel', model.get(this.get('labelPath')));
  			this.set('list', model);
  		} else {
    		this.sendAction('model-selected', model)
    		this.set('queryContent', []);
      }
  	},
    delete: function () {
      this.set('list', null);
      this.set('selectedLabel', null);
    }
  }  
});
