function add2numbers() {
  let input = document.querySelectorAll("input");
  let value1 = input[0].value;
  let value2 = input[1].value;
  let result;

  result = parseFloat(value1) + parseFloat(value2);

  if (!isNaN(result) && result !== "") {
    input[2].value = result;
  }
}

let button = document.querySelector("button");

button.addEventListener("click", add2numbers);
