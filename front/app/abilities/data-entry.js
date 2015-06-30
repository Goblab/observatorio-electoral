import { Ability } from 'ember-can';

export default Ability.extend({
  canView: function() {
  	return true;
  	/*
    if (!this.get('session.user_id')){
      return false;    
    } else {
      return this.get('session.user.canViewDataEntry');
    }
    */
  }.property('session.user.canViewDataEntry'),
});