const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = "以下是一个动态列表。点击列表任意位置可添加新的列表项。点击已有列表项可修改";

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
    const listItem = document.createElement('li');
    const listContent = prompt('在列表中添加什么?');
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = function(e) {
        e.stopPropagation();
        const listContent = prompt('为列表项输入新内容');
        this.textContent = listContent;
    };

};

// const list =  document.createElement('ul');
// const p = document.createElement('p');
// const html = document.querySelector('html');

// p.textContent = "动态列表，可以点击添加修改";

// document.body.appendChild(p);
// document.body.appendChild(list);

// html.onclick = function () {
//     const li = document.createElement('li');
//     li.textContent = prompt('输入列表内容：');
//     list.appendChild(li);

//     li.onclick = function(e) {
//         e.stopPropagation();
//         this.textContent = prompt('请输入新内容');
//     };
// };