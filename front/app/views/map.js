import Ember from 'ember';

export default EmberLeaflet.MapView.extend({
    zoom: 14,	

    childLayers: [
        EmberLeaflet.DefaultTileLayer.extend({
            tileUrl: '//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                //tileUrl: '//irreversible.cc:8080/osm_tiles/{s}/{z}/{x}/{y}.png',          
     		}),
    ],

    layersChanged: function () {
        if (this.get('groupLayer') && this._layer) {
        /*    this.get('layers').forEach(function (layer) {
                if (!this._layer.hasLayer(layer))
                    layer.addTo(this._layer);
            }, this);
        */
          this.get('groupLayer').addTo(this._layer);
          //this.get('groupLayer').getBounds().getCenter();
          //this._layer.fitBounds(this.get('groupLayer').getBounds());
        }
    }.observes('groupLayer'),

    didCreateLayer: function() {
      this._super();

      Ember.run.next(this, function () {
        this._layer.invalidateSize(true);
      });
      if (this.get('layers')) {
         this.get('layers').forEach(function (layer) {
          if (!this._layer.hasLayer(layer)) 
            this._layer.removeLayer(layer);
         }, this);
      }

      this.centerChanged();
      this.layersChanged();
    }, 

    centerChanged: function () {
        var _self = this;
        Ember.run.next(function () {
            if (_self.get('long') && _self.get('lat'))  {
        	   _self.set('center', L.latLng(_self.get('lat'), _self.get('long')));
            }
        	if (_self.get('location') && _self.get('location').get('long')) {
        		var m = L.marker([_self.get('location').get('lat'), _self.get('location').get('long')], {title: _self.get('location').get('label')}).addTo(_self._layer);
        	}
        })
    }.observes('lat', 'long', 'location'),
});
