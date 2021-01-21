var clientId = "mPL3RHiVAsMFWRG_OVWD8_GwQ0Yd8yHYLJI45aS-XmTgKO_XrQa5FIjGX8KpBr-g";
var accessToken = "?access_token=DpmCWkS2vpQeg8hMuPAQVRLNBL-DCRm2xbAfpJ-8qLEhINdbcqVrbcnv4OLETbLf";
var clientSecret = "G5xk8ibbHyFw7CQf_Gg6a7Z2zG2BAJbmGKNC06_xNNDWvkr2EuqDkbC2avIefvUusy2nu94I4xZ1OVrOuYJCaA";
var x = new XMLHttpRequest();
var url = "https://api.genius.com/songs/";

var songNames = ["I Write Sins Not Tragedies (A Fever You Can't Sweat Out 2005)", "Behind The Sea (Pretty. Odd. 2008)", "Hurricane (Vices & Virtues 2011)", "C'mon (2011)", "Vegas Lights (Too Weird To Live, Too Rare To Die 2013)", "LA Devotee (Death Of A Bachelor 2016)"];
var songIds = ["194045", "335452", "335504", "204154", "261810", "2378614"];
var songArtwork = [];
var songUrl = [];

for (var i = 0; i < songIds.length; i++){
    x.open("GET", url + songIds[i] + accessToken, false);
    x.send();
    var response = x.response;
    var json = JSON.parse(response);
    console.log(response);
    songArtwork.push(json["response"]["song"]["song_art_image_thumbnail_url"]);
    songUrl.push(json["response"]["song"]["url"]);
}

window.onload = addImages;

function addImages() {
    var listElement = document.getElementById("suggestedSongs");
    for (var i = 0; i < songIds.length; i++) {
        var image = document.createElement("IMG");
        var iconLink = document.createElement("BUTTON");
        var link = document.createElement("A");
        link.href = songUrl[i];
        var imageDiv = document.createElement("DIV");
        image.src = songArtwork[i];
        link.appendChild(image);
        imageDiv.appendChild(link);
        var textLine = document.createElement("DIV");
        var icon = document.createElement("I");
        icon.className = "fa fa-plus-circle fa-2x";
        iconLink.appendChild(icon);
        var id = songIds[i];
        iconLink.addEventListener("click", onClick.bind(this, id),false);
        textLine.appendChild(iconLink);
        var nameString = document.createElement("P");
        nameString.innerHTML = songNames[i];
        textLine.appendChild(nameString);
        imageDiv.appendChild(textLine);
        listElement.append(imageDiv);
    }
}



function onClick(id) {
    var localPlaylist = JSON.parse(localStorage.getItem("myPlaylist"));
    var myPlaylist = [];
    if (localPlaylist != null) {
        for (var i = 0; i < localPlaylist.length; i++) {
            myPlaylist.push(localPlaylist[i]);
        }
    }
    myPlaylist.push(id);
    localStorage.setItem('myPlaylist', JSON.stringify(myPlaylist));
}

