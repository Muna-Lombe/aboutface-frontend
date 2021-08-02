// pages/product_index/product_index.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    slider:[ 
      {'img':'../../images/makearoutinebanner.png'},
      {'img':'../../images/compareproductsbanner.png'}
    ],
    isDisabled: true
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
      url: '../product_show/product_show',
    })
  },
  onSearch: function(e){
    console.log("search event res:", e)
    const searchInput = e.detail.value
    this.onShow(searchInput)
    this.setData({
      isDisabled: false
    })
  },
  clearSearch:function(){
    this.onLoad()
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this
    const url = app.globalData.url
    const headers = app.globalData.headers
    wx.request({
      url: `${url}/api/v1/products`,
      header: headers,
      success(res){
        const products = res.data.products
        console.log(res)
        page.setData({
          products: products,
          isDisabled: true
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

  onShow: function (options) {
    if (options){
      console.log(options.input)
      const page = this
      const url = app.globalData.url
      const headers = app.globalData.headers
      const query = options.input
      wx.request({
        url: `${url}/api/v1/products?query=${query}`,
        header: headers,
        success(res){
          const products = res.data.products
          console.log(res)
          page.setData({
            products: products
          })
        }
      })
    }
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