var mapChange = 15;
// 滚轮方法
var scrollFunc = function (e) {  
  e = e || window.event;  
  if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件               
      if (e.wheelDelta > 0) { //当滑轮向上滚动时  
        if (mapChange < 20) {
          mapChange += 1;
        }
        console.log(mapChange);
        map.setZoom(mapChange);
      }  
      if (e.wheelDelta < 0) { //当滑轮向下滚动时  
        if (mapChange > 3) {
          mapChange -= 1;
        }
        console.log(mapChange);
        map.setZoom(mapChange);
      }  
  } else if (e.detail) {  //Firefox滑轮事件  
      if (e.detail> 0) { //当滑轮向下滚动时  
        mapChange += 1;
        console.log(mapChange);
      }  
      if (e.detail< 0) { //当滑轮向上滚动时  
        mapChange -= 1;
        console.log(mapChange);
      }  
  }  
} 
/*IE、Opera注册事件*/
if(document.attachEvent){
  document.attachEvent('onmousewheel',scrollFunc);
}
//Firefox使用addEventListener添加滚轮事件  
if (document.addEventListener) {//firefox  
  document.addEventListener('DOMMouseScroll', scrollFunc, false);  
}  
//Safari与Chrome属于同一类型
window.onmousewheel = document.onmousewheel = scrollFunc


// 百度地图API功能
var map = new BMap.Map("allmap");
var point;
var geolocation = new BMap.Geolocation();
geolocation.getCurrentPosition(function displayMap(r){
  if(this.getStatus() == BMAP_STATUS_SUCCESS){
    // 图标
    var mk = new BMap.Marker(r.point);
    map.addOverlay(mk);
    // 定位
    point = r.point;
    map.centerAndZoom(r.point, mapChange);
    // alert('您的位置：'+r.point.lng+','+r.point.lat);
  }
  else {
    alert('failed'+this.getStatus());
  }  
},{enableHighAccuracy: true})
//关于状态码
//BMAP_STATUS_SUCCESS	检索成功。对应数值“0”。
//BMAP_STATUS_CITY_LIST	城市列表。对应数值“1”。
//BMAP_STATUS_UNKNOWN_LOCATION	位置结果未知。对应数值“2”。
//BMAP_STATUS_UNKNOWN_ROUTE	导航结果未知。对应数值“3”。
//BMAP_STATUS_INVALID_KEY	非法密钥。对应数值“4”。
//BMAP_STATUS_INVALID_REQUEST	非法请求。对应数值“5”。
//BMAP_STATUS_PERMISSION_DENIED	没有权限。对应数值“6”。(自 1.1 新增)
//BMAP_STATUS_SERVICE_UNAVAILABLE	服务不可用。对应数值“7”。(自 1.1 新增)
//BMAP_STATUS_TIMEOUT	超时。对应数值“8”。(自 1.1 新增)

var allmap = document.querySelector('#allmap');
// 宽度和高度
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
allmap.style.width = WIDTH;
allmap.style.height = HEIGHT;
window.onresize = function() {
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
  allmap.style.width = WIDTH;
  allmap.style.height = HEIGHT;
}
