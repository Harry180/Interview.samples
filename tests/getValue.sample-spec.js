'use strict';
var expect = require('chai').expect;
describe("getValue", function () {
    it("should exist", function() {
        var getValueFunc = require('./../getValue.sample.js');
        expect(getValueFunc).to.not.be.undefined;
    });
});