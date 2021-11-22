//app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    

    const that = this
    // 登录
    wx.login({
      success: res => {
        console.log(res)
        const durl = "http://121.42.242.133"
        const lurl = "http://localhost:3000"
        wx.request({
          url: `${lurl}/api/v1/login`,
          method: 'POST',
          data:{code:res.code},
          success(res){
            that.globalData.loginres = 1
            console.log("login res",res)
            that.globalData.userInfo = res.data.user
            that.globalData.headers = res.data.headers
            //setTimeout(() => {
            //}, 1500);
            
          }
        })
        // send the code to the backend
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
    // url:"http://121.42.242.133",
    url:"http://localhost:3000",
    userProfile:"",
    userInfo:"",
    headers:"",
    language: "EN",
    products: "",
    loginres: 0,
    products: wx.getStorageSync('products')
  },
  
})