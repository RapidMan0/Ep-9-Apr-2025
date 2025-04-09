function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const obj1 = { food: 'pizza', car: 'ford' };
const obj2 = { animal: 'dog', drink: 'water' };
console.log(mergeObjects(obj1, obj2));
