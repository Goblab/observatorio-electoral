/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'irreversible',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      emberDataSails:  {
        // default is to use same host and port as the ember app:
        host: 'http://oblat.am',
        // this is the default and is the path to the sails io script:
        scriptPath: '/js/dependencies/sails.io.js'
      }   
    },

    pace: {
      color: 'white',
      theme: 'minimal',
      catchupTime: 50,
      initialRate: .01,
      minTime: 100,
      ghostTime: 50,
      maxProgressPerFrame: 20,
      easeFactor: 1.25,
      startOnPageLoad: true,
      restartOnPushState: true,
      restartOnRequestAfter: 500,
      target: 'body',
      elements: {
        checkInterval: 100,
        selectors: ['body', '.ember-view']
      },
      eventLag: {
        minSamples: 10,
        sampleCount: 3,
        lagThreshold: 3
      },
      ajax: {
        trackMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
        trackWebSockets: true,
        ignoreURLs: []
      }
    },

    
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['adapter'] = {
      'host': 'http://oblat.am',
      'namespace': 'api',
      'fileUrl': 'http://oblat.am/',
      'upload': 'http://oblat.am/upload-file',      
    };


    ENV['contentSecurityPolicy'] = {
        'default-src': "* 'unsafe-inline' 'unsafe-eval'",
        'script-src': "* 'unsafe-inline' 'unsafe-eval'",
        'font-src': "* 'unsafe-inline' 'unsafe-eval'",
        'connect-src': "*",
        'img-src': "* 'unsafe-inline' 'unsafe-eval'",
        'style-src': "* 'unsafe-inline' 'unsafe-eval'",
        'media-src': "* 'unsafe-inline' 'unsafe-eval'",
        'report-uri': 'http://irreversible.cc'
    };

    ENV['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:token',
      crossOriginWhitelist: ['http://oblat.am'],

      session: 'session:custom',
    };

    // Sailsjs JSON Web Token (JWT) Configuration
    ENV['simple-auth-token'] = {
      serverTokenEndpoint: 'http://oblat.am/auth/login',
      authorizationPrefix: null,
      tokenPropertyName: 'access_token',
      authorizationHeaderName: 'access_token',
      identificationField: 'email',
    };   

    ENV['ember-can'] = {
      inject: {
        session: 'session:custom'
      }
    };    
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

    ENV['adapter'] = {
      'host': 'http://oblat.am',
      'namespace': 'api',
      'fileUrl': 'http://oblat.am/',
      'upload': 'http://oblat.am/upload-file',      
    };


    ENV['contentSecurityPolicy'] = {
        'default-src': "* 'unsafe-inline' 'unsafe-eval'",
        'script-src': "* 'unsafe-inline' 'unsafe-eval'",
        'font-src': "* 'unsafe-inline' 'unsafe-eval'",
        'connect-src': "*",
        'img-src': "* 'unsafe-inline' 'unsafe-eval'",
        'style-src': "* 'unsafe-inline' 'unsafe-eval'",
        'media-src': "* 'unsafe-inline' 'unsafe-eval'",
        'report-uri': 'http://irreversible.cc'
    };

    ENV['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:token',
      crossOriginWhitelist: ['http://oblat.am'],

      session: 'session:custom',
    };

    // Sailsjs JSON Web Token (JWT) Configuration
    ENV['simple-auth-token'] = {
      serverTokenEndpoint: 'http://oblat.am/auth/login',
      authorizationPrefix: null,
      tokenPropertyName: 'access_token',
      authorizationHeaderName: 'access_token',
      identificationField: 'email',
    };   

    ENV['ember-can'] = {
      inject: {
        session: 'session:custom'
      }
    };  

    ENV.googleAnalytics = {
      webPropertyId: 'UA-76112745-1'
    };
  }

  return ENV;
};
