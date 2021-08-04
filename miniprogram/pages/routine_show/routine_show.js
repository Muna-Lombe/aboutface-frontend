// pages/routine_show/routine_show.js
let app = getApp()
let id = ''
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
  deleteData: function(e) {
    console.log(e)
    const url = app.globalData.url
    const headers = app.globalData.headers
    const setId = id
    console.log(setId)
      wx.request({
        url: `${url}/api/v1/routines/${setId}`,
        method: 'DELETE',
        header: headers,
        success(res) {
          console.log("success")
          console.log(res.data)
          wx.navigateBack({
            delta: 0,
          })
        }
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
    const id = options.id
    const page = this
    const url = app.globalData.url
    const headers = app.globalData.headers
    // console.log("headers:",headers)
    wx.request({
      url: `${url}/api/v1/routines/${id}`,
      header: headers,
      success(res){
        const routine = res.data.routine
        console.log("res:",res)
        page.setData({
          routine: routine
        })
      }
    })
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
