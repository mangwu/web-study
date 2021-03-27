# JavaScript视频和音频API

## HTML5自带API

### 视频

+ 使用\<video\>元素和\<audio\>元素

+ ```html
  <video controls>
    <source src="rabbit320.mp4" type="video/mp4">
    <source src="rabbit320.webm" type="video/webm">
    <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
  </video>
  ```

+ ##### controls属性会启用默认的播放器控件，没有该属性，就不会显示控件

#### HTMLMediaElement API

+ HTML5的规范
+ HTMLMediaElement API提供允许以编程方式来控制视频和音频播放的功能
  + HTMLMediaElement.platy()
  + HTMLMediaElement.pause()

#### 一般播放器格式

```HTML
<div class="player">
  <video controls>
    <source src="video/sintel-short.mp4" type="video/mp4">
    <source src="video/sintel-short.mp4" type="video/webm">
    <!-- fallback content here -->
  </video>
  <div class="controls">
    <button class="play" data-icon="P" aria-label="play pause toggle"></button>
    <button class="stop" data-icon="S" aria-label="stop"></button>
    <div class="timer">
      <div></div>
      <span aria-label="timer">00:00</span>
    </div>
    <button class="rwd" data-icon="B" aria-label="rewind"></button>
    <button class="fwd" data-icon="F" aria-label="fast forward"></button>
  </div>
</div>
```

+ 整个视频播发器由一个div包装，类名为player
+ videa属性包含多个source元素这是常规的必写，用于提供不同的视频格式
+ videa下方的控件HTML div元素是要重点关注的
  + 2个button，1个计数器，2个button
  + 每个button都有一个class名
    + 一个data-icon属性决定按钮显示的图标，'P'是暂停图标
    + 一个aria-label属性为每一个按钮提供按钮描述
  + 一个计数器使用div元素包围
    + 类名为timer
    + 中间包含一个额外的div用于创建水平随时间增加的进度条
    + 一个span元素用于包含流逝时间的分钟和秒

#### CSS构造

##### .controls样式

```css
.controls {
  visibility: hidden;
  opacity: 0.5;
  width: 400px;
  border-radius: 10px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  margin-left: -200px;
  background-color: black;
  box-shadow: 3px 3px 5px black;
  transition: 1s all;
  display: flex;
}
.player:hover .controls, player:focus .controls {
  opacity: 1;
}
```

+ visibility设置为hidden，隐藏自定义控件的意义在于
  + 在稍后的JavaScript中，将控件设置为visible，并移除video的controls属性
  + 在后续JS中这样做是为了保证如果自定义控件不可用（js未加载）的就可以使用原生控件
+ 注意自定义控件的位置为绝对位置，采用弹性盒子布局

+ 控件的透明度为opacity:0.5, 当鼠标悬停或聚焦到播放器时控件才变为不透明

##### 控件按钮

```css
@font-face {
   font-family: 'HeydingsControlsRegular';
   src: url('fonts/heydings_controls-webfont.eot');
   src: url('fonts/heydings_controls-webfont.eot?#iefix') format('embedded-opentype'),
        url('fonts/heydings_controls-webfont.woff') format('woff'),
        url('fonts/heydings_controls-webfont.ttf') format('truetype');
   font-weight: normal;
   font-style: normal;
}

button:before {
  font-family: HeydingsControlsRegular;
  font-size: 20px;
  position: relative;
  content: attr(data-icon);
  color: #aaa;
  text-shadow: 1px 1px 0px black;
}
```

+ @font-face块导入自定义web字体
  + HeydingsControlRegular是一种**图标字体**
  + 字母表中都是常用图标，使用dara-icon调用
+ 按钮选择器使用::before, 选择在按钮元素之前的显示内容
  + 使用content属性将显示内容设置为data-icon的属性值
  + font-family将自定义web字体应用于按钮上，data-icon的’P'值对应播放图标

##### 进度条

```css
.timer {
  line-height: 38px;
  font-size: 10px;
  font-family: monospace;
  text-shadow: 1px 1px 0px black;
  color: white;
  flex: 5;
  position: relative;
}

.timer div {
  position: absolute;
  background-color: rgba(255,255,255,0.2);
  left: 0;
  top: 0;
  width: 0;
  height: 38px;
  z-index: 2;
}

.timer span {
  position: absolute;
  z-index: 3;
  left: 19px;
}
```

+ 外部.timer的flex值为5，占据控件栏大部分宽度
+ 内部div设置为绝对定位于外部的顶部，初始宽度为0，随时间JS动态增加其宽度
+ span是位于计数器栏的左侧附近，用于显示数字时间变化
+ z-index设置便于进度条显示在最上层，内部div显示在下层

##### 实现JS



