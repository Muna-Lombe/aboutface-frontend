// pages/splash_page/splash_page.js

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

  onLoad: function (options) {
    wx.getUserProfile({
      desc:'Get User Profile',
      success: (res) => {
        // console.log(res);
        const userdata = res.userInfo;
        // console.log(userdata)
        getApp().globalData.userProfile = userdata;
      },
    })
    // setTimeout(() => {
    //     wx.showLoading({
    //       title: 'Logging In',
    //       mask: true
    //     })
    // }, 3000);
   
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