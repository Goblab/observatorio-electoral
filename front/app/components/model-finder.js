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

  queryChanged: function () {
  	if (this.get('query').length >= 3)
  		this.set('queryContent', this.get('store').find(this.get('modelName'), {query: this.get('query')}));
  	else
  		this.set('queryContent', []);
  }.observes('query'),

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
