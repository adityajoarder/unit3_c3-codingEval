// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

function func(){
    let book = document.querySelector(".book_now").value;

    let books = JSON.parse(localStorage.getItem("movie")) || [];

    books.push(book);

    localStorage.setItem("amount", JSON.stringify(book));

    document.getElementById("movie").value = null;


}
