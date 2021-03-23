// 是方法Promise.all()使用async语法格式
async function fetchAndDecode(url) {
  // 数据
  let response = await fetch(url);
  // 内容
  let content;
  if (response.headers.get('content-type').indexOf('image') != -1) {
    content = await response.blob();
  } else if (response.headers.get('content-type').indexOf('text') != -1) {
    content = await response.text();
  }

  return content;
}

// 展示资源
async function displayContent() {
  let coffee = fetchAndDecode('image/coffee.jpg');
  let tea = fetchAndDecode('image/tea.jpg')
  let description = fetchAndDecode('description.txt');

  let values = await Promise.all([coffee, tea, description]);
  console.log(values);
  // 获得url和资源
  let objectURL1 = URL.createObjectURL(values[0]);
  let objectURL2 = URL.createObjectURL(values[1]);
  let descText = values[2];
  // 元素 添加
  let image1 = document.createElement('img');
  let image2 = document.createElement('img');
  image1.src = objectURL1;
  image2.src = objectURL2;
  document.body.appendChild(image1);
  document.body.appendChild(image2);

  let para = document.createElement('p');
  para.textContent = descText;
  document.body.appendChild(para)
}

displayContent()
.catch((e) => {
  console.log(e.message);
})

// timeoutPromise
function timeoutPromise(interval) {
  return new Promise((resovle, reject) => {
    setInterval( () => {
      resovle('done');
    }, interval)
  });
}
// 
// 超时测试函数
async function timeTest() {
  await timeoutPromise(3000);
  await timeoutPromise(3000);
  await timeoutPromise(3000);
}

let startTime = Date.now();
timeTest().then(()=>{
  let finishTime = Date.now();
  let timeTaken = finishTime - startTime;
  alert('time taken in ms:' + timeTaken);
})

// 超时测试函数2
async function timeTest2() {
  const timeoutPromise1 = timeoutPromise(3000);
  const timeoutPromise2 = timeoutPromise(3000);
  const timeoutPromise3 = timeoutPromise(3000);

  await timeoutPromise1;
  await timeoutPromise2;
  await timeoutPromise3;
}

let startTime2 = Date.now();
timeTest2().then(()=> {
  let finishTime = Date.now();
  let timeTaken = finishTime - startTime2;
  alert('time taken in ms:' + timeTaken);
})

// 异步类的对象和方法

class Person {
  constructor(first, last, age,gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests; 
  }

  async greeting() {
    return await Promise.resolve("Hi! I 'm " + this.name.first);
  }

  farewell() {
    console.log(this.name.first + ' has left the building.')
  }
}

let han = new Person('han', 'Smith', 13, 'male', ['sking', 'music']);

// 调用异步方法
han.greeting().then((message)=> {
  console.log(message);
})