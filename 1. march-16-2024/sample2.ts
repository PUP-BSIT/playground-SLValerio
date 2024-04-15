document.querySelector("#add")!.addEventListener("click", () => {
    const userInput1 = document.querySelector("#input1") as HTMLInputElement;
    const userInput2 = document.querySelector("#input2") as HTMLInputElement;
    add(+userInput1.value, +userInput2.value);
  });
  
  function add(input1: number, input2: number) {
    console.log(input1 + input2);
  }
  