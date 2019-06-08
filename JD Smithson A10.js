const ARTISTS = [
    {
        "name": "Alpha Bravo",
        "fandom": "Pokemon",
        "medium": "Digital",
         },
     {
        "name": "Charlie Delta",
        "fandom": "Super Heroes",
        "medium": "Watercolor",
    },
    {
        "name": "Echo Foxtrot",
        "fandom": "Harry Potter",
        "medium": "Wood Carving",
    },
    {
        "name": "Golf Hotel",
        "fandom": "Cross Stitch",
        "medium": "Game of Thrones",
    },
    {
        "name": "India Juliet",
        "fandom": "Gouache",
        "medium": "Disney",
    },
    {
        "name": "Kilo Lima",
        "fandom": "Ink and Pen",
        "medium": "Manga",
    },            


    function renderTableCell(content, nonNumeric){
        var td = document.createElement("td");
        td.style.textAlign = "left";
     
        td.textContent = content;
     
        if (nonNumeric){
            td.classList.add("numeric");
        }
     
        return td;
     }
    
    function renderArtist(artist_list) {
        var tr = document.createElement("tr");
    
        tr.appendChild(renderTableCell(artist_list.name));
        tr.appendChild(renderTableCell(artist_list.fandom));
        tr.appendChild(renderTableCell(artist_list.medium));
    
        return tr;
    }
    function renderArtist(artist) {
        var tbody = document.querySelector("table.artists tbody")
        tbody.textContent = "";
    
        artist.forEach(function(artist_list){
            tbody.appendChild(renderArtist(artist_list));
    
    
        });
    }
    
  
    var searchInput = document.getElementById("movie-filter"); // grabbing the search bar by its id
    
    function filterMovie(movie){ 
        var userInput = searchInput.value; // here I am listening for when someone types into my search bar
        console.log(userInput); 
    
        var lowercaseUserInput = userInput.toLowerCase(); 
    
        var lowercaseTitle = movie.title.toLowerCase(); // returns the input into search bar and the movie titles to lowercase
    
        if (lowercaseTitle.indexOf(lowercaseUserInput) >= 0){
            return true;
        }
        else{
            return false;
        }
    }
    
    searchInput.addEventListener('input',function(){ //listening for input and running a function
    
        var filtered_movies = MOVIES.filter(filterMovie); //finding the movies that match the search bar input
        console.log(filtered_movies);
    
           renderMovie(filtered_movies); //this is updating the movie columns with the input data
    
    });
    