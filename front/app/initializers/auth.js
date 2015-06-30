import Ember from 'ember';
import SimpleAuthSession from 'simple-auth/session';

var CustomSession = SimpleAuthSession.extend({
    user: function() {
      var userId = this.get('user_id');
      if (!Ember.isEmpty(userId)) {
        return this.container.lookup('store:main').find('user', userId);
      }
    }.property('user_id')
});

export function initialize( container ) {
  container.register('session:custom', CustomSession);
}


export default {
  name: 'auth',
  before: 'simple-auth',
  initialize: initialize
};
