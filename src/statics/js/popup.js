(function(){
  // 右上-当前tab url二维码
  chrome.runtime.sendMessage({'type':'tabinfo'}, function(response){});
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    var qrcode = new QRCode("qr", {
      text: message.url,
      width: 200,
      height: 200,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.L
    });
  });

  document.getElementById('github').onclick = function(){
    chrome.tabs.create({url: document.getElementById('github').href});
  };
  
})();
