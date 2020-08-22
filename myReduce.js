const numbers = [1,2,3,4];

const sum = (previousValue, currentValue, currentIndex, array) => previousValue + currentValue;

const result = numbers.reduce(sum, 0);
console.log(result);

// creating my own reduce function
Array.prototype.myReduce = function(fn, initialValue) {
    let result = initialValue;
    for(i = 0; i< this.length; i++) {
        result = fn(result, this[i], i, this);
    }
    return result;
}

const result2 = numbers.myReduce(sum, 0);
console.log(result2);