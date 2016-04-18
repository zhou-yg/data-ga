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

    sendMessage({
      title:document.title,
      ga:ga
    });
  }
});

var s = document.createElement('script');
s.type = 'text/javascript';

s.src = chrome.extension.getURL('inject/monitorError.js');
(document.head || document.documentElement).appendChild(s);