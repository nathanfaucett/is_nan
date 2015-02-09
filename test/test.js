var assert = require("assert"),
    isNaN = require("../src/index");


describe("isNaN", function() {
    it("should return true when the value is NaN", function() {
        assert.equal(isNaN(null), false);
        assert.equal(isNaN(undefined), false);
        assert.equal(isNaN({}), false);
        assert.equal(isNaN([]), false);
        assert.equal(isNaN(""), false);
        assert.equal(isNaN(/./), false);
        assert.equal(isNaN(function noop() {}), false);
        assert.equal(isNaN(Infinity), false);
        assert.equal(isNaN(-Infinity), false);

        assert.equal(isNaN(NaN), true);
    });
});
