export const state = () => ({
  coins: [],
})

// getters
export const getters = {}
// actions
export const actions = {
  async getCoins() {
    const coins = await this.$axios.$get('/coins')
    return coins
  },
}
// mutations
export const mutations = {
  addCoins(state, payload) {
    state.coins = payload
  },
}
