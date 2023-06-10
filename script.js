let pass;
let str;
let msg;

window.onload = function () {
  pass = document.getElementById("password");
  str = document.getElementById("strength");
  msg = document.getElementById("msg");
  pass.addEventListener("input", ValidatePassword);
};

function ValidatePassword() {
  if (
    //STRONG PASSWORD - At least 8 characters long
    //Contains at least one uppercase letter, one lowercase letter, one digit, and one special character
    pass.value.match(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{}[\]|;:'",.<>\/?]).{8,}$/
    )
  ) {
    msg.style.display = "block";
    msg.style.color = "#26d730";
    str.innerHTML = "strong";
  } else if (pass.value.match(/^(?=.*[A-Z])(?=.*\d).{8,}$/)) {
    //MODERATE PASSWORD - At least 8 characters long
    //Contains at least one uppercase letter and one digit
    msg.style.display = "block";
    msg.style.color = "yellow";
    str.innerHTML = "moderate";
  } else if (pass.value.length === 0) {
    msg.style.display = "none";
  } else {
    //WEAK PASSWORD - Anything else
    msg.style.display = "block";
    msg.style.color = "#ff5925";
    str.innerHTML = "weak";
  }
}
