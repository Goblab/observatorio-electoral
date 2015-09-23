/**
* Election.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },

    date: {
    	type: 'datetime'
    },  
    
    country: {
      model: 'country',
    },  

    type: {
    	model: 'electionType'
    },

    level: {
      model: 'electionLevel'
    },
    
    instance: {
      model: 'electionInstance'
    },

    category: {
      model: 'electionCategory'
    }, 

    vinculated: 'boolean',
    
    enabled: 'boolean',

    participation: {
      model: 'electionParticipation'
    },
    
    cameraType: {
      model: 'cameraType'
    },

    formulas: {
      collection: 'formula',
    } ,

    voters: 'string',
    votersPercent: 'string',
    electors: 'string',
    electorsPercent: 'string',
    blank: 'string',
    blankPercent: 'string',
    nulls: 'string',
    nullsPercent: 'string',
    valids: 'string',
    validsPercent: 'string',
    recurred: 'string',
    recurredPercent: 'string',
    abstens: 'string',
    abstensPercent: 'string', 
    externals: 'string',
    externalsPercent: 'string', 
    positives: 'string',
    positivesPercent: 'string',       

    history: 'string',
    banks: 'string',
    unchecked: 'string',
    uncheckedPercent: 'string',

  }
};