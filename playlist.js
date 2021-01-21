var clientId = "mPL3RHiVAsMFWRG_OVWD8_GwQ0Yd8yHYLJI45aS-XmTgKO_XrQa5FIjGX8KpBr-g";
var accessToken = "?access_token=DpmCWkS2vpQeg8hMuPAQVRLNBL-DCRm2xbAfpJ-8qLEhINdbcqVrbcnv4OLETbLf";
var clientSecret = "G5xk8ibbHyFw7CQf_Gg6a7Z2zG2BAJbmGKNC06_xNNDWvkr2EuqDkbC2avIefvUusy2nu94I4xZ1OVrOuYJCaA";
var x = new XMLHttpRequest();
var url = "https://api.genius.com/songs/";

window.onload = displayPlaylist;

function displayPlaylist() {
    var playlist = JSON.parse(localStorage.getItem('myPlaylist'));

    var songArtwork = [];
    var songUrl = [];
    var songNames = [];

    for (let i = 0; i < playlist.length; i++){
        x.open("GET", url + playlist[i] + accessToken, false);
        x.send();
        var response = x.response;
        var json = JSON.parse(response);
        songArtwork.push(json["response"]["song"]["song_art_image_thumbnail_url"]);
        songUrl.push(json["response"]["song"]["url"]);
        songNames.push((json["response"]["song"]["title"]) + " by " + json["response"]["song"]["primary_artist"]["name"]);
    }

    var listElement = document.getElementById("playlist");
    for (var i = 0; i < playlist.length; i++) {
        var imageDiv = document.createElement("DIV");
        var image = document.createElement("IMG");
        image.src = songArtwork[i];
        var id = playlist[i];
        var nameString = document.createElement("P");
        nameString.innerHTML = songNames[i];
        imageDiv.append(image);
        imageDiv.append(nameString);
        listElement.append(imageDiv);
    }
}

function clearPlaylist() {
    localStorage.clear();
    location.reload();
}