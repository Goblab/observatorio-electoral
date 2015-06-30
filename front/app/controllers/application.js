import Ember from 'ember';

export default Ember.Controller.extend({
	isShowMenu: false,
	isShowClick: false,
	isShowApps: false,

	init: function () {
		this._super();
	},

	getCurrentURL: function () {
		this.set('isAdmin', false);
		this.set('isDataEntry', false);
		this.set('isHome', false);

		if (RegExp('index').test(this.get('currentPath'))) {
			this.set('isHome', true);
		}
		
		if (RegExp('admin').test(this.get('currentPath'))) {
			this.set('isAdmin', true);
			this.set('isHome', false);
		}		
		if (RegExp('data-entry').test(this.get('currentPath'))) {
			this.set('isDataEntry', true);
			this.set('isHome', false);
		}		

	}.observes('currentPath'),

});
