// pages/product_show/product_show.js
let app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    showModal: false,
  },

  routineModal: function() {
    const routines = app.globalData.routines
    this.setData({
      routines,
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
  onCompare:function(e){
    console.log(e.currentTarget.dataset.product)
    const product = e.currentTarget.dataset.product
    app.globalData["product"] = product
    wx.switchTab({
      url: `../product_compare/product_compare`,
    })
  },
  onAdd:function(e){
    console.log(e.currentTarget)
    const product = e.currentTarget.dataset.product
    const routineId = e.currentTarget.id
    const ingredients = product.product_ingredients
    console.log(ingredients)
  //   {
  //     "routine_id": 5,
  //     "product_id": 4
  // }
    const url = app.globalData.url
    const data = {"routine_id": routineId, "product_id": product.id}
    const headers = app.globalData.headers
    const page = this
    wx.showLoading({
      title: 'Loading',
    })
    wx.request({
      url: `${url}/api/v1/routines/${routineId}/routine_products`,
      method: 'POST',
      header: headers,
      data: data, 
      success(res){
        console.log(res)
        // page.setData({
        //   results
        // })
        wx.hideLoading()
        wx.navigateTo({
          url: `../routine_show/routine_show?id=${routineId}`,
        })
      }
    })

    
  },
  onLoad: function (options) {
    console.log(options)
    const page = this
    const url = app.globalData.url
    const headers = app.globalData.headers
    console.log("headers", headers)
    console.log("url", url)

    wx.request({
      url: `${url}/api/v1/products/${options.id}`,
      header: headers,
      success(res){
        console.log("res",res)
        const product = res.data.product
        let ingredients = product.product_ingredients
        ingredients = ingredients.reverse()
        console.log(ingredients);
        page.setData({
          product: product,
          ingredients: ingredients
        })
      },
      fail(res){
        console.log("fail res:",res)

      }
    })

    // const page = this
    // const headers = app.globalData.headers
    console.log("headers:",headers)
    wx.request({
      url: `${url}/api/v1/routines`,
      header: headers,
      success(res){
        const routines = res.data.routines
        console.log(routines)
        app.globalData["routines"] = routines
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