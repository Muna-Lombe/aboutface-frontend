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
      // url: `${url}/api/v1/products?query=${query}`
      // console.log(e)
      var myEventDetail = e.detail // detail object, provided to the event monitoring function
      var myEventOption = e.options // Event triggering options
      this.triggerEvent('search', myEventDetail, myEventOption)
    },
    clearSearch:function(){
      this.setData({
        searchValue: ""
      })
    },
  }
})
