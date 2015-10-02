import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	polygon: DS.attr('string'),
	flag: DS.belongsTo('asset', {async: true}),

	_clearText: function (text) {
	    var acentos = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç";
	    var original = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc";
	    for (var i=0; i<acentos.length; i++) {
	        text = text.replace(acentos.charAt(i), original.charAt(i));
	    }
	    return text;
	},

	className: Ember.computed('name', function () {
		if (this.get('name')) {
			return this._clearText(this.get('name').toLowerCase());
		} else {
			return '';
		}
	}),

	componentName: Ember.computed('name', function () {
		if (this.get('name')) {
			return 'pixel-' + this._clearText(this.get('name').toLowerCase());
		} else {
			return 'pixel-country';
		}
	}),

	properties: Ember.computed('name', 'id', function () {
		return { name: this.get('name'), id: this.get('id')};
	}),
});
