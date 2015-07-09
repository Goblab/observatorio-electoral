/**
* Census.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    country: {
      model: 'country',
    }, 
    name: 'string',
    year: 'string',
    voters: 'string',
    male: 'string',
    female: 'string',
    externals: 'string'
  }
};

