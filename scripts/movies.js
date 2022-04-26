// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


// http://www.omdbapi.com/?i=tt3896198&apikey=c3270366

let wallet_balance = JSON.parse(localStorage.getItem("amount"))
wallet.innerText = wallet_balance;

document.getElementById("search").addEventListener("input",function(){
    debounce(main, 500)
})
let id;

async function searchMovies(){
    try{
        const search = document.getElementById("search").value;

        const res = await fetch(`https://www.omdbapi.com/?apikey=c3270366&s=${search}`);

        const data = await res.json();

        const movies = data.Search;

        return movies;
        
    }catch(err){
        console.log("err:", err);
    }
}
let movies_div = document.getElementById("movies");

function appendMovies(data){

    movies_div.innerHTML = null;

    data.forEach(function(el){
        let card = document.createElement("div");
        movies_div.append(card);

        let img_div = document.createElement("div");
        img_div.setAttribute("class", "imgDiv");

        let p = document.createElement("p");
        p.innerText = el.Title;

        let image = document.createElement("img");
        image.src = el.Poster;

        let btn = document.createElement("button");
        btn.innerText = "Book now";
        btn.setAttribute("class", "book_now");
        btn.addEventListener("click", function(){
            book(el)
        })
        img_div.append(image);
        card.append(image, p, btn);
    });
}

function book(el){
    window.location.href = "checkout.html";
    localStorage.setItem("movie", JSON.stringify(el));
}

async function main(){
    let data = await searchMovies();

    if(data == undefined){
        return false;
    }
    appendMovies(data);
}

function debounce(func, delay){
    if(id){
        clearTimeout(id);
    }

    id = setTimeout(function(){
        func();
    },delay);
}
