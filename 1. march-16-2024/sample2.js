document.querySelector("#add").addEventListener("click", function () {
    var userInput1 = document.querySelector("#input1");
    var userInput2 = document.querySelector("#input2");
    add(+userInput1.value, +userInput2.value);
});
function add(input1, input2) {
    console.log(input1 + input2);
}
  