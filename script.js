
var outputDiv = document.querySelector(".container");


for (var i = 1; i <= 100; i++) {
  // Controlla se il numero è sia multiplo di 3 che di 5
  if (i % 3 === 0 && i % 5 === 0) {
    outputDiv.innerHTML += "FizzBuzz";
  }
  // Controlla se il numero è multiplo di 3
  else if (i % 3 === 0) {
    outputDiv.innerHTML += "Fizz";
  }
  // Controlla se il numero è multiplo di 5
  else if (i % 5 === 0) {
    outputDiv.innerHTML += "Buzz";
  }
  // Altrimenti stampa il numero
  else {
    outputDiv.innerHTML += i;
  }


}