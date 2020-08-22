const numbers = [1,2,3,4,5,6,7,8,9];

const greatherThan3 = (value) => value > 3;

const numbersGreatherThan3 = numbers.filter(greatherThan3);
console.log(numbersGreatherThan3);


// creating my own filter function 
Array.prototype.myFilter = function(fn) {
    const newArray = [];
    for(i = 0; i < this.length; i++) {
        if(fn(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

const myNumbersGreatherThan3 = numbers.myFilter(greatherThan3);
console.log(myNumbersGreatherThan3);