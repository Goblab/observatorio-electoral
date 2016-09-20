import Ember from 'ember';

export default Ember.Controller.extend({
	isShowMenu: false,
	isShowClick: false,
	isShowApps: false,
	isShowCountry: false,
	oldClass: '',

	init: function () {
		this._super();
	},

	countryChanged: function () {
		var _this = this;
		Ember.run.next(function () {
			$('.pixel-map').removeClass().addClass('pixel-map');
			if (_this.get('model.country')) {
				$('.pixel-map').addClass(_this.get('model.country').get('className'));
			}
		});
	}.observes('model.country'),

	getCurrentURL: function () {
		this.set('isAdmin', false);
		this.set('isDataEntry', false);
		this.set('isHome', false);
		this.set('isData', true);
		this.set('isReport', false);
		this.set('isContact', false);
		this.set('isAbout', false);

		if (RegExp('index').test(this.get('currentPath')) && !RegExp('reports').test(this.get('currentPath'))) {
			this.set('isHome', true);
		}

		if (RegExp('admin').test(this.get('currentPath'))) {
			this.set('isAdmin', true);
			this.set('isHome', false);
			this.set('isData', false);
			this.set('isReport', false);
			this.set('isContact', false);
			this.set('isAbout', false);
		}		
		if (RegExp('data-entry').test(this.get('currentPath'))) {
			this.set('isDataEntry', true);
			this.set('isHome', false);
			this.set('isData', false);
			this.set('isReport', false);
			this.set('isContact', false);
			this.set('isAbout', false);
		}	

		if (RegExp('reports').test(this.get('currentPath'))) {
			this.set('isReport', true);
			this.set('isDataEntry', false);
			this.set('isHome', false);
			this.set('isData', false);
			this.set('isContact', false);
			this.set('isAbout', false);
		}	

		if (RegExp('electoral-system').test(this.get('currentPath'))) {
			this.set('isReport', true);
			this.set('isDataEntry', false);
			this.set('isHome', false);
			this.set('isData', false);
			this.set('isContact', false);
			this.set('isAbout', false);
		}

		if (RegExp('agenda').test(this.get('currentPath'))) {
			this.set('isReport', true);
			this.set('isDataEntry', false);
			this.set('isHome', false);
			this.set('isData', false);
			this.set('isContact', false);
			this.set('isAbout', false);
		}

		if (RegExp('contact').test(this.get('currentPath'))) {
			this.set('isReport', true);
			this.set('isDataEntry', false);
			this.set('isHome', false);
			this.set('isData', false);
		}	

		if (RegExp('about').test(this.get('currentPath'))) {
			this.set('isReport', true);
			this.set('isDataEntry', false);
			this.set('isHome', false);
			this.set('isData', false);
		}		

	}.observes('currentPath'),

});
