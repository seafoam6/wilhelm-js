$(document).ready(function(){
  var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'wilhelm.mp3');
        var isPlaying = false
  $(window).resize(function() {
    if (!isPlaying){
      isPlaying=true;
      audioElement.play();
      isPlaying=false;
    }
  });
});