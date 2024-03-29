function fizzbuzzIterator() {
    let defaultValue = 1n;

    return {
        next: function() {
            let value

            if (defaultValue % 3n === 0n && defaultValue % 5n === 0n) {
                value = "FizzBuzz"
            } else if (defaultValue % 3n === 0n) {
                value = "Fizz"
            } else if (defaultValue % 5n === 0n) {
                value = "Buzz"
            } else {
                value = defaultValue
            }

            defaultValue += 1n
            return {done: false, value}
        }
    };
}

const myFizzBazz = fizzbuzzIterator()

console.log(myFizzBazz.next().value)
console.log(myFizzBazz.next().value)
console.log(myFizzBazz.next().value)
console.log(myFizzBazz.next().value)
console.log(myFizzBazz.next().value)