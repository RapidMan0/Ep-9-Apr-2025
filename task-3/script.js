function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {// length - 1 inseamna ultimul index
        reversed.push(arr[i]);
    }
    return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6]));
console.log(reverseArray(['a', 'b', 'c', 'd', 'e']));
