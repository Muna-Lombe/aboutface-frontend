// pages/product_compare/product_compare.js
let app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    isDisabled: true,
    class: "hidden",
    searchValue: "",
    showModal: false
  },

  /**
   * Lifecycle function--Called when page load
   */
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

  onSearch: function(e){
    console.log("search event res:", e)
    const searchInput = e.detail.value
    const url = app.globalData.url
    const query = e.detail.value.input

    console.log({query})
    const headers = app.globalData.headers
    const page = this
    wx.showLoading({
      title: 'Loading',
    })
    wx.request({
      url: `${url}/api/v1/products?query=${query}`,
      header: headers,
      success(res){
        const products = res.data.products
        console.log(products)
        page.setData({
          products: products
        })
        wx.hideLoading()
      }
    })
      this.setData({class: ""});
  },
  clearSearch:function(){
    // make an api to fetch all products done by muna
      // console.log(this.options.input)
      wx.showLoading({
        title: 'Loading',
      })
      const page = this
      const url = app.globalData.url
      const headers = app.globalData.headers
      // const query = options.input
      this.setData({class: "hidden", searchValue: ""});
      wx.request({
        url: `${url}/api/v1/products`,
        header: headers,
        success(res){
          const products = res.data.products
          console.log(res)
          page.setData({
            products: products
          })
          wx.hideLoading()
        }
      })
    
  },

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