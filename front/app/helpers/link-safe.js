import Ember from 'ember';

import urlRegex from '../utils/url-regex';

export function linkSafe(textToLinkify) {
  textToLinkify = Ember.Handlebars.Utils.escapeExpression(textToLinkify);

  textToLinkify = textToLinkify.replace(urlRegex(), '');

  return new Ember.Handlebars.SafeString(textToLinkify);
}

export default Ember.HTMLBars.makeBoundHelper(linkSafe);
