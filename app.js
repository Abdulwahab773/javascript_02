// CHAPTER N0. 4  "VARIABLE NAMES: LEGAL & ILLEGAL"

// Question 1:


// let a, b, c;



// Question 2:


// Legal Variable Names:

// let age;
// let myNAme;
// let  AGE;
// let _source;
// let smit$;



// Illegal Variable Names:


// let a ge;
// let pizza@;
// let var;
// let if;
// let class;



// Question 3:


// document.write("<h1>A) Rules for naming JS variables: </h1><br/>")

// document.write("<p>B) Variable names can only contain Letters, Numbers,$ and _ .For example $my_1stVariable </p>")

// document.write("<pre>C) Variables must begin with a $, _ OR letter.   For example $Name, _Name or Name </pre>")

// document.write("<pre>D) Variable names are case sensitive.</pre>")

// document.write("<pre>E) Variable names should not be JS Keywords.</pre>")






// CHAPTER N0. 5   "MATH EXPRESSIONS"


// Question 1:


// let a = 5;
// let b = 3;
// let result = a + b;

// document.write(result)




// Question 2:


// let a = 3;
// let b = 9;
// let result = a - b;

// console.log(result)



// let a = 3;
// let b = 9;
// let result = a * b;

// console.log(result)



// let a = 100;
// let b = 10;
// let result = a / b;

// console.log(result);





// Question 3:

// let price;
// document.write(`<h2> Value after variable declaration is:${ price }`);

// let ourPrice = 5;
// document.write(`<h2>Initial Value:${ourPrice}`);
// document.write(`<h2>Value after increment is: ${++ourPrice}`);

// ourPrice += 7;
// document.write(`<h2>Value after addition is: ${ourPrice}`);

// ourPrice--;
// document.write(`<h2>Value after decrement is: ${ourPrice}`);

// let remainder = ourPrice % 3;

// document.write(`<h2>The remainder is : ${remainder}`);



// Question 4:

// let ticketPrice = 600;

// document.write(`<h2> Total cost to buy 5 tickets to a movie is: ${ticketPrice*5}`);



// Question 5:

// let number = 5;

// document.write(`<h2>Table Of 5</h2>`)

// document.write(`${number} x 1 = ${number * 1}<br>`);
// document.write(`${number} x 2 = ${number * 2}<br>`);
// document.write(`${number} x 3 = ${number * 3}<br>`);
// document.write(`${number} x 4 = ${number * 4}<br>`);
// document.write(`${number} x 5 = ${number * 5}<br>`);
// document.write(`${number} x 6 = ${number * 6}<br>`);
// document.write(`${number} x 7 = ${number * 7}<br>`);
// document.write(`${number} x 8 = ${number * 8}<br>`);
// document.write(`${number} x 9 = ${number * 9}<br>`);
// document.write(`${number} x 10 = ${number * 10}<br>`);




// Question 6:


// let celsius = 25;
// let fahrenheit = (celsius * 9/5) +32;



// document.write(`${celsius}\u00B0C is ${fahrenheit}\u00B0F<br>`);

// let fahrenheitTemp = 70;
// let celsiusTemp = (fahrenheitTemp -32) *5/9;

// document.write(`${fahrenheitTemp}\u00B0F is ${celsiusTemp.toFixed(2)}\u00B0C`);



// Question 7:


// let capPrice = 300;
// let bagprice = 600;
// let capsQuantity = 5;
// let bagsQuantity = 7;
// let DC = 100;
// let sum = capPrice * capsQuantity + bagprice * bagsQuantity + DC;

// document.write(`<h2> Shopping Cart:</h2>`)

// document.write(`Price of cap = ${capPrice}<br>`);
// document.write(`Ordered quantity of caps = ${capsQuantity}<br>`);
// document.write(`Price of bag = ${bagprice}<br>`);
// document.write(`Ordered quantity of bags = ${bagsQuantity}<br>`);
// document.write(`DC = ${DC}<br><br><br>`);


// document.write(`Total Cost of your order = ${sum}`);




// Question 8:

// let totalMarks = 550;
// let marksObtained = 374;
// let sum = marksObtained / totalMarks * 100;

// document.write(`<h1> Marks Sheet:</h1><br>`);

// document.write(`Total Marks: ${totalMarks}<br>`);
// document.write(`Marks Obtained: ${marksObtained}<br>`);
// document.write(`Percentage: ` ,sum +"%" ) 




// Question 9:


// let dollar = +prompt("Enter The Amount In USD");
// let sar = +prompt("Enter The Amount In SAR");

// let dollarToPkr = 280;
// let riyalToPkr = 75;

// let totalPKR = (dollarToPkr * dollar) + (riyalToPkr * sar);


// if (dollar && sar) {
//     document.write(`The Total Amont In PKR: ` ,totalPKR )
// } else if (sar >= 1) {
//     document.write(`The Amount In PKR: ` ,sar * riyalToPkr)
// } else if (dollar >= 1) {
//     document.write(`The Amount In PKR: ` ,dollar * dollarToPkr)
// } else {
//     document.write("Please enter valid amounts for both Dollars and Riyals!");
// }





// Question 10:


// let num = 3;

// let sum = ((num + 5) * 10 / 2);

// document.write(sum);



// Question 11:


// let year = 2024;
// let birthYear = 2003;

