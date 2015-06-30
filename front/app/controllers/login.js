import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:token',
  errorMessage: '',
  errorDescription: '',

  	actions: {
      authenticate: function() {
        var _this = this;
        this._super().then(null, function(error) {
    			var message = error.error;
          if (message) {
      			message = message.replace('Invalid email or password', 'Contraseña incorrecta');
      			message = message.replace('user not found', 'Usuario no encontrado');
          }
    			_this.set('errorMessage', message);
        });
      }
    }	
});