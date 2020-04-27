Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    count: Number,
    active: Number,
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    icon: [
      {
        normal: '/images/cloudshop.png',
        active: '/images/cloudshop-o.png'
      }
    ],
    list: [
      {
        url: "/pages/main/main"
      },
      {
        url: "/pages/shopCart/shopCart"
      },
      {
        url: "/pages/myUser/myUser"
      }
    ]
  },
  methods: {
    // 这里是一个自定义方法
    onChange(event) {
      let selectIndex = event.detail;
      wx.switchTab({
        url: this.data.list[selectIndex].url
      });
    }
  }
})