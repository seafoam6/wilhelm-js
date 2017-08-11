(function(){
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'wilhelm.mp3');
  var isPlaying = false;

  window.onresize = function() {
    if (!isPlaying){
      isPlaying=true;
      audioElement.play();
      isPlaying=false;
    }
  };
  
})();