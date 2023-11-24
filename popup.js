let enteredLink = "";


function submitLink(event) {
    // assigns value passed in from link field in popup.html
    enteredLink = document.getElementById("link").value;
    enteredLink = enteredLink.replace(/https:\/\/www.youtube.com\//g,"");
    if (enteredLink.includes("watch")) {
        enteredLink = enteredLink.replace(/watch\?v=/g,"");
    } else if (enteredLink.includes("shorts")) {
        enteredLink = enteredLink.replace(/shorts\//g,"");
    } else {

    }
    createPlayer(enteredLink);
    // DEBUG, printing out value of enteredLink
    console.log(enteredLink);
    // prevents button press to send to new page
    event.preventDefault();
    // resets link field to empty string
    document.getElementById("link").value = "";
}

// DEBUG, printing out value of enteredLink every second
setInterval(() => {console.log(enteredLink)}, 1000);

function createPlayer(videoId) { 
    var _player = new YT.Player(playerId, { 
     height: '390', 
     width: '640', 
     videoId: videoId, 
     events: { 
      'onReady': onPlayerReady, 
      'onStateChange': onPlayerStateChange 
     }
    });
    playersArr.push(_player);
   }