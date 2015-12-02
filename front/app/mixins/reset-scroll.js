import Ember from 'ember';

export default Ember.Mixin.create({
	activate: function() {
		this._super();
		$('body').animate({scrollTop: 0}, '900', 'swing');
	}
});
