// components/confirm-btn/confirm-btn.js
Component({
  /**
   * Component properties
   */
  properties: {

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
    confirm:function(e){
      var myEventDetail = e.detail // detail object, provided to the event monitoring function
      var myEventOption = e.options // Event triggering options
      this.triggerEvent('onTap', myEventDetail, myEventOption)
    }
  }
})
