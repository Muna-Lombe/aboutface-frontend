// pages/routine_index/routine_index.js
const app = getApp()
const setUrl = app.globalData.url

Page({

  /**
   * Page initial data
   */
  data: {
    showModal: false,
  },

  openModal: function() {
    this.setData({
      showModal: true,
    })
  },

  hideModal: function() {
    this.setData({
      showModal: false,
    })
  },  

  /**
   * Lifecycle function--Called when page load
   */
  catchInput:function(e){
    // console.log(e.detail.value)
    this.setData({
      toGet: e.detail.value
    })
  },
  addRoutine:function(e){
    const headers = app.globalData.headers
    // console.log(this.data.toGet)
    const name = this.data.toGet
    const page = this
    // "name": "mid-year routine"
    wx.request({
      url:`${setUrl}/api/v1/routines`,
      header: headers,
      method: 'POST',
      data: {"name": name},
      success(res){
        // console.log(res),
        page.setData({
          showModal: false
        })
        page.onLoad()
      }
    })
  },

  goToShow: function(e){
    const id = e.currentTarget.id
    wx.navigateTo({
      url: `../routine_show/routine_show?id=${id}`,
    })
  },
  onLoad: function (options) {
    const page = this
    const headers = app.globalData.headers
    console.log("headers:",headers)
    wx.request({
      url: `${setUrl}/api/v1/routines`,
      header: headers,
      success(res){
        const routines = res.data.routines
        console.log(routines)
        page.setData({
          routines: routines
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
