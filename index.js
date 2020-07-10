// // code to get music from search bar

// $(document).ready(function(){

//     let searchBox = document.getElementById("searchBox");
//     let searchButton = document.getElementById("searchButton");
//     let resetButton = document.getElementById("resetButton");

//     searchButton.addEventListener("click", findResult);
//     resetButton.addEventListener("click", clearResult);

//     function findResult(){

//         var settings = {
//             "async": true,
//             "crossDomain": true,
//             "url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + searchBox.value,
//             "method": "GET",
//             "headers": {
//                 "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
//                 "x-rapidapi-key": apiKeyValue
//             } // end of headers
//         } // end of settings

//         $.ajax(settings).done(function (response) {
//             console.log("hi")
//             searchAnswers(response)
//         }) // end of ajax request

//     } // end of findResult fx

//     function clearResult(){
//         console.log(searchBox.value);
//         // if(searchBox.value !== ""){

//         //     console.log("inside if");
//         //     //resetButton.style.display = "block";
//         //     //searchBox.innerHTML = "";
//         // } else {
//         //     console.log("inside else");
//         // }
//     }

//     function searchAnswers(searchItem){

//         for(let i = 0; i < searchItem.data.length-1; i++){
  
//         let arrayResults = searchItem.data[i];
//         let featuredCover = searchItem.data[i].album.cover_big;
//         let featuredAlbum = document.getElementsByClassName("featuredAlbum");
//         let featuredArtist = document.getElementsByClassName("featuredArtist");
//         let featuredAlbumName = document.getElementsByClassName("featuredAlbumName");
//         let featuredTrack = document.getElementsByClassName("featuredTrack");
//         let songBox = document.getElementsByClassName("songBox");

//         songBox = document.createElement("div");
//         songBox.classList.add("songBox");
//         songBox.classList.add("songInfo");
//         songBox.style.display = "inline";
//         document.body.appendChild(songBox);

//         let songAlbum = document.createElement("div");
//         songAlbum.classList.add("featuredAlbum");
//         songAlbum.style.backgroundImage = "url(" + featuredCover + ")";
//         songAlbum.style.backgroundSize = "100% 100%";
//         songBox.appendChild(songAlbum);
        
//         let songArtist = document.createElement("div");
//         songArtist.classList.add("featuredArtist");
//         songArtist.innerHTML = searchItem.data[i].artist.name;
//         songBox.appendChild(songArtist);

//         let songAlbumName = document.createElement("div");
//         songAlbumName.classList.add("featuredAlbumName");
//         songAlbumName.innerHTML = searchItem.data[i].album.title;
//         songBox.appendChild(songAlbumName);

//         let songName = document.createElement("div");
//         songName.classList.add("featuredTrack");
//         songName.innerHTML = searchItem.data[i].title_short;
//         songBox.appendChild(songName);

//         } // end of song boxes created

//         let myAudio = new Audio();
//         let i = 0;
//         myAudio.src = searchItem.data[i].preview; 
//         i++;      

//         let prevButton = document.getElementById("previous");
//         let pauseButton = document.getElementById("pause");
//         let playButton = document.getElementById("play");
//         let nextButton = document.getElementById("next");

//         prevButton.addEventListener("click", function(){

//             i = i - 1;
                
//             if(i < 0){
//                 i = searchItem.data.length-1;
//             }
            
//             myAudio.src = searchItem.data[i].preview;
//             myAudio.play();
//             console.log("current song is " + searchItem.data[i].title_short);

//         });

//         pauseButton.addEventListener("click", function(){

//             myAudio.src = searchItem.data[i].preview; 
//             myAudio.pause();
//             console.log("current song is " + searchItem.data[i].title_short);

//         });
    
//         playButton.addEventListener("click", function(){

//             i = 0;
//             myAudio.src = searchItem.data[i].preview; 

//             myAudio.play();

//             console.log(searchItem.data[i]);
//             console.log("current song is " + searchItem.data[i].title_short);

//         });

//         nextButton.addEventListener("click", function(){


//             i = i + 1;
//             if(i > searchItem.data.length-1){
//                 i = 0;
//             } 

