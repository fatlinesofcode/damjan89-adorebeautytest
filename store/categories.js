export const state = () => ({
  categories: [],
  categoriesPagination: {},
  categoriesCurrentPage: 1
})

export const mutations = {
  setCategories(state, data) {
    state.categories = data
  },
  setCategoriesPagination(state, data) {
    state.categoriesPagination = data
  },
  setCategoriesCurrentPage(state, data) {
    state.categoriesCurrentPage = data
  }
}