// let sum = year - birthYear;

// document.write(`<h1>Age Calculator:</h1><br>`)
// document.write(`Current Year: ` ,year + `<br>`)
// document.write(`Birth Year: ` ,year + `<br>`)
// document.write(`Your Age Is: ` ,sum)






// Question No 11 Using Prompt:


// let year = 2024; 
// let month = 12;
// let date = 24;
// let birthYear = +prompt("Enter Your Birth Year  (Current Year is: 2024)");
// let birthMonth = +prompt("Enter Your Birth Month  (Current Month is: 12)");
// let birthDate = +prompt("Enter Your Birth Date  (Current Date is: 24)")

// let sum = year - birthYear;
// let sum1 = month - birthMonth;
// let sum2 = date - birthDate;


// document.write(`You  Are ` ,sum + " Years " + sum1 + " months  And " + sum2 + " days  old..." )





// Question NO. 12

// let Snack = "Lays Chips";
// let age = 20;
// let maxAge = 70;
// let dailyConsumption = 2;

// let sum = (maxAge - age) * dailyConsumption; 



// document.write(`<h1>The Lifetime Supply Calculator:</h1><br>`)
// document.write(`Favorite Snack: ` ,Snack + `<br>`)
// document.write(`Current Age: ` ,age + `<br>`)
// document.write(`Estimated Maximum Age: ` ,dailyConsumption + `<br>`)
// document.write(`Amount of snacks per day: ` ,dailyConsumption + `<br>`) 
// document.write(`You will need ` ,sum + ` Lays Chips to last until the ripe old age of ` ,maxAge +`.` );




// CHAPTER NO. 6      "Maths Expression"



// Question 2:

// let a = 2;
// let b = 1;

// let result = --a - --b + ++b + b--;

// document.write(result)



// Question 3:


// let NAME = +prompt("Please Enter Your Name")

// alert(`Welcome To Our Webpage!!!`)




// Question 5:


// let number = +prompt(`"Enter A Number Between 1 to 10"`)

// if (number >= 1 && number <= 10) {
//     document.write(`<h2>Multiplication Table Of </h2>`)
//     document.write(`${number} x 1 = ${number * 1}<br>`);
//     document.write(`${number} x 2 = ${number * 2}<br>`);
//     document.write(`${number} x 3 = ${number * 3}<br>`);
//     document.write(`${number} x 4 = ${number * 4}<br>`);
//     document.write(`${number} x 5 = ${number * 5}<br>`);
//     document.write(`${number} x 6 = ${number * 6}<br>`);
//     document.write(`${number} x 7 = ${number * 7}<br>`);
//     document.write(`${number} x 8 = ${number * 8}<br>`);
//     document.write(`${number} x 9 = ${number * 9}<br>`);
//     document.write(`${number} x 10 = ${number * 10}<br>`);
// } else if (number >= null) {
//     document.write(`<h2>Multiplication Table Of 5</h2>`)
//     document.write(`5 x 1 = 5<br>`)
//     document.write(`5 x 2 = 10<br>`)
//     document.write(`5 x 3 = 15<br>`)
//     document.write(`5 x 4 = 20<br>`)
//     document.write(`5 x 5 = 25<br>`)
//     document.write(`5 x 6 = 30<br>`)
//     document.write(`5 x 7 = 35<br>`)
//     document.write(`5 x 8 = 40<br>`)
//     document.write(`5 x 9 = 45<br>`)
//     document.write(`5 x 10 = 50<br>`)
// } 






// Question 6:


// let a = prompt("Enter Subject 1");
// let b = prompt("Enter Subject 2");
// let c = prompt("Enter Subject 3");

// let totalMarks = 100;

// let Obtained1 = +prompt(`Enter Your Marks of (${a})` );
// let Obtained2 = +prompt(`Enter Your Marks Of (${b})`);
// let Obtained3 = +prompt(`Enter Your Marks Of (${c})`);

// let sum_1 = Obtained1 / totalMarks * 100;
// let sum_2 = Obtained2 / totalMarks * 100;
// let sum_3 = Obtained3 / totalMarks * 100;



// let total = totalMarks * 3;
// let totalObtained = Obtained1 + Obtained2 + Obtained3;
// let percentage = totalObtained / total * 100; 


// document.write(`

//     <table>

//     <tr>

//     <th>Subject</th>
//     <th>Total Marks</th>
//     <th>Marks Obtained</th>
//     <th>Percentage</th>

//     </tr>
  
//     <tr>

//     <td>${a}</td>
//     <td>${totalMarks}</td>
//     <td>${Obtained1}</td>
//     <td>${sum_1}%</td>
    


//     </tr>

//     <tr>
    
//     <td>${b}</td>
//     <td>${totalMarks}</td>
//     <td>${Obtained2}</td>
//     <td>${sum_2}%</td>
    
    
//     </tr>
    
//     <tr>
    
    
//     <td>${c}</td>
//     <td>${totalMarks}</td>
//     <td>${Obtained3}</td>
//     <td>${sum_3}%</td>
    
//     </tr>
    
//     <tr>
    
//     <td>
//     </td>
//     <td>${total}</td>
//     <td>${totalObtained}</td>
//     <td>${percentage}%</td>
    
//     </tr>


//     </table>    
//     `
// )
