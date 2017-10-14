'use strict';
var expect = require('chai').expect;
var getValueFunc = require('./../getValue.sample.js');
describe("when array passed have 2 or less elements", function () {
    it("should return 0", function () {
        var array = [1,2];
        var result = getValueFunc(array);
        expect(result).to.be.equal(0);
    });
});