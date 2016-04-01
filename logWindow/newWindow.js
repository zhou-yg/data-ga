console.log('new window');
var current = document.querySelector('.current');

var port = chrome.runtime.connect();
port.onMessage.addListener(function (m) {
  console.log(m);

  current.innerText = m;

});

port.postMessage('from newWindow');
