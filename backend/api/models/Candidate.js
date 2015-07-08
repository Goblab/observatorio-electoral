/**
* Candidate.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: 'string',
    lastName: 'string',
    alias: 'string',
    history: 'string',

    picture: {
      model: 'asset',
    },

    charge: {
      model: 'charge',
    },    
  }
};