// components/compare_product/compare_product.js
Component({
  /**
   * Component properties
   */
  properties: {
    product: {type: Object, observer() { this.setProduct()}},
    box: Number
  },
  // observers: {
  //   product: function() {
  //     // Execute this function when numberA or numberB is set
  //     this.setData({
  //       sum: numberA + numberB
  //     })
  //   }
  // }
  /**
   * Component initial data
   */
  data: {
    default:true,
    text: "Add a product"
  },

  /**
   * Component methods
   */
  attached() {
    console.log('IN COMPARE BOX #', this.data.box, 'PRODUCT:', this.data.product)
  },
  methods: {
    setProduct() {
      // this.setData({
      //   product: this.data.product
      // })
      console.log(111, this.data.product, this.data.box)
    },
    onTap: function(e){
      console.log("comp-pro",e)
      // this.setData({
      //   default: false,
      //   text:"product"
      // })
    }

  }
})
