const empty = "";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*=-_";

const passwordLength = document.getElementById("p-length");
const uCase = document.getElementById("p-uppercase");
const lCase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-numbers");
const pSymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");

submit.addEventListener("click", () => {
  let initialPassword = empty;
  uCase.checked ? (initialPassword += upperCase) : "";
  lCase.checked ? (initialPassword += lowerCase) : "";
  pNumber.checked ? (initialPassword += number) : "";
  pSymbol.checked ? (initialPassword += symbol) : "";

  password.value = generatePassword(passwordLength.value, initialPassword);
});

function generatePassword(length, initialPassword) {
  let pass = "";
  for (let i = 0; i < length; i++) {
    pass += initialPassword.charAt(
      Math.floor(Math.random() * initialPassword.length)
    );
  }
  return pass;
}

const copy = document.getElementById("copy");
copy.addEventListener("click", () => {
  if (password.value === "") {
    alert("Please generate the password");
  } else {
    password.select();
    document.execCommand("copy");
    alert("Password has been copied to clipboard");
  }
});
