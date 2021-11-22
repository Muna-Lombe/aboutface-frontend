// pages/splash_page/splash_page.js
let app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  getuserProfile: function(e) {
    wx.getUserProfile({
      desc:'Get User Profile',
      success: (res) => {
        // console.log(res);
        const userdata = res.userInfo;
        // console.log(userdata)
        getApp().globalData.userProfile = userdata;
        wx.switchTab({
            url: '../product_index/product_index',
        })
      },
    })
  },
  
  getProducts: function(){
    

      // while (getApp().globalData.loginres == 0) {
      //   console.log("waiting for login")
      // }
      const url = app.globalData.url
      const headers = app.globalData.headers;
      wx.request({
        url: `${url}/api/v1/products`,
        header: headers,
        success(res){
          wx.hideLoading({})
          const products = res.data.products
          console.log('product index res',res)
          function compare(a, b) {
            if (a.name > b.name) return 1;
            if (b.name > a.name) return -1;
            return 0;
          }
          const sortedProducts = products.sort(compare)
          app.globalData.products = sortedProducts
          wx.switchTab({
            url: '/pages/product_index/product_index',
          })
        }
      })
  },

  onLoad: function (options) {
      // wx.showLoading({})
      // this.getProducts()
      const that = this
      setTimeout(() => {
        that.getProducts()
      }, 5000);
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})