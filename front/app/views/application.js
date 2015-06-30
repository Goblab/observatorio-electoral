import Ember from 'ember';

export default Ember.View.extend({
	classNames: ['full-height'],


	parentHasClass: function (parent, className) {
		if (parent.hasClass(className)) {
			return true;
		} else {
			var p;
			if (parent[0]) {
				p = $( parent[0].parentNode );
			}
			if (p) {
				return this.parentHasClass(p, className);
			} else {
				return false;
			}
		}
	},

	parentIsA: function (target) {
		if (target.is( "a" )) {
			return true;
		} else {
			var p;
			if (target[0]) {
				p = $( target[0].parentNode );
			}
			if (p) {
				return this.parentIsA(p);
			} else {
				return false;
			}
		}
	},

	isIdA: function (target) {
		if (target.is( "a" )) {
			return target[0].id;
		} else {
			var p;
			if (target[0]) {
				p = $( target[0].parentNode );
			}
			if (p) {
				return this.isIdA(p);
			} else {
				return null;
			}
		}
	},	

	handleHeaderClick: function () {
		var self = this;
		if (this.get('controller.isShowApps')) {
			Ember.run.next(function () {
				self.$().click(function (event) {
					var target = $( event.target );
					if (!self.parentHasClass(target, 'change-app-container')) {
						if (!self.parentHasClass(target, 'close-button')) {
							self.set('controller.isShowApps', false);
						} 
					} else {
						if (target.is( "a" ) || self.parentIsA(target)) {
							self.set('controller.isShowApps', false);
						}
					}
				});
			});
		} else {
			this.$().off('click');
		}
	}.observes('controller.isShowApps'),

	handleClick: function () {
		var self = this;
		if (this.get('controller.isShowMenu')) {
			Ember.run.next(function () {
				self.$().click(function (event) {
					var target = $( event.target );
					if (!self.parentHasClass(target, 'menu-wrap')) {
						if (!self.parentHasClass(target, 'menu-button')) {
							self.set('controller.isShowMenu', false);
						} 
					} else {
						if (target.is( "a" ) || self.parentIsA(target)) {
							self.set('controller.isShowMenu', false);
						}
					}
				});
			})
		} else {
			this.$().off('click');
		}
	}.observes('controller.isShowMenu'),
	

	actions:{
		toggleMenu: function () {
			this.toggleProperty('controller.isShowMenu');
			this.toggleProperty('controller.isShowClick');
		},

		togglePublish: function () {
			this.toggleProperty('controller.isShowPublish');
			this.toggleProperty('controller.isHiddenPublish');
		},

		toggleExpand: function () {
			this.toggleProperty('controller.isSExpand');
		},

		toggleApps: function () {
			this.toggleProperty('controller.isShowApps');
		},
	},
});