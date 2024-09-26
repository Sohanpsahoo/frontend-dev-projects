const buttonsEl = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "C") {
      clearResult();

    } 
    else if (buttonValue === "=") {
      calculateResult();
    }
      else if (buttonValue === "←") {
        backspace();

    } else {
      appendValue(buttonValue);
    }

  });
}

function clearResult() {
  inputFieldEl.value = "";
}

function calculateResult() {
    
   
        try {
          // Evaluate the expression and set the result to the input field
          inputFieldEl.value = eval(inputFieldEl.value);
        } catch (e) {
          // If eval throws an error, set the input field to "Error Not Valid"
          inputFieldEl.value = "Error Not Valid";
          return;
        }
      
        // Regular expression to check for a valid real number
        var realNumberPattern = /^-?\d*\.?\d+$/;
      
        // Check if the result is a valid real number
        if (!realNumberPattern.test(inputFieldEl.value)) {
          inputFieldEl.value = "Error Not Valid";
        }
      }

         
function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
  //   inputFieldEl.value = inputFieldEl.value + buttonValue;
}
function backspace() {
  inputFieldEl.value = inputFieldEl.value.slice(0, -1);
}