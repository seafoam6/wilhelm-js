(function(){
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'wilhelm.mp3');
  var isPlaying = false;
  var imgs = document.querySelectorAll("img");
  var oldSrcs = [];

  for(var i = 0; i < imgs.length; i++) {
    oldSrcs.push(imgs[i].getAttribute("src"));
  }

  window.onresize = function() {
    var resizeTo;

    if (!isPlaying){
      isPlaying=true;
      audioElement.play();
      isPlaying=false;
    }

    oldSrcs.forEach(function(el, index) {
      imgs[index].setAttribute("src","http://placecage.com/c/" + imgs[index].offsetWidth + "/" + imgs[index].offsetHeight);
    });

    if(resizeTo) clearTimeout(resizeTo);
    resizeTo = setTimeout(function() {
      oldSrcs.forEach(function(el,index) {
        imgs[index].setAttribute("src",el);
      });
    }, 500);
  };

})();