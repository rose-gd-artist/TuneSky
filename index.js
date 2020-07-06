// code to get music from search bar

$(document).ready(function(){

    let searchBox = document.getElementById("searchBox");
    let searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", findResult);

    function findResult(){

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + searchBox.value,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": apiKeyValue
            } // end of headers
        } // end of settings

        $.ajax(settings).done(function (response) {
            console.log("hi")
            searchAnswers(response)
        }) // end of ajax request

    } // end of findResult fx


    function searchAnswers(searchItem){

        for(let i = 0; i < searchItem.data.length-1; i++){
  
        let arrayResults = searchItem.data[i];
        let featuredCover = searchItem.data[i].album.cover_big;
        let featuredAlbum = document.getElementsByClassName("featuredAlbum");
        let featuredArtist = document.getElementsByClassName("featuredArtist");
        let featuredAlbumName = document.getElementsByClassName("featuredAlbumName");
        let featuredTrack = document.getElementsByClassName("featuredTrack");
        let songInfo = document.getElementsByClassName("songInfo");

        let songBox = document.createElement("div");
        songBox.classList.add("songInfo");
        songBox.style.display = "inline";
        document.body.appendChild(songBox);
        
        if(songBox.activeElement === searchItem.data[i]){
            songBox.removeClass("songInfo").addClass("artistInPlayer");
        }

        let songAlbum = document.createElement("div");
        songAlbum.classList.add("featuredAlbum");
        songAlbum.style.backgroundImage = "url(" + featuredCover + ")";
        songAlbum.style.backgroundSize = "100% 100%";
        songBox.appendChild(songAlbum);
        
        let songArtist = document.createElement("div");
        songArtist.classList.add("featuredArtist");
        songArtist.innerHTML = searchItem.data[i].artist.name;
        songBox.appendChild(songArtist);

        let songAlbumName = document.createElement("div");
        songAlbumName.classList.add("featuredAlbumName");
        songAlbumName.innerHTML = searchItem.data[i].album.title;
        songBox.appendChild(songAlbumName);

        let songName = document.createElement("div");
        songName.classList.add("featuredTrack");
        songName.innerHTML = searchItem.data[i].title_short;
        songBox.appendChild(songName);

        for(let j = 0; j < searchItem.data.length-1; j++){

            let songInPlayer = document.getElementsByClassName("songInPlayer");
            let artistInPlayer = document.getElementsByClassName("artistInPlayer");
            let albumInPlayer = document.getElementsByClassName("albumInPlayer");
            let songPlaying = document.getElementsByClassName("songPlaying");
            let timeInPlayer = document.getElementsByClassName("timeInPlayer");
    
            artistInPlayer.innerHTML = searchItem.data[j].artist.name;
            albumInPlayer.innerHTML = searchItem.data[j].album.title;
            songPlaying.innerHTML = searchItem.data[j].title_short;

        } // this is not showing up in the songInPlayer headline

        } // end of song boxes created

        let myAudio = new Audio();
        let i = 0;
        myAudio.src = searchItem.data[i].preview; 
        i++;

        let prevButton = document.getElementById("previous");
        let pauseButton = document.getElementById("pause");
        let playButton = document.getElementById("play");
        let nextButton = document.getElementById("next");

        prevButton.addEventListener("click", function(){

            i = i - 1;
                
            if(i < 0){
                i = searchItem.data.length-1;
            }
            console.log(searchItem.data[i]);
            myAudio.src = searchItem.data[i].preview; 
            myAudio.play();
        });

        pauseButton.addEventListener("click", function(){
            console.log(searchItem.data[i]);
            myAudio.src = searchItem.data[i].preview; 
            myAudio.pause();
        });
    
        playButton.addEventListener("click", function(){
            console.log(searchItem.data[i]);
            myAudio.src = searchItem.data[i].preview; 
            myAudio.play();
        });

        nextButton.addEventListener("click", function(){
            i = i + 1;
            if(i > searchItem.data.length-1){
                i = 0;
            }
            console.log(searchItem.data[i]);
            myAudio.src = searchItem.data[i].preview; 
            myAudio.play();

        });

        myAudio.addEventListener("ended", songEnded)
            

        function songEnded(){
            i = i + 1;
            if(i > searchItem.data.length-1){
                i = 0;
            }
            console.log(searchItem.data[i]);
            myAudio.src = searchItem.data[i].preview;
            myAudio.play();
        }
        
    } // end of searchAnswers fx

}) // end of jquery doc ready fx

/////////// the end ////////////