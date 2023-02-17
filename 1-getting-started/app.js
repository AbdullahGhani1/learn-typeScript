const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
const add = document.querySelector(".add");

add.addEventListener("click", function () {
  console.log(
    `num1:  ${number1.value} &nbsp; num2: ${number2.value} = ${
      number1.value + number2.value
    }`
  );
});
