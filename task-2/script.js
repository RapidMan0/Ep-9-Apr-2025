function isPrimeNumber(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return n > 1;// verify if n is greater than 1
}

console.log(isPrimeNumber(20));
console.log(isPrimeNumber(1));
console.log(isPrimeNumber(9));
console.log(isPrimeNumber(11));