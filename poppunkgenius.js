var clientId = "mPL3RHiVAsMFWRG_OVWD8_GwQ0Yd8yHYLJI45aS-XmTgKO_XrQa5FIjGX8KpBr-g";
var accessToken = "?access_token=DpmCWkS2vpQeg8hMuPAQVRLNBL-DCRm2xbAfpJ-8qLEhINdbcqVrbcnv4OLETbLf";
var clientSecret = "G5xk8ibbHyFw7CQf_Gg6a7Z2zG2BAJbmGKNC06_xNNDWvkr2EuqDkbC2avIefvUusy2nu94I4xZ1OVrOuYJCaA";
var x = new XMLHttpRequest();
var url = "https://api.genius.com/songs/";
var songNames = ["Dear Maria, Count Me In by All Time Low", "Gives You Hell by The All-American Rejects", "Welcome To The Black Parade by My Chemical Romance", "American Idiot by Green Day", "All The Small Things by blink-182", "The Anthem by Good Charlotte", "Check Yes, Juliet by We the Kings", "1985 by Bowling For Soup", "Stacy's Mom by Fountains of Wayne"];
var songIds = ["407417", "376579", "133519", "72937", "62154", "150224", "481698", "79851", "254788"];
var songNames2 = ["Lying Is the Most Fun... by Panic! At The Disco", "Northern Downpour by Panic! At The Disco", "What A Catch, Donnie by Fall Out Boy", "Thnks fr th Mmrs by Fall Out Boy", "Welcome To The Black Parade by My Chemical Romance", "I'm Not Okay by My Chemical Romance"];
var songIds2 = ["154483", "184048", "138493", "131359", "133519", "133426"];
var songNames3 = ["DONTTRUSTME by 3OH!3", "Sk8er Boi by Avril Lavigne", "Break Your Little Heart by All Time Low", "Wolf In Sheep's Clothing by Set it Off", "I Miss You by blink-182", "In The End by LINKIN PARK", "I Don't Wanna Be In Love by Good Charlotte", "Sugar, We're Goin Down by Fall Out Boy", "Teenagers by My Chemical Romance", "Dirty Little Secret by the All-American Rejects", "Still Into You by Paramore", "I Write Sins Not Tragedies by Panic! At The Disco", "Basket Case by Green Day"];
var songIds3 = ["105094", "163793", "378306", "603180", "61981", "49719", "396337", "79158", "108282", "77010", "135048", "194045", "63323"];
var songArtwork = [];
var songUrl = [];
var songArtwork2 = [];
var songUrl2 = [];
var songArtwork3 = [];
var songUrl3 = [];


for (var i = 0; i < songIds.length; i++){
    x.open("GET", url + songIds[i] + accessToken, false);
    x.send();
    var response = x.response;
    var json = JSON.parse(response);
    songArtwork.push(json["response"]["song"]["song_art_image_thumbnail_url"]);
    songUrl.push(json["response"]["song"]["url"]);
}
window.onload = addImages;

function addImages() {
    var listElement = document.getElementById("popPunkSongsList");
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
    addImages2();
    addImages3();
}

for (var i = 0; i < songIds2.length; i++){
    x.open("GET", url + songIds2[i] + accessToken, false);
    x.send();
    var response = x.response;
    var json = JSON.parse(response);
    songArtwork2.push(json["response"]["song"]["song_art_image_thumbnail_url"]);
    songUrl2.push(json["response"]["song"]["url"]);
}


function addImages2() {
    var listElement = document.getElementById("emoTrinitySongsList");
    for (var i = 0; i < songIds2.length; i++) {
        var image = document.createElement("IMG");
        var iconLink = document.createElement("BUTTON");
        var link = document.createElement("A");
        link.href = songUrl2[i];
        var imageDiv = document.createElement("DIV");
        image.src = songArtwork2[i];
        link.appendChild(image);
        imageDiv.appendChild(link);
        var textLine = document.createElement("DIV");
        var icon = document.createElement("I");
        icon.className = "fa fa-plus-circle fa-2x";
        iconLink.appendChild(icon);
        var id = songIds2[i];
        iconLink.addEventListener("click", onClick.bind(this, id),false);
        textLine.appendChild(iconLink);
        var nameString = document.createElement("P");
        nameString.innerHTML = songNames2[i];
        textLine.appendChild(nameString);
        imageDiv.appendChild(textLine);
        listElement.append(imageDiv);
    }
}


for (var i = 0; i < songIds3.length; i++){
    x.open("GET", url + songIds3[i] + accessToken, false);
    x.send();
    var response = x.response;
    var json = JSON.parse(response);
    songArtwork3.push(json["response"]["song"]["song_art_image_thumbnail_url"]);
    songUrl3.push(json["response"]["song"]["url"]);
}


function addImages3() {
    var listElement = document.getElementById("bandsSongsList");
    for (var i = 0; i < songIds3.length; i++) {
        var image = document.createElement("IMG");
        var iconLink = document.createElement("BUTTON");
        var link = document.createElement("A");
        link.href = songUrl3[i];
        var imageDiv = document.createElement("DIV");
        image.src = songArtwork3[i];
        link.appendChild(image);
        imageDiv.appendChild(link);
        var textLine = document.createElement("DIV");
        var icon = document.createElement("I");
        icon.className = "fa fa-plus-circle fa-2x";
        iconLink.appendChild(icon);
        var id = songIds3[i];
        iconLink.addEventListener("click", onClick.bind(this, id),false);
        textLine.appendChild(iconLink);
        var nameString = document.createElement("P");
        nameString.innerHTML = songNames3[i];
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


