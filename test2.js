var assert = require("chai").assert;

describe("Simple assert", function() {
    it("foo !== bar", function() {
        assert('foo' !== 'bar', 'foo is not a bar');
    });
});