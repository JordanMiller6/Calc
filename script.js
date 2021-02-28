var containerEle = document.body.querySelector(".calc");

var num1=Number(prompt("What is the first number?"));
  if (isNaN(num1)) 
  {
    alert("Must input numbers");
  }else{
    var num2=Number(prompt("What is the second number?"));
  if (isNaN(num2)) 
  {
    alert("Must input numbers");
  }else{
    var o=(prompt("What is your operator?"));
   if (o == '%' || o == '/' || o == '*' || o == '+' || o == '-'){
if (o == '+') {
   var result = num1 + num2;
}
else if (o == '-') {
   var result = num1 - num2;
}
else if (o == '*') {
   var result = num1 * num2;
}
else if(o == '/') {
   var result = num1 / num2;
}
     }else{ alert("Must input an operator!");}}}

     document.body.querySelector(".calc").innerHTML = result;