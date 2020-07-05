//// my variables from DOM ///

let prevButton = document.getElementById("previous");
let pauseButton = document.getElementById("pause");
let playButton = document.getElementById("play");
let nextButton = document.getElementById("next");

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
            console.log(response)
            console.log("hi")
            searchAnswers(response)
            pauseSong(response)
            playSong(response)
        }) // end of ajax request
    } // end of findResult fx

   // let myAudio = new Audio();

    function searchAnswers(searchItem){
        console.log(searchItem)
        let myAudio = new Audio();

        for(let i = 0; i < searchItem.data.length-1; i++){
        
        console.log(searchItem)
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
                    
        let pauseButton = document.getElementById("pause");
        let playButton = document.getElementById("play");
                
        pauseButton.addEventListener("click", pauseSong);
        playButton.addEventListener("click", playSong);
                
        this.pauseSong = function(){
            myAudio = searchItem.data[0];
            myAudio.src = searchItem.data[0].preview;
            myAudio.pause();
        }
                
        this.playSong = function(){
            myAudio = searchItem.data[0];
            myAudio.src = searchItem.data[0].preview;
            //this.displaySongInPlayer();
            myAudio.play();
        }
         
        } // end of song boxes created

        //// my new Audio variable  ////

        //let myAudio = new Audio();
        //myAudio.src = searchItem.data[i].preview;

        // audioControls()

        // function audioControls(songs){
        //     console.log(songs);


        //     let index = 0;
                    
        //     //let prevButton = document.getElementById("previous");
        //     let pauseButton = document.getElementById("pause");
        //     let playButton = document.getElementById("play");
        //     //let nextButton = document.getElementById("next");
                    
        //     pauseButton.addEventListener("click", pauseSong);
        //     playButton.addEventListener("click", playSong);
                    
        //     function pauseSong(){
        //         myAudio.pause();
        //     }
                    
        //     function playSong(){
        //         myAudio.src = "url(" + songs.data[index].link + ")";
        //         //this.displaySongInPlayer();
        //         myAudio.play();
        //     } // end of all audio stuff

        // } // end of audioControls fx
        

    } // end of searchAnswers fx

    // pauseButton.addEventListener("click", pauseSong);
    // playButton.addEventListener("click", playSong);
    

}) // end of jquery doc ready fx















//// my constructor for the songs ////

// function Song(artist, songName, trackNumber, songSource){
//     this.artist = artist;
//     this.songName = songName;
//     this.trackNumber = trackNumber;
//     this.songSource = songSource;
// }

//// my new songs added to the song constructor ////

// let song1 = new Song ("Green Day", "Wake Me Up When September Ends", "Track 1", "GreenDay_WhenSeptemberEnds.mp3");
// let song2 = new Song ("Live", "Selling The Drama", "Track 2", "Live_SellingTheDrama.mp3");
// let song3 = new Song ("OK Go", "Here It Goes Again", "Track 3", "OKGo_HereItGoesAgain.mp3");
// let song4 = new Song ("Peter Bjorn and John", "Nothing to Worry About", "Track 4", "PeterBjornandJohn_NothingtoWorryAbout.mp3");
// let song5 = new Song ("Israel Kamakawiwo'ole", "Over The Rainbow/What A Wonderful World", "Track 5", "OverTheRainbow_WhatAWonderfulWorld.mp3");
// let song6 = new Song ("Live", "Lightning Crashes", "Track 6", "Live_LightningCrashes.mp3");
// let song7 = new Song ("Radiohead", "High and Dry", "Track 7", "Radiohead_HighandDry.mp3");
// let song8 = new Song ("Young The Giant", "Cough Syrup", "Track 8", "YoungTheGiant_CoughSyrup.mp3");
// let song9 = new Song ("Guster", "Amsterdam", "Track 9", "Guster_Amsterdam.mp3");
// let song10 = new Song ("Interpol", "Slow Hands", "Track 10", "Interpol_SlowHands.mp3");
// let song11 = new Song ("Green Day", "American Idiot", "Track 11", "GreenDay_AmericanIdiot.mp3");
// let song12 = new Song ("Lit", "My Own Worst Enemy", "Track 12", "Lit_MyOwnWorstEnemy.mp3");
// let song13 = new Song ("Live", "I Alone", "Track 13", "Live_IAlone.mp3");
// let song14 = new Song ("The Red Jumpsuit Apparatus", "Face Down", "Track 14", "TheRedJumpsuitApparatus_FaceDown.mp3");
// let song15 = new Song ("The Verve", "Bitter Sweet Symphony", "Track 15", "TheVerve_BitterSweetSymphony.mp3");

