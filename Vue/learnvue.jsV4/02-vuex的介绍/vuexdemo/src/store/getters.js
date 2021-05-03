export default {
  powerCounter(state) {
    return state.counter ** 2
  },
  more20Stu(state) {
    // 学生状态中大于20的 当其他组件也如此需要时需要重复
    return state.students.filter(s => s.age >= 20)
  },
  // 添加参数
  more20StuLength(state, getters) {
    return getters.more20Stu.length
  },
  moreAgeStu: state => age => state.students.filter(s => s.age >= age),
  
}