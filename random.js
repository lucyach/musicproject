var clientId = "mPL3RHiVAsMFWRG_OVWD8_GwQ0Yd8yHYLJI45aS-XmTgKO_XrQa5FIjGX8KpBr-g";
var accessToken = "?access_token=DpmCWkS2vpQeg8hMuPAQVRLNBL-DCRm2xbAfpJ-8qLEhINdbcqVrbcnv4OLETbLf";
var clientSecret = "G5xk8ibbHyFw7CQf_Gg6a7Z2zG2BAJbmGKNC06_xNNDWvkr2EuqDkbC2avIefvUusy2nu94I4xZ1OVrOuYJCaA";
var x = new XMLHttpRequest();
var url = "https://api.genius.com/songs/";

var listOfSongs = ["Prom Dress by mxmtoon", "I Love Us by the Regrettes", "Fallingforyou by the 1975", "Candlelight by Reliant K", "Gloom Boys by Waterparks", "Lake Effect Kid by Fall Out Boy", "Buddy Holly by Weezer", "Stella by All Time Low", "Are You Gonna be My Girl by Jet", "Kathleen by Catfish and the Bottlemen", "Lose Lose Lose by SWMRS", "Lavender by Two Door Cinema Club"];
var songIds = ["4534657", "5775133", "213115", "1168656", "2894352", "3915129", "76794", "380174", "137919", "446417", "4123636", "2880271"];
var songArtwork = [];
var songUrl;
var clicks = 0;


function pickRandom() {
    clicks += 1;
    var last = 0;

    var random;
    random = Math.floor((Math.random(0,listOfSongs.length)*listOfSongs.length));
    document.getElementById("randomSong").innerHTML = listOfSongs[random];

    x.open("GET", url + songIds[random] + accessToken, false);
    x.send();
    var response = x.response;
    var json = JSON.parse(response);
    var songArtworkUrl = json["response"]["song"]["song_art_image_thumbnail_url"];
    songUrl = (json["response"]["song"]["url"]);
    var listElement = document.getElementById("randomSongsList");

    var eventCanceller;
    var icon;
    var iconLink;
    if (clicks > 2) {
        iconLink.removeEventListener("click", eventCanceller);
    }

    if (clicks < 2) {
        var last = random;
        iconLink = document.createElement("BUTTON");
        icon = document.createElement("I");
        var image = document.createElement("IMG");
        var link = document.createElement("A");
        link.href = songUrl;
        var imageDiv = document.createElement("DIV");
        image.src = songArtworkUrl;
        link.appendChild(image);
        imageDiv.appendChild(link);
        
        var textLine = document.createElement("DIV");
        icon.className = "fa fa-plus-circle fa-2x";
        iconLink.appendChild(icon);
        var id = songIds[random];
        iconLink.className = "icon-link";
        eventCanceller = onClick.bind(this, songIds[random]);
        iconLink.addEventListener("click", eventCanceller, false);
        textLine.appendChild(iconLink);
        imageDiv.appendChild(textLine);
        listElement.append(imageDiv);

    } else {
        var imageDiv = document.createElement("DIV");
        iconLink = document.createElement("BUTTON");
        iconLink.removeEventListener("click", eventCanceller);
        var image = document.getElementsByTagName('img')[0];
        image.src = songArtworkUrl;
        var textLine = document.createElement("DIV");
        id = songIds[random];
        eventCanceller = onClick.bind(this, songIds[random]);
        iconLink.addEventListener("click", onClick.bind(this, songIds[random]), false);
        textLine.appendChild(iconLink);
        imageDiv.appendChild(textLine);
        listElement.append(imageDiv);
        
    }
}


function onClick(addToPlaylistId) {
    var localPlaylist = JSON.parse(localStorage.getItem("myPlaylist"));
    var myPlaylist = [];
    if (localPlaylist != null) {
        for (var i = 0; i < localPlaylist.length; i++) {
            myPlaylist.push(localPlaylist[i]);
        }
    }
    myPlaylist.push(addToPlaylistId);
    localStorage.setItem('myPlaylist', JSON.stringify(myPlaylist));
}
