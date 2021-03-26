// 构造一个新3d场景
var scene = new THREE.Scene(); 

// 创建一个摄影机（视角），观察者
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 渲染器
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建魔方

// 魔方
var cube;

// 加载器，用于在场景中加载3d模型
var loader = new THREE.TextureLoader();

// 调用load方法加载模型
loader.load('metal003.png', function(texture) {
  // texture对象指明魔方每个面渲染2✖2的图片
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);

  // 创建形状和素材
  var geometry = new THREE.BoxGeometry(2.4, 2.4, 2.4);
  var material = new THREE.MeshLambertMaterial({
    map:texture, 
    shading: THREE.FlatShading
  })
  // 将形状和参数作为参数创建魔方
  cube = new THREE.Mesh(geometry, material);
  // 添加到场景
  scene.add(cube);
  // 绘制魔方
  draw();
})

// 为场景打光
// 柔性光（阳光)
var light = new THREE.AmbientLight('rgb(255, 105, 245)');
scene.add(light);
// 直射光(手电筒)
var spotLight = new THREE.SpotLight('rgb(105, 255, 255)');
spotLight.position.set( 100, 1000, 1000 );
spotLight.castShadow = true;
scene.add(spotLight);

// draw()函数
function draw(){
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);

  requestAnimationFrame(draw);

}


