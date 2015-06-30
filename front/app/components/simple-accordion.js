import Ember from 'ember';
import layout from '../templates/components/simple-accordion';

export default Ember.Component.extend({
  layout: layout,
  title: '',
  classNames: ["relative"],
  tagName: 'div',
  

  initAccordion: function() {
  	this.$('.js-accordion-trigger').bind('click', function(e){
	  jQuery(this).parent().find('.submenu').slideToggle('fast');
	  jQuery(this).parent().toggleClass('is-expanded');
	  e.preventDefault();
	});
  }.on('didInsertElement')

  
});
