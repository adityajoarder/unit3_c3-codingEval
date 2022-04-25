// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


// http://www.omdbapi.com/?i=tt3896198&apikey=c3270366
let movies_div = document.getElementById("movies");

let id;

async function searchMovies(){
    try{
        const search_bar = document.getElementById("search_bar").value;

        const res = await fetch(`http://www.omdbapi.com/?apikey=c3270366&s=${search_bar}`);

        const data = await res.json();

        const movies = data.Search;

        return movies;
        
    }catch(err){
        console.log("err:", err);
    }
}

function appendMovies(data){

    movies_div.innerHTML = null;
    data.forEach(function(el){
        let p = document.createElement("p");
        p.innerText = el.Title;

        let image = document.createElement("img");
        image.src = el.Poster;

        let btn = document.createElement("button");
        btn.innerText = "Book now";
        btn.setAttribute("class", "book_now");
        
        movies_div.append(image, p, btn);
    });
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
