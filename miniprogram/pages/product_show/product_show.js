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
  onCompare:function(e){
    console.log(e.currentTarget.dataset.product)
    const product = e.currentTarget.dataset.product
    app.globalData["product"] = product
    wx.switchTab({
      url: `../product_compare/product_compare`,
    })
  },
  onAdd:function(){
    wx.navigateTo({
      url: '../routine_show/routine_show',
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