export const state = () => ({
  currency: '$'
})

export const mutations = {
  setCurrency(state, data) {
    state.currency = data
  }
}
