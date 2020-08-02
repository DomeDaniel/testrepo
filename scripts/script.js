function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);

    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
        return
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolnia!");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}
 /*
function hider() {
    document.body.innerHTML = "";
    document.head.innerHTML = "";
}
*/

// Windows events.
let sendButton = document.querySelector(".override");

/*
sendButton.onclick = function() {
    alert("Bitchman");
}
*/

/*
sendButton.addEventListener("click", function () {
    alert("Bitchman");
});
*/

/*
window.addEventListener("resize", function() {
    console.log(this.innerHeight, this.innerWidth);
});
*/

/*
let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function(ev) {
    ev.preventDefault();
    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i = 0; i<inputs.length; i++) {
            values[inputs[i].name] = inputs[i].value;
    }
    console.log(values);
} );
*/

let toppings = [
    "--------",
    "szalonna",
    "hagyma",
    "tükörtojás",
    "libamáj",
    "extra sonka"
]

let toppingsSelect = document.querySelector("#topInput");

let index = 0;

while(index < toppings.length) {
    let option = document.createElement("option");
    option.value = index;
    option.innerHTML = toppings[index];
    toppingsSelect.appendChild(option);
    index++;
}