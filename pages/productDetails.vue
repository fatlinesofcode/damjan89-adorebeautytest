<template>
  <div class="justify-content-center">
    <div class="m-3">
      <div class="row">
      <div class="col-md-4 offset-4">
        <span class="cursorPointer" @click="navigateBack"> < Back to list</span>
        <hr/>
      </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 offset-3 text-center">
        <h2>{{selectedProduct.name}}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mt-2 offset-4 text-center">
        <span v-for="(item, ind) in selectedProduct.categories" :key="ind">Category {{item}}
          <span v-if="ind < selectedProduct.categories.length-1">,</span></span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mt-2 offset-4 text-center">
          <h5>SKU: {{selectedProduct.sku}}</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 offset-4 text-center">
          <h5>Price: {{$store.state.currency}}{{selectedProduct.price}}</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mt-3 offset-4 text-center">
          <div v-html="selectedProduct.description"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductDetails',
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if(to.params && to.params.id){
        vm.populateProductDetails(to.params.id)
      }
      next();
    })
  },
  data() {
    return {
      selectedProduct: {}
    }
  },
  methods: {
    populateProductDetails(id){
      this.selectedProduct = this.$store.state.products.products.find(e=> e.id === id)
      debugger
    },
    navigateBack(){
      this.$router.go(-1)
    }
  }
}
</script>