//             myAudio.src = searchItem.data[i].preview; 
//             myAudio.play();
//             console.log("current song is " + searchItem.data[i].title_short);

//         });

//         myAudio.addEventListener("playing", whiteBoxSwitch);

//         function whiteBoxSwitch(){

//             artistInPlayer.innerHTML = searchItem.data[i].artist.name;
//             albumInPlayer.innerHTML = searchItem.data[i].album.title;
//             songPlaying.innerHTML = searchItem.data[i].title_short; 

// ///////////////////////////////////////////////////////////////////////////////////////////
//             ///////////// these code lines do not work for //////////

//             let songBox = document.getElementsByClassName("songBox");
//             let songInfo = document.getElementsByClassName("songInfo");
//             let songInfoActive = document.getElementsByClassName("songInfoActive");

//                 songBox[i].classList.remove("songInfo"); 
//                 songBox[i].classList.add("songInfoActive");

//                 songBox[i + 1].classList.remove("songInfoActive");
//                 songBox[i + 1].classList.add("songInfo");

//                 songBox[i - 1].classList.remove("songInfo");
//                 songBox[i - 1].classList.add("songInfoActive");

//             ///////////// these code lines do not work for //////////
// ///////////////////////////////////////////////////////////////////////////////////////////



//         }  /// only works going from [0] thru to [24], but if I try to go 
//            /// backward from node[0] to node[24] --- node[0] stays white 
//            /// and does not change its classList while that node song is
//            /// not playing -- tried everything but not sure how to fix it





//         myAudio.addEventListener("ended", songEnded)
            
//         function songEnded(){

// ///////////////////////////////////////////////////////////////////////////////////////////
//             ///////////// these code lines do not work for //////////

//             let songBox = document.getElementsByClassName("songBox");
//             songBox[i].classList.remove("songInfoActive");
//             songBox[i].classList.add("songInfo");
//             songBox[i + 1].classList.remove("songInfo");
//             songBox[i + 1].classList.add("songInfoActive");

//             ///////////// these code lines do not work for //////////
// ///////////////////////////////////////////////////////////////////////////////////////////



//             i = i + 1;
//             if(i > searchItem.data.length-1){
//                 i = 0;
//             }
            
//             myAudio.src = searchItem.data[i].preview;
//             myAudio.play();

//             console.log("current song is " + searchItem.data[i].title_short);
//         }
        
//     } // end of searchAnswers fx

// }) // end of jquery doc ready fx

// /////////// the end ////////////


// code to get music from search bar

