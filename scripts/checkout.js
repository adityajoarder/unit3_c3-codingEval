// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let wallet_balance = JSON.parse(localStorage.getItem("amount"))

let wallet = document.getElementById("wallet")

wallet.innerText = wallet_balance;

let movies = JSON.parse(localStorage.getItem("movie"))

let display = document.getElementById("movie")

let title = document.createElement("h2")
title.innerText = movies.Title;

let imgBox = document.createElement("div")
let poster = document.createElement("img")
poster.src = movies.Poster;

imgBox.append(poster)
display.append(title, imgBox)

document.getElementById("confirm").addEventListener("click", payment)

let seatPrice = 100;

function payment(){
    let no = document.getElementById("number_of_seats").value;
    no = +no;
    let totalPrice = no * seatPrice;
    if(totalPrice>wallet_balance){
        alert("Insufficient Balance!")
    }else {
        wallet_balance = wallet_balance - totalPrice;
        alert("Booking successful!")
    }
    localStorage.setItem("amount", JSON.stringify(wallet_balance))
    window.location.reload();
}
