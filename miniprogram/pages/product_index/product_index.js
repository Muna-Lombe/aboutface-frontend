// pages/product_index/product_index.js
Page({

  /**
   * Page initial data
   */
  data: {
    slider:[ 
      {'img':'../../images/makearoutinebanner.png'},
      {'img':'../../images/compareproductsbanner.png'}
    ]
  },

  clickBanner: function(e) {
    let index = e.currentTarget.dataset.index
    if (index === 0) {
      console.log(index)
      wx.switchTab({
        url: '/pages/routine_index/routine_index'
      }) 
    } 
    else if (index === 1) {
      console.log(index)
      wx.switchTab({
        url: '/pages/product_compare/product_compare'
      }) 
    }
  },

  goToShow: function(){
    wx.navigateTo({
      url: '../miniprogram/pages/product_show/product_show',
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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