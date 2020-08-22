const supermarket = [
    {name: 'Nacional', owner: 'Wallmart'},
    {name: 'Bigmax', owner: 'Big'},
    {name: 'Casa do frango', owner: 'Big'},
    {name: 'Rede Vivo', owner: 'Rede Super'},
    {name: 'Big', owner: 'Wallmart'}
]

const names = supermarket.map(supermarket => supermarket.name);
console.log(names);


// creating my own map function
Array.prototype.myMap = function myMap(fn) {
    const newArray = [];
    for(i = 0; i < this.length; i++) {
        newArray.push(fn(this[i], i, this)); 
    }
    return newArray;
}

const names2 = supermarket.myMap(supermarket => supermarket.name);
console.log(names2);

