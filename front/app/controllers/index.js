import Ember from 'ember';

export default Ember.ArrayController.extend({
	actions: {
		addFavorite: function (entry) {
			this.get('session.user').then(function (user) {
				user.get('favorites').addObject(entry);
				user.save();
			})
		},
		removeFavorite: function (entry) {
			this.get('session.user').then(function (user) {
				user.get('favorites').removeObject(entry);
				user.save();
			})
		},
	}	
});
