// components/incompatible-popup/incompatible-popup.js
Component({
  properties: {
    products: {type: Array, observer() { this.setProducts() } }
  },
  data: {

  },
  methods: {
    setProducts() {
      console.log(1111, this.data.products)
    },
    continue() {
      this.triggerEvent('addtoroutine')
    }
  }
})
