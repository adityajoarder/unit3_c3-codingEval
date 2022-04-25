// Store the wallet amount to your local storage with key "amount"

function insertAmount(){
    let amt = document.getElementById("amount").value;

    let amts = JSON.parse(localStorage.getItem("amount")) || [];

    amts.push(amt);

    localStorage.setItem("amount", JSON.stringify(amts));

    document.getElementById("amount").value = null;


}

