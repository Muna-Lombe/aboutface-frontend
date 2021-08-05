// components/routine_product/routine_product.js
let app = getApp()
Component({
  /**
   * Component properties
   */
  properties: {
    routine_product: Object
  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    onDelete:function(e){
      console.log("component side",e)
      var myEventDetail = e.detail // detail object, provided to the event monitoring function
      var myEventOption = e.currentTarget.dataset.command // Event triggering options
      app.globalData["command"] = e.currentTarget.dataset.command
      this.triggerEvent('onTap', myEventDetail, myEventOption)
    },
    goToProduct:function(e){
      console.log("product tap component side",e)
      var myEventDetail = e.detail // detail object, provided to the event monitoring function
      var myEventOption = e.currentTarget.dataset.command // Event triggering options
      app.globalData["command"] = e.currentTarget.dataset.command
      this.triggerEvent('onTap', myEventDetail, myEventOption)
    }
  }
})
