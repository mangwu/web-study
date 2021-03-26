// 获取元素引用
let myCanvas = document.querySelector('.myCanvas');

// 设置长宽
let width = myCanvas.width = window.innerWidth;
let height = myCanvas.height = window.innerHeight;

// 获取画布上下文
var ctx = myCanvas.getContext('2d');

// 背景
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);

// 设置画布原点
ctx.translate(width/2, height/2);

// 创建一个新的HTMLImageElement对象
var image = new Image();
image.src = 'walk-right.png';
image.onload = draw;

// 声明精灵和位置
var sprite = 0;
var posX = 0;
// draw函数
function draw() {
  // 清除画布 ,因为原点被修改为中心点，需要将矩形左上角点进行修正
  ctx.fillRect(-(width/2), -(height/2), width, height);
  // 使用drawImage()绘制图形
  /*
    sprite*102，裁剪第几个精灵
    102, 148裁剪大小
    0+ posX, -74 在画布坐标系中的坐标（原点为现在为中心点)，通过修改posX的值来修改绘制位置
    102, 148在画布中的尺寸（不变）
  */
  ctx.drawImage(image, (sprite*102), 0, 102, 148, 0+posX, -74, 102, 148);

  // 修改sprite的值
  /*
    posX % 13 == 0 表示每隔13帧更新一次精灵（也每隔1帧移动一次距离，但是13帧变换图像）
    13帧一次更新，那么每秒大概5帧
    因为只有六个精灵所以当精灵数等于5时重置为0
  */
  if (posX % 13 == 0) {
    if (sprite === 5) {
      sprite = 0;
    } else {
      sprite++;
    }
  }
  // 修改posX的值
  /* 
    每次posX的值变换（每13帧修改一次。那么每次向右移动的距离就会增加)
    为了防止posX过大，需要设置一个临界值（它最多走多远）重置
  */
  if (posX > width / 2) {
    // 新的位置,左侧边缘的X坐标
    let newStartPos = -((width/2) + 102); 
    // 因为每13帧变换一次图像，spirit的增加受posX的限制，需要让posX为13的倍数
    posX = Math.ceil(newStartPos / 13) * 13;
  } else {
    posX += 2;
  }

  window.requestAnimationFrame(draw);
}
