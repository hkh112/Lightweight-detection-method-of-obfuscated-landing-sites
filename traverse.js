var estraverse = require('estraverse');

// This tree contains a user-defined `TestExpression` node.
var tree = {
    type: 'TestExpression',

    // This 'argument' is the property containing the other **node**.
    argument: {
        type: 'Literal',
        value: 20
    },

    // This 'extended' is the property not containing the other **node**.
    extended: true
};

/*
estraverse.traverse(tree, {
    enter: function (node) { },

    // Skip the `argument` property of each node
    fallback: function(node) {
        return Object.keys(node).filter(function(key) {
            return key !== 'argument';
        });
    }
});
*/