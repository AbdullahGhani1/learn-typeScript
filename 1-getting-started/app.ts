const number1 = document.getElementById("num1")! as HTMLInputElement;
const number2 = document.getElementById("num2")! as HTMLInputElement;
const adder = document.querySelector(".add");
function add(number1: number, number2: number) {
  return number1 + number2;
}

adder.addEventListener("click", function () {
  console.log(add(+number1.value, +number2.value));
});
