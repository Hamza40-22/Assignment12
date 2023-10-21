

//question # 1
// function displayDateTime() {
//     const dateTimeElement = document.getElementById('datetime');
//     const now = new Date();
//     const dateTimeString = now.toLocaleString(); 
//     dateTimeElement.textContent = dateTimeString; 
//   }
//   displayDateTime();





// ***************************************************     ***************************************************
// question #2


// function displayGreeting(firstName, lastName) {
//     const greeting = `Hello, ${firstName} ${lastName}!`;
//     console.log(greeting);
//   }
  
//   const firstName = prompt("Enter your first name:");
//   const lastName = prompt("Enter your last name:");
  
//   displayGreeting(firstName, lastName);



// ***************************************************     ***************************************************
// question #3
// function squarecat(integer) {
//     const result = integer * integer;
//     console.log(`The square of ${integer} is: ${result}`);
//   }
  
 
//   squarecat(3);





// ***************************************************     ***************************************************
// question #6


// function catFactorial(number) {
//     if (number < 0) {
//       console.log("Factorial is not defined for negative numbers.");
//       return;
//     }
  
//     let factorial = 1;
  
//     for (let i = 1; i <= number; i++) {
//       factorial *= i;
//     }
  
//     console.log(`The factorial of ${number} is: ${factorial}`);
//   }
  

//   const userInput = parseInt(prompt("Enter a factorial:"));
  
//   catFactorial(userInput);
  
  

// ***************************************************     ***************************************************
// question #   8



// function computeHypotenuse(a, b) {
//     if (a >= 0 && b >= 0) {
//       const hypotenuse = Math.sqrt(a ** 2 + b ** 2);
//       console.log(`The hypotenuse is: ${hypotenuse}`);
//     } else {
//       console.log("Both 'a' and 'b' must be non-negative numbers.");
//     }
//   }
  

//   const sideA = parseFloat(prompt("Enter the length of side 'a':"));
//   const sideB = parseFloat(prompt("Enter the length of side 'b':"));
  
//   computeHypotenuse(sideA, sideB);
  
  