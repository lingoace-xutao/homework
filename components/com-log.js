// com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    userName: {
      type: String,
      value: 'skfhsf',
      observers: (oldValue, newValue) => {
        console.log('a', oldValue)
        console.log('b', newValue)
      },
    },
    age: Number,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
