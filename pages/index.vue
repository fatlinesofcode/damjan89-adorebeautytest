<template>
  <div>
    <div class="container">
      <Loading v-if="loadingCats && loadingProds"/>
      <div v-else-if="errorMsg">
        {{ errorMsg }}
      </div>
      <div v-else>
        <ListCategories @changeCategory="filterCat"/>
        <ListProducts :isLoadingProd="loadingProds" @changePage="changePage"/>
      </div>
    </div>
  </div>
</template>

<script>
import 'assets/style.css'
import {getProductsService} from "~/shared/products.service";
import {getCategoriesService} from "~/shared/categories.service";

export default {
  data() {
    return {
      loadingProds: true,
      loadingCats: true,
      selectedCategory: null,
      currentPage: null,
      errorMsg: '',
    }
  },
  created() {
    this.getAllProducts();
    this.getAllCategories();
  },
  mounted() {
  },
  methods: {
    getAllProducts() {
      this.loadingProds = true
      getProductsService(this.currentPage, this.$store.state.products.productsPagination.per_page, this.selectedCategory).then((products) => {
        if(products && products.data) {
          this.$store.commit('products/setProducts', products.data)
          this.loadingProds = false
        }
        if(products && products.meta) {
          this.$store.commit('products/paginationProducts', products.meta.pagination)
        }
      }).catch((err) => {
        this.errorMsg = err
      })
    },
    async getAllCategories() {
      getCategoriesService().then((categories) => {
        if (categories && categories.data) {
          this.$store.commit('categories/setCategories', categories.data)
          this.loadingCats = false
        }
        if (categories && categories.meta) {
          this.$store.commit('categories/setCategoriesPagination', categories.meta.pagination)
        }
      }).catch((err) => {
        this.errorMsg = err
      })
    },
    filterCat(id) {
      this.selectedCategory = id
      this.getAllProducts()
    },
    changePage(page) {
      this.currentPage = page
      this.getAllProducts()
    }
  },
}
</script>

