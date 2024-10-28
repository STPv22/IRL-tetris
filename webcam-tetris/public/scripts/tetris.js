function init() {
  var url = 'public/Tetris (USA).nes';
  var request = new XMLHttpRequest();
  request.responseType = 'arraybuffer';

  request.onload = function() {
    var buffer = request.response;
    var nes = new NesJs.Nes();

    nes.setRom(new NesJs.Rom(buffer));
    nes.setDisplay(new NesJs.Display(document.getElementById('gameCanvas')));
    nes.setAudio(new NesJs.Audio());

    window.onkeydown = function(e) { nes.handleKeyDown(e); };
    window.onkeyup = function(e) { nes.handleKeyUp(e); };

    nes.bootup();
    nes.run();
  };

  request.open('GET', url, true);
  request.send(null);
}