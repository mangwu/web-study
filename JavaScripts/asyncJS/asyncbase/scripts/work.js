// 计算一千万次Date;
onmessage = function(e) {
  for (var i = 0 ; i < 400000; i++) {
    var date = new Date();
    myDate = date;
    
  }
  postMessage(myDate);
}

