require('./mock.android.js');

const assert = require('assert');
const _ = require('lodash');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const helper = require('../lib/helper.js');

describe('Platform Android', function () {
  describe('Basic arguments', function () {
    it("empty", function () {
      const id = helper.either();
      expect(id).to.equal(null);
    });
  });
});
