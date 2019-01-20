var assert = require('chai').assert;
var calc = require('./build/calculator.js');

describe("Calculator", function() {
    it("Sum should be 15", function() {
        assert.equal(calc.sum(5,10), 15);
    });
})