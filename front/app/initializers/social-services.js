export default {
  name: 'social-services',
  initialize: function(container, application){
    var facebookPluginComponents = ['feed'];
    facebookPluginComponents.forEach(function(plugin) {
      application.inject('component:facebook-' + plugin, 'socialApiClient', 'service:facebook-api-client');
    });
    
    application.inject('component:twitter-share', 'socialApiClient', 'service:twitter-api-client');
  }
};
