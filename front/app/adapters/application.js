import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  namespace: config.adapter.namespace,
  coalesceFindRequests: true,
  host: config.adapter.host,
});