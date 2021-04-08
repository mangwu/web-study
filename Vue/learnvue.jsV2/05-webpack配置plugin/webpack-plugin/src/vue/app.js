// 模板和代码没有分离
export default {
  template: `
  <div id='app'>
    <h2>
      {{message}}
    </h2>
    <p>
      {{name}}
    </p>
  </div>
  `,
  // 包括方法都可以抽取 
  data() {
    return {
      message: 'Hello, webpack',
      name: 'mangwu'
    }
  }
}