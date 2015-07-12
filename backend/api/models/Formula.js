/**
* Formula.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    politicalForce: {
      model: 'politicalForce',
    },

    candidates: {
      collection: 'candicharge'
    },

  	votes: 'string',
  	percent: 'string',
 
  	assemblyman: 'json',
  	diputies: 'json',
  	senators: 'json',

  	proposal: 'string',
  	positiveVotes: 'json',
  	negativeVotes: 'json',

  	provinceStatuses: {
  		collection: 'provinceStatus',
  	},
  }
};

