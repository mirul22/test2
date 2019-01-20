class Calculator {
    construstor() {

    }
    sum (val1, val2) {
        return val1 + val2;
    }
    sub(val1, val2) {
        return val1 - val2;
    }
    mul(val1, val2) {
        return val1 * val2;
    }
    div(val1, val2) {
        return val1/val2;
    }
};

module.exports = Calculator;

/*
module.exports = {
    sum: function(val1, val2) {
        return va1 + val2;
    },
    sub: function(val1, val2) {
        return va1 - val2;
    },
    mul: function(val1, val2) {
        return va1 * val2;
    },
    div: function(val1, val2) {
        return va1/val2;
    }
}
*/