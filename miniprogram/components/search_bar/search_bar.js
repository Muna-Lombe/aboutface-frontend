// components/search_bar/search_bar.js
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
    searchTap:function(e){
      // console.log(e)
      var myEventDetail = e.detail // detail object, provided to the event monitoring function
      var myEventOption = e.options // Event triggering options
      this.triggerEvent('search', myEventDetail, myEventOption)
      this.setData({
        searchValue: ""
      })
    }
  }
})
