var tape = require("tape"),
    isNaN = require("..");


tape("isNaN(value) should return true when the value is NaN", function(assert) {
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

    assert.end();
});
