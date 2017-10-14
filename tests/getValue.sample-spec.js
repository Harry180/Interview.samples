'use strict';
var expect = require('chai').expect;
var getValueFunc = require('./../getValue.sample.js');
describe("when array passed have 2 or less elements", function () {
    it("should return 0", function () {
        var array = [1,2];
        var result = getValueFunc(array);
        expect(result).to.be.equal(0);
    });

    it("should be different than 0", function () {
        var array = [1,2,3];
        var result = getValueFunc(array);
        expect(result).to.not.be.equal(0);
    });
});

describe("should return second smallest value when more than 2 elements in array", function(){
    it("should pass", function (){
        var array = [32, 99, 1, 5, 10, 30, 2];
        var actual = getValueFunc(array);
        var expected = array.sort(function(a, b) { return a-b;})[1];
        expect(actual).to.be.equal(expected);
    });
});