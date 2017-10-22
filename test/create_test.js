const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
  it('save a user', () => {
    const aziz = new User({ name: 'Aziz' });
    aziz.save();
  });
});
