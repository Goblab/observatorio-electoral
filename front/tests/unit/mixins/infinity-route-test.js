import Ember from 'ember';
import InfinityRouteMixin from '../../../mixins/infinity-route';
import { module, test } from 'qunit';

module('InfinityRouteMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var InfinityRouteObject = Ember.Object.extend(InfinityRouteMixin);
  var subject = InfinityRouteObject.create();
  assert.ok(subject);
});
