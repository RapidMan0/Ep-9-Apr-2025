function countOccurrences(arr, value) {
    let count = 0;
    for (let item of arr) { //value este elementul aflat dupa array
        if (item === value) {
            count++;
        }
    }
    return count;
}

console.log(countOccurrences([1, 2, 3, 3, 3, 3], 3));
console.log(countOccurrences(['a', 'b', 'c', 'c'], 'c'));
