// components/routine_product/routine_product.js
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
      var myEventDetail = e.detail // detail object, provided to the event monitoring function
      var myEventOption = e.options // Event triggering options
      this.triggerEvent('onTap', myEventDetail, myEventOption)
    }
  }
})
