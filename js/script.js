const inputField = document.querySelector("#inputField");
const numberEl = document.querySelector("#number");
const upperEl = document.querySelector("#upper");
const lowerEl = document.querySelector("#lower");
const specialEl = document.querySelector("#special");
const lengthEl = document.querySelector("#lengthEl");
const spaceEl = document.querySelector("#space");
const warningEl = document.querySelector("#warning");
const length = document.querySelector("#length");
const optionEl = document.querySelector("#options");
const copyBtn = document.querySelector("#copy-btn");
const resetBtn = document.querySelector("#reset-btn");

let digit = 6;
const pattern = `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{${digit},}$`;
// function
inputField.addEventListener("keyup", (event) => {
  const paswordValue = event.target.value;

  /*=====================================
         Check password conatains space
  =====================================*/
  if (paswordValue.includes(" ")) {
    spaceEl.classList.add("text-red-400");
    copyBtn.setAttribute("disabled", "true");
  } else {
    warningEl.classList.add("hidden");
    spaceEl.classList.remove("text-red-400");
    copyBtn.removeAttribute("disabled");
  }

  /*=====================================
         Check password field empty
  =====================================*/
  if (paswordValue === "") {
    copyBtn.setAttribute("disabled", "true");
  }

  /*=====================================
   Check Password Length is more than digit
  =====================================*/
  if (paswordValue.length >= digit) {
    //
    lengthEl.classList.add("textColor");
  } else {
    //
    lengthEl.classList.remove("textColor");
  }

  /*=====================================
         Check Uppercase Letter
  =====================================*/
  if (paswordValue.search(/(?=.*?[A-Z])/) !== -1) {
    upperEl.classList.add("textColor");
  } else {
    upperEl.classList.remove("textColor");
  }
  /*=====================================
         Check number 
  =====================================*/
  if (paswordValue.search(/(?=.*?[0-9])/) !== -1) {
    numberEl.classList.add("textColor");
  } else {
    numberEl.classList.remove("textColor");
  }

  /*=====================================
         Check Lowercase Letter
  =====================================*/
  if (paswordValue.search(/(?=.*?[a-z])/) !== -1) {
    lowerEl.classList.add("textColor");
  } else {
    lowerEl.classList.remove("textColor");
  }

  /*=====================================
         Check special Character 
  =====================================*/
  if (paswordValue.search(/(?=.*?[#?!@$%^&*-])/) !== -1) {
    specialEl.classList.add("textColor");
  } else {
    specialEl.classList.remove("textColor");
  }
});

//
optionEl.addEventListener("input", (e) => {
  const digitValue = e.target.value;
  digit = digitValue;
  length.innerText = digitValue;

  // if (inputField.value.length > digit) {
  //   lengthEl.classList.add("textColor");
  // } else {
  //   lengthEl.classList.remove("textColor");
  // }
});

// reset
resetBtn.addEventListener("click", () => {
  inputField.value = "";
  copyBtn.setAttribute("disabled", "true");
});

// copy
copyBtn.addEventListener("click", () => {
  if (inputField.value.length < digit || inputField.value.search(pattern)) {
    warningEl.classList.remove("hidden");
    return 0;
  } else {
    warningEl.classList.add("hidden");
    /*=====================================
             Copy to Clipboard
    =====================================*/
    inputField.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Text copied to clipboard: " + inputField.value);
  }
});
