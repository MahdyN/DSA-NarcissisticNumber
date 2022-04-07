function narcissistic(value) {
    // Initially need to make sure that the argument is greater than 9 before checking for narcassism, any values 9 and under are inherently narcassistic
    if(value > 9) {
        // Taking the value and converting it to a string, we then split that string into an ordered list of substrings and these substrings are returned in an array, such that each digit of the number is an element in the array for manipulation
        const valueArray = value.toString().split('')
    
        // We then use the map function on this array in order to manipulate each digit of the value, each number is converted back to an integer and exponentiated by the length of the initial argument value in order to set it up for the next step of checking for narcissism
        const expArray = valueArray.map((number) => {
            return (parseInt(number, 10))**(valueArray.length)
        })

        // We then use the reduce method to take every number in the array and add them to get a singular sum
        let sum = expArray.reduce((total,num) => {
            return total + num
        })

        // We finally check whether the sum of these exponentiated values and the initial argument value are equal
        if(sum === value){
            return true
        }

        else{
            return false
        }
    }

    else{
        return true
    }
}

console.log(narcissistic(5))
console.log(narcissistic(153))
console.log(narcissistic(12345))
console.log(narcissistic(9474))


