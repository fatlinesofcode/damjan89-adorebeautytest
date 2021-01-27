<template>
  <div>
    <Loading v-if="productsLoading"/>
    <div v-else class="mt-4">
      <b-table
        id="products_table"
        class="text-left  cursorPointer"
        :items="productsToRender"
        :per-page="50"
        :current-page="currentPage"
        striped
        @row-clicked="goToDetails"
      ></b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="$store.state.products.productsPagination.total_pages"
      :per-page="$store.state.products.productsPagination.per_page"
      aria-controls="products_table"
    /><p class="mt-3">Current Page: {{ $store.state.products.productsCurrentPage }}</p>
  </div>
  </div>
</template>
<script>
export default {
  name: 'ListProducts',
  watch: {
    '$store.state.products.products': {
      immediate: true,
      handler(newVal) {
        this.reduceProds(newVal)
      }
    },
    currentPage: {
      immediate: true,
      handler(newVal) {
        this.changePage(newVal)
      }
    },
    isLoadingProd: {
      immediate: true,
      handler(newVal) {
        this.productsLoading = newVal
      }
    }
  },
  props: {
    isLoadingProd: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      productsToRender: [],
      currentPage: 1,
      productsLoading: false
    }
  },
  mounted() {
    this.currentPage = this.$store.state.products.productsCurrentPage
  },
  methods: {
    reduceProds(allProds) {
      let self = this
      if(allProds && allProds.length === 0){
        this.productsLoading = false
        this.productsToRender = []
      } else{
        this.productsLoading = false
        allProds.forEach((k, v) => {
          self.productsToRender.push({
            id: k.id,
            title: k.name,
            sku: k.sku
          })
        })
      }
    },
    changePage(page) {
      this.$emit('changePage', page)
    },
    goToDetails(row) {
      this.$router.push({
        name: `productDetails`,
        params: {
          id: row.id
        }
      })
    }
  }
}
</script>
