const InputValues = document.querySelectorAll(".inputBtn");
const ClearAll = document.querySelector(".AC");
const Backspace = document.querySelector(".back");
const functionButtons = document.querySelectorAll(".functionBtn");
const textField = document.querySelector(".text");
const history = document.querySelector(".history");

const updateTextField = (text) => {
  const textField = document.querySelector(".text");
  text = !textField.textContent ? text : [textField.textContent, ...text].join("");
  textField.textContent = text;
};
const clearInput = () => {
  document.querySelector(".text").textContent = "";
  document.querySelector(".history").textContent = "";
};
const updateInput = (val) => {
  textField.textContent = val;
};
const updateHistory = (update) => {
  const history = document.querySelector(".history");
  history.textContent = update;
};
const backSpace = () => {
  const textField = document.querySelector(".text");
  let newArray = [...textField.textContent];
  delete newArray[newArray.length - 1];
  textField.textContent = newArray.join("");
};

// this is the function that's used to get the final value
//  that'll be displayed to the user
const evaluate = (stringToEvaluate ) => {


if (stringToEvaluate.includes("+")) {
    const [num, str] = splitter(stringToEvaluate, "+");
    const answer = parseFloat(evaluate(num),10) + parseFloat(evaluate(str),10);
  
    return answer;
  } 
  else if (stringToEvaluate.includes("-")) {
    const [num, str] = splitter(stringToEvaluate, "-");
    const answer = parseFloat(evaluate(num),10) - parseFloat(evaluate(str),10);
    return answer;
  } 
  else if (stringToEvaluate.includes("×")) {
    const [num, str] = splitter(stringToEvaluate, "×");
    const answer = parseFloat(evaluate(num),10) * parseFloat(evaluate(str),10);
 
    return answer;
  }
   else if (stringToEvaluate.includes("÷")) {
    const [num, str] = splitter(stringToEvaluate, "÷");

    const answer = parseFloat(evaluate(num),10) / parseFloat(evaluate(str),10);

    return answer;
  }
  else if (stringToEvaluate.includes("^")) {
    const [num, str] = splitter(stringToEvaluate, "^");
    const answer = parseFloat(evaluate(num),10) ** parseFloat(evaluate(str),10);
    return answer;
  } else {
    return parseFloat(stringToEvaluate, 10);
  }
};

// Event Listeners

InputValues.forEach((input) => {
  input.addEventListener("click", (e) => {
    updateTextField(e.target.textContent);
  });
});
functionButtons.forEach((input, index) => {
  if (index < 2) return;
  if (index > functionButtons.length - 2) {
    input.addEventListener("click", (e) => {
      const final = evaluate(textField.textContent);
      updateHistory(final);
      updateInput(final);
    });
    return;
  }

  input.addEventListener("click", (e) => {
    updateTextField(e.target.textContent);
  });
});
ClearAll.addEventListener("click", () => {
  clearInput();
});
Backspace.addEventListener("click", () => {
  backSpace();
});

//Helper functions

const splitter = (split, val) => {
  let i = split.indexOf(val);
  return [split.slice(0, i), split.slice(i + 1)];
};
