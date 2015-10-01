import Ember from 'ember';

export default Ember.Controller.extend({
	isShowMenu: false,
	isShowClick: false,
	isShowApps: false,
	oldClass: '',

	init: function () {
		this._super();
	},

	countryChanged: function () {
		var _this = this;
		Ember.run.next(function () {
			if (_this.get('model.country')) {
				_this.set('oldClass', _this.get('model.country').get('name').toLowerCase());
				$('.pixel-map').addClass(_this.get('oldClass'));
			} else {
				$('.pixel-map').removeClass(_this.get('oldClass'));
			}
		});
	}.observes('model.country'),

	getCurrentURL: function () {
		this.set('isAdmin', false);
		this.set('isDataEntry', false);
		this.set('isHome', false);
		this.set('isData', true);

		if (RegExp('index').test(this.get('currentPath'))) {
			this.set('isHome', true);
		}
		
		if (RegExp('admin').test(this.get('currentPath'))) {
			this.set('isAdmin', true);
			this.set('isHome', false);
			this.set('isData', false);
		}		
		if (RegExp('data-entry').test(this.get('currentPath'))) {
			this.set('isDataEntry', true);
			this.set('isHome', false);
			this.set('isData', false);
		}		

	}.observes('currentPath'),

});
