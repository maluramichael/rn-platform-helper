require('./mock.ios.js');

const assert = require('assert');
const _      = require('lodash');
const chai   = require('chai');
const should = chai.should();
const expect = chai.expect;
const helper = require('../lib/helper.js');

describe('Platform iOS', function () {
    it('should be ios', function () {
        expect(helper.isIos).to.equal(true);
        expect(helper.isAndroid).to.equal(false);
    });
    describe('either', function () {
        it('can handle nulls', function () {
            expect(helper.either(null, null)).to.equal(null);
        });
        it('can handle undefined', function () {
            expect(helper.either()).to.equal(null);
        });
        it('can handle numbers', function () {
            expect(helper.either(1, 2)).to.equal(1);
        });
        it('can handle one number', function () {
            expect(helper.either(2)).to.equal(2);
        });
        it('can handle strings', function () {
            expect(helper.either('hello', 'world')).to.equal('hello');
        });
        it('can handle arrays', function () {
            helper.either([1, 2, 3], [4, 5, 6]).should.be.deep.equal([1, 2, 3]);
        });
    });
    describe('invoke either', function () {
        it('can handle two functions which return no value', function () {
            const first = ()=> {
            };

            const second = ()=> {
            };

            expect(helper.invokeEither(first, second)).to.equal(undefined);
        });
        it('can handle two functions which return a value', function () {
            const first = ()=> {
                return 100;
            };

            const second = ()=> {
                return 200;
            };

            expect(helper.invokeEither(first, second)).to.equal(100);
        });
        it('can handle two closures which return a', function () {
            const area= x=> ()=> {
                return x*x;
            };

            const cube= x=> ()=> {
                return x*x*x;
            };

            expect(helper.invokeEither(area(10), cube(5))).to.equal(100);
        });
        it('can handle nulls', function () {
            expect(helper.invokeEither(null, null)).to.equal(false);
        });
        it('can handle undefined', function () {
            expect(helper.invokeEither()).to.equal(false);
        });
        it('can handle numbers', function () {
            expect(helper.invokeEither(1, 2)).to.equal(false);
        });
        it('can handle one number', function () {
            expect(helper.invokeEither(2)).to.equal(false);
        });
        it('can handle strings', function () {
            expect(helper.invokeEither('hello', 'world')).to.equal(false);
        });
        it('can handle arrays', function () {
            helper.invokeEither([1, 2, 3], [4, 5, 6]).should.be.deep.equal(false);
        });
    });
});
