const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
  createPassword();
});

copyIconEl.addEventListener("click", () => {
  copyPassword();
  if (inputEl.value) {
    alertContainerEl.classList.remove("active"); /*Here Active is removed so that -300px effect would vanish and 
    it would come out frome the side*/
    setTimeout(() => {
      alertContainerEl.classList.add("active");
    }, 2000);
  }
});

function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
    
  }
  inputEl.value = password;
  console.log(password);
  alertContainerEl.innerText = password + " copied!";
}

function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999); /*For mobile devices*/
  navigator.clipboard.writeText(inputEl.value);
}