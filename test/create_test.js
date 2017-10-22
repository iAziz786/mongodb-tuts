const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
  it('save a user', done => {
    const aziz = new User({ name: 'Aziz' });
    aziz.save().then(() => {
      assert(!aziz.isNew);
      done();
    });
  });
});
