let _ = {
    /* _.clamp(-10, -5, 5);
    // => -5
 
_   .clamp(10, -5, 5);
     // => 5 */
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    /* _.inRange(3, 2, 4);
    // => true
    
    _.inRange(4, 8);
    // => true
    
    _.inRange(4, 2);
    // => false
    
    _.inRange(2, 2);
    // => false
    
    _.inRange(1.2, 2);
    // => true
    
    _.inRange(5.2, 4);
    // => false
    
    _.inRange(-3, -2, -6);
    // => true */
    inRange(num, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        if (start > end) {
            let temp = end;
            end = start;
            start = temp;
        }
        if (num < start || num >= end) {
            return false;
        }
        else if (num >= start && num < end) {
            return true;
        }
    },
    /* _.words('fred, barney, & pebbles');
// => ['fred', 'barney', 'pebbles']
 
_.words('fred, barney, & pebbles', /[^, ]+/g);
// => ['fred', 'barney', '&', 'pebbles'] */
    words(string) {
        let words = string.split(' ');
        return words;
    },
    /* _.pad('abc', 8);
    // => '  abc   '
    
    _.pad('abc', 8, '_-');
    // => '_-abc_-_'
    
    _.pad('abc', 3);
    // => 'abc' */
    pad(string, length) {
        if (string.length >= length) {
            return string;
        };
        const startPaddingLength = Math.floor((length - string.length) / 2);
        const endPaddingLength = length - string.length - startPaddingLength;
        const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;
    },
    /* var object = { 'a': { 'b': 2 } };
    var other = _.create({ 'a': _.create({ 'b': 2 }) });
    
    _.has(object, 'a');
    // => true
    
    _.has(object, 'a.b');
    // => true
    
    _.has(object, ['a', 'b']);
    // => true
    
    _.has(other, 'a');
    // => false */
    has(object, key) {
        const hasValue = object[key];
        if (hasValue != undefined) {
            return true;
        } return false;
    },
    /* var object = { 'a': 1, 'b': 2, 'c': 1 };
 
    _.invert(object);
    // => { '1': 'c', '2': 'b' } */
    invert(object) {
        let invertedObject = {};
        for (let key in object) {
            const originalValue = object[key];
            invertedObject = { originalValue: key }
        }
        return invertedObject;
    },
    /* var users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
    };
    
    _.findKey(users, function(o) { return o.age < 40; });
    // => 'barney' (iteration order is not guaranteed)
    
    // The `_.matches` iteratee shorthand.
    _.findKey(users, { 'age': 1, 'active': true });
    // => 'pebbles'
    
    // The `_.matchesProperty` iteratee shorthand.
    _.findKey(users, ['active', false]);
    // => 'fred'
    
    // The `_.property` iteratee shorthand.
    _.findKey(users, 'active');
    // => 'barney' */
    findKey(object, predicate) {
        for (let key in object) {
            let value = object[key];
            let predicateReturnValue = predicate(value);
            if (predicateReturnValue) {
                return key;
            };
        };
        undefined
        return undefined;
    },
    /* .drop([1, 2, 3]);
    // => [2, 3]
    
    _.drop([1, 2, 3], 2);
    // => [3]
    
    _.drop([1, 2, 3], 5);
    // => []
    
    _.drop([1, 2, 3], 0);
    // => [1, 2, 3] */
    drop(array, n) {
        if (n === undefined) {
            n = 1;
        }
        let droppedArray = array.slice(n, array.length);
        return droppedArray;
    },
    /* var users = [
     { 'user': 'barney',  'active': false },
     { 'user': 'fred',    'active': false },
     { 'user': 'pebbles', 'active': true }
    ];
    
    _.dropWhile(users, function(o) { return !o.active; });
    // => objects for ['pebbles']
    
    // The `_.matches` iteratee shorthand.
    _.dropWhile(users, { 'user': 'barney', 'active': false });
    // => objects for ['fred', 'pebbles']
    
    // The `_.matchesProperty` iteratee shorthand.
    _.dropWhile(users, ['active', false]);
    // => objects for ['pebbles']
    
    // The `_.property` iteratee shorthand.
    _.dropWhile(users, 'active');
    // => objects for ['barney', 'fred', 'pebbles'] */
    dropWhile(array, predicate) {
        const cb = (element, index) => {
            return !predicate(element, index, array);
        };
        let dropNumber = array.findIndex(cb);
        let droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },
    /* _.chunk(['a', 'b', 'c', 'd'], 2);
    // => [['a', 'b'], ['c', 'd']]
    
    _.chunk(['a', 'b', 'c', 'd'], 3);
    // => [['a', 'b', 'c'], ['d']] */
    chunk(array, size = 1) {
        let arrayChunks = [];
        for (let i = 0; i < array.length; i += size) {
            let arrayChunk = array.slice(i, i + size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }
};

//nuevo comentario




// Do not write or modify code below this line.
module.exports = _;