var clientId = "mPL3RHiVAsMFWRG_OVWD8_GwQ0Yd8yHYLJI45aS-XmTgKO_XrQa5FIjGX8KpBr-g";
var accessToken = "?access_token=DpmCWkS2vpQeg8hMuPAQVRLNBL-DCRm2xbAfpJ-8qLEhINdbcqVrbcnv4OLETbLf";
var clientSecret = "G5xk8ibbHyFw7CQf_Gg6a7Z2zG2BAJbmGKNC06_xNNDWvkr2EuqDkbC2avIefvUusy2nu94I4xZ1OVrOuYJCaA";
var x = new XMLHttpRequest();
var url = "https://api.genius.com/songs/";
var songNames = ["Take On Me by a-ha", "Rock Lobster by the B-52s", "White Wedding by Billy Idol", "Lovesong by the Cure", "People Are People by Depeche Mode", "Love Will Tear Us Apart by Joy Division", "Safety Dance by Men Without Hats", "With or Without You by U2"];
var songIds = ["118904", "385682", "137537", "61506", "424202", "96379", "89888", "132487"];
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
    var listElement = document.getElementById("EightiesPopSongsList");
    for (var k = 0; k < songIds.length; k++) {
        var image = document.createElement("IMG");
        var iconLink = document.createElement("BUTTON");
        var link = document.createElement("A");
        link.href = songUrl[k];
        var imageDiv = document.createElement("DIV");
        image.src = songArtwork[k];
        link.appendChild(image);
        imageDiv.appendChild(link);
        var textLine = document.createElement("DIV");
        var icon = document.createElement("I");
        icon.className = "fa fa-plus-circle fa-2x";
        iconLink.appendChild(icon);
        var id = songIds[k];
        iconLink.addEventListener("click", onClick.bind(this, id),false);
        textLine.appendChild(iconLink);
        var nameString = document.createElement("P");
        nameString.innerHTML = songNames[k];
        textLine.appendChild(nameString);
        imageDiv.appendChild(textLine);
        listElement.append(imageDiv);
    }
}



function onClick(id) {
    var localPlaylist = JSON.parse(localStorage.getItem("myPlaylist"));
    var myPlaylist = [];
    if (localPlaylist != null) {
        for (var j = 0; j < localPlaylist.length; j++) {
            myPlaylist.push(localPlaylist[j]);
        }
    }
    myPlaylist.push(id);
    localStorage.setItem('myPlaylist', JSON.stringify(myPlaylist));
}