//// my new Audio variable  ////

// let myAudio = new Audio();

//// my new songs turned into an array ////

// let tracks4JukeBox = [song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song15];

//// my constructor for the JukeBox ////

// function JukeBox(){

//     let index = 0;

//     this.displaySongInPlayer = function(){
//             songArtist.innerHTML = tracks4JukeBox[index].artist;
//             songTitle.innerHTML = tracks4JukeBox[index].songName;
//             trackNum.innerHTML = tracks4JukeBox[index].trackNumber;
//     }

//     this.previousSong = function(){
//         index = index - 1;
//         if(index < 0){
//             index = tracks4JukeBox.length-1;
//         }
//         myAudio.src = tracks4JukeBox[index].songSource;
//         this.displaySongInPlayer();
//         myAudio.play();
//     }
    
//     this.pauseSong = function(){
//         myAudio.pause();
//     }

//     this.playSong = function(){
//         myAudio.src = tracks4JukeBox[index].songSource;
//         this.displaySongInPlayer();
//         myAudio.play();
//     }

//     this.nextSong = function(){
//         index = index + 1;
//         if(index > tracks4JukeBox.length-1){
//             index = 0;
//         }
//         myAudio.src = tracks4JukeBox[index].songSource;
//         this.displaySongInPlayer();
//         myAudio.play();
//     } 

//     this.randomSong = function(){
//         let index = Math.floor(Math.random() * tracks4JukeBox.length);
//         myAudio.src = tracks4JukeBox[index].songSource;
//         songArtist.innerHTML = tracks4JukeBox[index].artist;
//         songTitle.innerHTML = tracks4JukeBox[index].songName;
//         trackNum.innerHTML = tracks4JukeBox[index].trackNumber;
//         myAudio.play();
//     } 
// }

//// this is variable for the jukebox

// let sampleSongs = new JukeBox();

//// this is to display song info
//   in player as a default when 
//   you open the browser

// sampleSongs.displaySongInPlayer();

//// my button event listeners ////

// prevButton.addEventListener("click", function(){
//     prevButton.style.backgroundColor = "#0c7a9b";//active color
//     pauseButton.style.backgroundColor = "#4cc0ef";
//     playButton.style.backgroundColor = "#4cc0ef";
//     nextButton.style.backgroundColor = "#4cc0ef";
//     randomButton.style.backgroundColor = "#4cc0ef";
//     sampleSongs.previousSong();
// })

// pauseButton.addEventListener("click", function(){
//     prevButton.style.backgroundColor = "#4cc0ef";
//     pauseButton.style.backgroundColor = "#0c7a9b";//active button
//     playButton.style.backgroundColor = "#4cc0ef";
//     nextButton.style.backgroundColor = "#4cc0ef";
//     randomButton.style.backgroundColor = "#4cc0ef";
//     sampleSongs.pauseSong();
// })

// playButton.addEventListener("click", function(){
//     prevButton.style.backgroundColor = "#4cc0ef";
//     pauseButton.style.backgroundColor = "#4cc0ef";
//     playButton.style.backgroundColor = "#0c7a9b";//active button
//     nextButton.style.backgroundColor = "#4cc0ef";
//     randomButton.style.backgroundColor = "#4cc0ef";
//     sampleSongs.playSong();
// })

// nextButton.addEventListener("click", function(){
//     prevButton.style.backgroundColor = "#4cc0ef";
//     pauseButton.style.backgroundColor = "#4cc0ef";
//     playButton.style.backgroundColor = "#4cc0ef";
//     nextButton.style.backgroundColor = "#0c7a9b";//active button
//     randomButton.style.backgroundColor = "#4cc0ef";
//     sampleSongs.nextSong();
// })

// randomButton.addEventListener("click", function(){
//     prevButton.style.backgroundColor = "#4cc0ef";
//     pauseButton.style.backgroundColor = "#4cc0ef";
//     playButton.style.backgroundColor = "#4cc0ef";
//     nextButton.style.backgroundColor = "#4cc0ef";
//     randomButton.style.backgroundColor = "#0c7a9b";//active button
//     sampleSongs.randomSong();
// })

// myAudio.addEventListener("ended", function(){
//     sampleSongs.nextSong();
// })

////////////////// The End //////////////////////
