function pluck(array, key) {
    return array.map(obj => obj[key]);
}

const Objects = [
    { name: 'Andrew', age: 20 },
    { name: 'Sanya', age: 21 },
    { name: 'Vlad', age: 20 }
];
console.log (pluck(Objects, 'age'));