document.addEventListener('DOMContentLoaded', function () {

  var body = document.body;

  function sendMessage(gaStr) {
    var port = chrome.runtime.connect();
    port.onDisconnect.addListener(function () {
      console.log('断开了');
    });
    port.postMessage(gaStr);
  }

  sendMessage('init');

  body.addEventListener('mouseover', onMouseOver);
  function onMouseOver(e) {
    var ga = e.target.getAttribute('data-ga');
    if (!ga) {
      return;
    }
    console.log(ga);

    sendMessage(ga);
  }
});