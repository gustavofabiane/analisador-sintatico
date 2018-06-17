const EPSILON = '&';
const END_OF_STACK = '$';

const TERMINALS = ['a', 'b', 'c', 'd'];
const NON_TERMINALS = ['S', 'A', 'B', 'C'];

var grammar = {
    'S': ['cBb', 'CB'],
    'A': ['bBc', 'a'],
    'B': ['dA', 'aC', EPSILON],
    'C': ['bA', 'aBb']
};

var parsingTable = {
    'S': {
        'a': ['C', 'B'],
        'b': ['C', 'B'],
        'c': ['c', 'B', 'b']
    },
    'A': {
        'a': ['a'],
        'b': ['b', 'B', 'c']
    },
    'B': {
        'a': ['a', 'C'],
        'b': [EPSILON],
        'c': [EPSILON],
        'd': ['d', 'A'],
        '$': [EPSILON]
    },
    'C': {
        'a': ['a', 'B', 'b'],
        'b': ['b', 'A']
    }
};