export const state = () => ({
  products: [],
  productsPagination: {},
  productsCurrentPage: 1
})

export const mutations = {
  setProducts(state, data) {
    state.products = data
  },
  paginationProducts(state, data) {
    state.productsPagination = data
  },
  setProductsCurrentPage(state, data) {
    state.productsCurrentPage = data
  }
}
