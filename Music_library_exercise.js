var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  var play = library.playlists;
  for (var prop in play) {
    // printPlaylistDetails(prop);
    console.log(play[prop].id +": " + play[prop].name + " - " + play[prop].tracks.length + " " + Object.keys(play[prop])[2]);
  }
}

// var a = printPlaylists();
// console.log(a);


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var tra = library.tracks;
  for (var prop in tra) {
    printTrackDetails(prop)
    // console.log(tra[prop].id + ": " + tra[prop].name + " by " + tra[prop].artist + "(" + tra[prop].album + ")");
  }
}

//printTracks()

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var play = library.playlists;
  // var trackVariable = library.tracks;
  console.log(play[playlistId].id +": " + play[playlistId].name + " - " + play[playlistId].tracks.length + " " + Object.keys(play[playlistId])[2]);

  var playlistTracks = play[playlistId].tracks;
  for (var i =0; i < playlistTracks.length; i++) {
    printTrackDetails(playlistTracks[i])
  }
}

function printTrackDetails(trackId) {
  var allTracks = library.tracks;
  var track = allTracks[trackId];
  var trackId = track.id;
  var trackName = track.name;
  var trackArtist = track.artist;
  var trackAlbum = track.album;

  console.log(trackId + ": " + trackName + " by " + trackArtist + "(" + trackAlbum + ")");
}


printPlaylist("p01");

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
  console.log(library.playlists[playlistId].tracks);
}

addTrackToPlaylist ("t02", "p02");

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

console.log(uid());

// adds a track to the library

var addTrack = function (name, artist, album) {
  var uniqueId = uid();
  library.tracks[uniqueId] = {id: uniqueId, name: name, artist: artist, album: album};
}

addTrack("Queen", "blabla", "ccc");
console.log(library.tracks);



// adds a playlist to the library

var addPlaylist = function (name) {
  var uniqueId = uid();
  library.playlists[uniqueId] = {id: uniqueId, name: name};
}

addPlaylist("Queen");
console.log(library.playlists);


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
