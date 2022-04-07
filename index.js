function narcissistic(value) {
    // Initially need to make sure that the argument is greater than 9 before checking for narcassism, any values 9 and under are inherently narcassistic

    if(value > 9) {
        // Taking the value and converting it to a string so we can split the value and 
        const valueArray = value.toString().split('')
    }



    else{
        return true
    }
}

console.log(narcissistic(12345))