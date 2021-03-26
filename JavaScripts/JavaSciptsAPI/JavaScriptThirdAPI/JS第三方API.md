# 第三方API

第三方提供的API，允许通过JS访问其功能

### 特性

+ #### 根植于第三方服务器

  + 通过JS获取到第三方服务器的功能接口上

  + 例如百度地图的第三方API开放JS库

    ```html
    <script type="text/javascript" 
            src="//api.map.baidu.com/api?v=2.0&ak=2lDaoeYGnzWbmnczD34Vr41vyCUC9plW"></script>
    ```

  + 然后就可以使用库中的对象了

    ```js
    // 百度地图API功能
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.331398,39.897445);
    map.centerAndZoom(point,12);
    
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
      if(this.getStatus() == BMAP_STATUS_SUCCESS){
        var mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
        alert('您的位置：'+r.point.lng+','+r.point.lat);
      }
      else {
        alert('failed'+this.getStatus());
      }        
    },{enableHighAccuracy: true})
    ```

  + 利用BMap下的Map对象新建一个地图对象

  + 利用BMap下的Point对象新建一个依据经度和纬度地理位置

  + 利用BMap下的Geolocation新建一个地理位置对象

  + geolocation调用获取当前位置的方法
  
  + ——————
  
  + 有些API要求向特定的URL模式发送http请求
  
    + 获取数据
    + 检索特定数据
    + 这种方式被称为RESTful api
  
+ #### API权限

  + 第三方api的权限系统

    + 倾向于使用关键代码来允许开发人员访问API功能

    + 如百度地图的API库的URL

      ```
      //api.map.baidu.com/api?v=2.0&ak=2lDaoeYGnzWbmnczD34Vr41vyCUC9plW
      ```

    + 提供给URL的参数是一个开发人员密钥ak = '密钥'

  + 使用密钥的原因

    + 使用API功能的人需要承担责任
    + 防止恶意使用API

  

