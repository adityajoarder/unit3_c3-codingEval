// Store the wallet amount to your local storage with key "amount"

document.getElementById("add_to_wallet").addEventListener("click", add);

let wallet = document.getElementById("wallet")
let wallet_balance = JSON.parse(localStorage.getItem("amount"))
if(wallet_balance==null) {
    wallet.innerText = 0;
    wallet_balance = 0;
}else {
    wallet.innerText = wallet_balance;
}

let balance;

function add(){
    balance = wallet_balance;
    let addBalance = document.getElementById("amount").value;
    addBalance = +addBalance
    balance += addBalance;
    localStorage.setItem("amount", JSON.stringify(balance))
    window.location.reload();
}