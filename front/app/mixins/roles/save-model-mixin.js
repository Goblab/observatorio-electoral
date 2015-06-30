import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    save: function() {
      var route = this;
      this.currentModel.save().then(function() {
        var rs = route.routeName.split('.');
        var returnRoute = '';
        for (var i = 0; i < (rs.length - 1); i++) {
          returnRoute += rs[i] + ".";
        }
        returnRoute += 'index';
        route.transitionTo(returnRoute);
      }, function() {
        console.log('Failed to save the model');
      });
    }
  },
  deactivate: function() {
    this.currentModel.rollback();
  }
});
