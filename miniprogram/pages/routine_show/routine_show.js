// pages/routine_show/routine_show.js
Page({

  /**
   * Page initial data
   */
  data: {
    showModal: false,
    seeModal: false,
  },

  editModal: function() {
    this.setData({
      showModal: true,
    })
    
  },

  deleteModal: function() {
    this.setData({
      seeModal: true,
    })
    
  },

    hideModal: function() {
      this.setData({
        showModal: false,
        seeModal: false,
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