const sanitizeHtml = require('sanitize-html');

function sanitizeText(input) {
  if (typeof input !== 'string') return input;
  return sanitizeHtml(input, { allowedTags: [], allowedAttributes: {} }).trim();
}

function sanitizeObject(payload) {
  if (Array.isArray(payload)) {
    return payload.map((item) => sanitizeObject(item));
  }

  if (payload && typeof payload === 'object') {
    return Object.fromEntries(
      Object.entries(payload).map(([key, value]) => [key, sanitizeObject(value)])
    );
  }

  return sanitizeText(payload);
}

module.exports = {
  sanitizeObject,
};
