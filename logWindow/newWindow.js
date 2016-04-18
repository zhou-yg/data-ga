console.log('new window');
var currentTitle = document.querySelector('.current-title');
var finalGa = document.querySelector('.final-ga');

var record = document.querySelector('#record');

currentTitle.innerText = document.title;

var port = chrome.runtime.connect();

var  title =

port.onMessage.addListener(function (m) {
  console.log(m);

  if(m.m) {
    title = m.m.title;
    currentTitle.innerText = title;

    finalGa.innerText = title + '|' + m.m.ga;
  }
  if(m.req){
    record.value += title + '|' + m.req.ga + '\n' + '-------------- \n';
  }
});

port.postMessage('from newWindow');