$(document).ready(function(){

    let searchBox = document.getElementById("searchBox");
    let searchButton = document.getElementById("searchButton");
    let songBox = document.getElementsByClassName("songBox");
    //let resetButton = document.getElementById("reset");

    searchButton.addEventListener("click", findResult);
    //resetButton.addEventListener("click", clearResult);


    function findResult(){

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + searchBox.value,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "7127fb250cmsh0aa25dfcfb27c2bp11c565jsn1fd443c2d24e"
            } // end of headers
        } // end of settings

        $.ajax(settings).done(function (response) {
            console.log("hi")
            searchAnswers(response)
        }) // end of ajax request

    } // end of findResult fx

    // function clearResult(){

    //     let searchBox = document.getElementById("searchBox");
    //     searchBox.value = "";
    //     console.log(searchBox.value);

    //     var settings = {
    //         "async": true,
    //         "crossDomain": true,
    //         "url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + searchBox.value,
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    //             "x-rapidapi-key": "7127fb250cmsh0aa25dfcfb27c2bp11c565jsn1fd443c2d24e"
    //         } // end of headers
    //     } // end of settings

    //     $.ajax(settings).done(function (response) {
    //         console.log("hi")
    //         searchAnswers(response)
    //     }) // end of ajax request

    // }


    function searchAnswers(searchItem){

    for(let i = 0; i < searchItem.data.length; i++){
  
        let arrayResults = searchItem.data[i];
        let featuredCover = searchItem.data[i].album.cover_big;
        let featuredAlbum = document.getElementsByClassName("featuredAlbum");
        let featuredArtist = document.getElementsByClassName("featuredArtist");
        let featuredAlbumName = document.getElementsByClassName("featuredAlbumName");
        let featuredTrack = document.getElementsByClassName("featuredTrack");
        let songBox = document.getElementsByClassName("songBox");

        songBox = document.createElement("div");
        songBox.classList.add("songBox");
        songBox.classList.add("songInfo");
        songBox.style.display = "inline";
        document.body.appendChild(songBox);

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

    } // end of song boxes created

        let myAudio = new Audio();
        let i = 0;
        // ok, of what I see you did set one number as 0; that is what I meant
        // when I was saying that you should have a currentSong variable; you should
        // change the name of i to something else; you can easily mix up which i is which
        
        myAudio.src = searchItem.data[i].preview; 
        // why do you increment i here??
        // i++; 
        

        let prevButton = document.getElementById("previous");
        let pauseButton = document.getElementById("pause");
        let playButton = document.getElementById("play");
        let nextButton = document.getElementById("next");

        prevButton.addEventListener("click", function(){
            i = i - 1;            
            if(i < 0){
                i = searchItem.data.length-1;
            }
            
            myAudio.src = searchItem.data[i].preview;
            myAudio.play();
            console.log("current song is " + searchItem.data[i].title_short);

        });

        pauseButton.addEventListener("click", function(){

            myAudio.src = searchItem.data[i].preview; 
            myAudio.pause();
            console.log("current song is " + searchItem.data[i].title_short);

        });
    
        playButton.addEventListener("click", function(){
            // i = 0;
            myAudio.src = searchItem.data[i].preview; 

            myAudio.play();

            console.log(searchItem.data[i]);
            console.log("current song is " + searchItem.data[i].title_short);

        });

        nextButton.addEventListener("click", function(){
            i = i + 1;
            if(i > searchItem.data.length-1){
                i = 0;
            } 

            myAudio.src = searchItem.data[i].preview; 
            myAudio.play();
            console.log("current song is " + searchItem.data[i].title_short);

        });

        myAudio.addEventListener("playing", function() {
            whiteBoxSwitch (i)
        });

        function whiteBoxSwitch(i){
            artistInPlayer.innerHTML = searchItem.data[i].artist.name;
            albumInPlayer.innerHTML = searchItem.data[i].album.title;
            songPlaying.innerHTML = searchItem.data[i].title_short; 

///////////////////////////////////////////////////////////////////////////////////////////
            ///////////// these code lines do not work for //////////
            // you loop through the elements each time when you change song;
            // you add white to the one that corresponds to i; remove each time all the rest
            for(let j = 0; j < songBox.length; j++) {
            if( i === j) {
                songBox[j].classList.add("songInfoActive");
            } else {
                songBox[j].classList.remove("songInfoActive")
            }
        }
                 

            ///////////// these code lines do not work for //////////
///////////////////////////////////////////////////////////////////////////////////////////



        }  /// only works going from [0] thru to [24], but if I try to go 
           /// backward from node[0] to node[24] --- node[0] stays white 
           /// and does not change its classList while that node song is
           /// not playing -- tried everything but not sure how to fix it

    // function removeWhite(i) {
        
    // }



        myAudio.addEventListener("ended", songEnded)
            
        function songEnded(){

///////////////////////////////////////////////////////////////////////////////////////////
            ///////////// these code lines do not work for //////////

            // let songBox = document.getElementsByClassName("songBox");
            // songBox[i].classList.remove("songInfoActive");
            // songBox[i].classList.add("songInfo");
            // songBox[i + 1].classList.remove("songInfo");
            // songBox[i + 1].classList.add("songInfoActive");

            ///////////// these code lines do not work for //////////
///////////////////////////////////////////////////////////////////////////////////////////



            i = i + 1;
            if(i > searchItem.data.length-1){
                i = 0;
            }
            
            myAudio.src = searchItem.data[i].preview;
            myAudio.play();

            console.log("current song is " + searchItem.data[i].title_short);
        }
        
    } // end of searchAnswers fx

}) // end of jquery doc ready fx

/////////// the end ////////////