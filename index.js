let check = document.querySelector(".check");
let password = document.querySelector(".password");
let text = document.querySelector(".text");

let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

check.addEventListener("click", () => {
    if(password.value == "") {
        text.innerText == "PLease enter an email address";
        text.style.color == "#000"
    }
    else if(password.value.match(regex)) {
        text.innerText = "Congrats! You enter a valid email address";
        text.style.color = "rgba(4,125,9,1)";
    }
    else {
        text.innerText = "Sorry! Your email address is invalid";
        text.style.color = "rgba(255,0,0,1)";
    }
});