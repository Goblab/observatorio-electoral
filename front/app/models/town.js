import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  map: DS.attr('string'),
  lat: DS.attr('number'),
  long: DS.attr('number'),
  province: DS.belongsTo('province', {async: true}),
  color: DS.attr('string'),
  politicalPartyName: DS.attr('string'),
  gobernorName: DS.attr('string'),
  gobernorLastName: DS.attr('string'),  

  kml: function () {
  	if (this.get('map')) {
  		return '<?xml version="1.0" encoding="UTF-8"?><kml xmlns="http://www.opengis.net/kml/2.2"><Placemark>' + this.get('map') + '</Placemark></kml>';
  	} else {
  		return null;
  	}
  }.property('map'),
});
