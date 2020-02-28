function range(num) {
    var numbers = [];
    for (i=1; i<=num; i++) {
      numbers.push(i);
    }
    return numbers;
  }
  
  var doubledNumbers = range(5000).map(function(number) {
    if ((number%2 === 0) && (number%3 === 0)) {
    return number = "fizzBuzz";
    } else if (number%2 === 0) {
    return number = "fizz";
    } else if (number%3 === 0) {
    return number = "buzz";
    } else 
      return number;
  });
  
  console.log(doubledNumbers);
  
  