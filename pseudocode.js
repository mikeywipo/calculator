//object.addEventListener(event, function)
var One = document.getElementById('1');
var Two = document.getElementById('2');
var Three = document.getElementById('3');


One.addEventListener('click', hi);
Two.addEventListener('click', hello);
Three.addEventListener('click', Yo);

function hi() {
    alert('hi')
}
function hello() {
    alert('hello')
}
function Yo() {
    alert('Yo')
}


// $ = document.getElementById("button") get elements by id button
// on is a jQuery function - this returns a function when the attached element is clicked
// so when a button element is clicked the function below is called
// $("button").on('click', function() {
//    var val = $(this).text(); //Grabs the text of the button

// function becky() { 
    
// }
// function run2(){

// 	document.case.display.value += "2"
// };
// function run3(){

// 	document.case.display.value += "3"
// };
// function run4(){

// 	document.case.display.value += "4"
// };
// function run5(){

// 	document.case.display.value += "5"
// };

// function run6(){

// 	document.case.display.value += "6"
// };

// function run7(){

// 	document.case.display.value += "7"
// };

// function run8(){

// 	document.case.display.value += "8"
// };

// function run9(){

// 	document.case.display.value += "9"
// };

// function run0(){

// 	document.case.display.value += "0"
// };
// function runPlus(){

// 	document.case.display.value += "+"
// };
// function runMinus(){

// 	document.case.display.value += "-"
// };
// function runDivide(){

// 	document.case.display.value += "/"
// };
// function runMultiply(){

// 	document.case.display.value += "*"
// };

// function runC(){

// 	document.case.display.value = ""
// };


// function runEquals() {
// 	var equals = eval(document.case.display.value)
// 	document.case.display.value = equals;
// }
