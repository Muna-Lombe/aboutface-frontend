// pages/routine_show/routine_show.js
let app = getApp()
let setId = ''
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
  catchInput:function(e){
    // console.log(e.detail.value)
    this.setData({
      toGet: e.detail.value
    })
  },
  confirmEdit: function(e) {
    // console.log(e)
    const data = {name: this.data.toGet}
    console.log("data", data)
    const routineID = this.data.routine.id
    // console.log(routineID)
    const url = app.globalData.url
    const headers = app.globalData.headers
    // console.log(url)
       wx.request({
        url: `${url}/api/v1/routines/${routineID}`,
        method: "PUT",
        data: data,
        header: headers,
        success(res) {
          console.log("success")
          console.log(res.data)
            wx.navigateBack({
               delta: 1,
            })
        }
      })
  },  
  deleteModal: function() {
    this.setData({
      seeModal: true,
    })
    
   },
  deleteData: function(e) {
    console.log(e)
    // console.log(id)
    const url = app.globalData.url
    const headers = app.globalData.headers
    const getId = setId
    console.log(setId)
      wx.request({
        url: `${url}/api/v1/routines/${getId}`,
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
  goToRoutines() {
    wx.switchTab({
      url: '/pages/routine_index/routine_index',
    })
  },
  actionOnProduct: function(e) {
    const page = this
    const command = app.globalData.command
    // const id = e.currentTarget.id
    const routineProductId = e.currentTarget.dataset.routineproductid
    const productId = e.currentTarget.dataset.productid
    const index = e.currentTarget.dataset.index
    console.log("page side",e)
    // console.log("page side global command",command, "routine_id",setId)
    if (command == "deleteProduct"){
      console.log("deleting product", routineProductId)

      const url = app.globalData.url
      const headers = app.globalData.headers
      const getId = setId
      console.log(setId)
      wx.showLoading({
        title: 'Loading',
      })
      wx.request({
        url: `${url}/api/v1/routines/${getId}/routine_products/${routineProductId}`,
        method: 'DELETE',
        header: headers,
        success(res) {
          console.log("success")
          console.log(res.data)
          const routine = page.data.routine
          routine.routine_products.splice(index, 1)
          page.setData({routine})
          wx.hideLoading()
          // wx.navigateBack({
          //   delta: 0,
          // })
        }
      })
    }else if(command == "showProduct"){
      console.log("showing product", productId)
      wx.navigateTo({
        url: `../product_show/product_show?id=${productId}`,
      })
    }else{
      console.log("command not set")
    }
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
    if(options){
      console.log(options)
      const id = options.id
      setId = options.id
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
    }
    
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
    this.onLoad()
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
