// pages/product_show/product_show.js
let app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    showModal: false,
    incompatibleProducts: [],
    chosenRoutine: null,
    routines:null,
    incompatible: false
  },

  routineModal: function() {
    const routines = app.globalData.routines
    this.setData({
      routines: routines,
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
  async compare(productOne, productTwo){
    // /api/v1/products/compare?compare="
    // console.log("products",)
    return new Promise((resolve, reject) => {
      const data = this.data.activeProducts
      const url = app.globalData.url
      const compare = {"compare":{"name": productOne, "compare_to": productTwo}}
      const headers = app.globalData.headers
      const page = this
      wx.showLoading({
        title: 'Loading',
      })
      wx.request({
        url: `${url}/api/v1/products/compare`,
        method: 'POST',
        header: headers,
        data: compare, 
        success(res){
          const results = res.data.compare_results
          console.log(results)
          // page.setData({
          //   results
          // })
          wx.hideLoading()
          resolve(results)
        }
      })
    })
    
  },
  async onAdd(e){
    const routine = e.currentTarget.dataset.routine

    console.log(e.currentTarget)
    const product = e.currentTarget.dataset.product
    this.setData({chosenRoutine: e.currentTarget.id, chosenProduct: product})
  
    // const url = app.globalData.url
    // const data = {"routine_id": routineId, "product_id": product.id}
    // const headers = app.globalData.headers
    const page = this
    wx.showLoading({
      title: 'Loading',
    })
    const products = routine.routine_products
    console.log("product1:",products, "product2:", product)
    const incompatibleProducts = this.data.incompatibleProducts
    products.forEach(prod => {
      // console.log("pod:",prod.product.name)
      const result = this.compare(prod.product.name,product.name);
      console.log({result})
      if (result.then(res => res.some(x => !x.compatible))){
        console.log(prod.product.name, "is not comapatible with", product)
        console.log(result)
        incompatibleProducts.push(prod)
      }
    });
    const incompatible = incompatibleProducts.length > 0
    this.setData({incompatibleProducts, incompatible})
    console.log(999, this.data.incompatibleProducts)
    wx.hideLoading()
    // routine.product.product_ingredients
    if (!incompatible) {
      this.addToRoutine()
    }
  },
  closeModal:function(){
    this.setData({incompatible: false})
  },
  addToRoutine() {
    const routineId = this.data.chosenRoutine
    wx.showLoading({
      title: 'Loading'
    })
    const url = app.globalData.url
    const data = {"routine_id": routineId, "product_id": this.data.chosenProduct.id}
    const headers = app.globalData.headers
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
  onShow: function (options) {
    // this.onLoad()
    this.hideModal()
    this.setData({routines:null})
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