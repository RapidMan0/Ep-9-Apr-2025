function objectToArray(obj) {
    return Object.entries(obj);//converteaza obiectul in array impreuna cu cheile si valorile
}
console.log(objectToArray({ name: 'Bob', age: 30 }));
console.log(objectToArray({ city: 'New York', country: 'USA' }));
