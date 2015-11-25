import Ember from 'ember';
import numeral from 'numeral';


export function formatNumber(params, hash) {
  let { format } = hash || {};
  let number = params;

  if (Ember.isArray(params)) {
    number = params[0];
  }

  if (typeof(number) === 'undefined') {
    number = null;
  }

  if (isNaN(number)) {
    number = null;
  }

  numeral.language('es');
  return numeral(number).format(format);
}

export default Ember.Handlebars.makeBoundHelper(formatNumber);
