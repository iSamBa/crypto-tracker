export const state = () => ({
  coins: [],
  globalMarketData: {},
})

// getters
export const getters = {}
// actions
export const actions = {
  async getCoins() {
    return await this.$axios.$get('/coins')
  },
  async getCoin(id) {
    return await this.$axios.get(`/coins/${id}`)
  },
  async getGlobalMarketData() {
    return await this.$axios.get('/global')
  },
}
// mutations
export const mutations = {
  addCoins(state, payload) {
    state.coins = payload
  },
  updateGlobalMarketData(state, payload) {
    state.globalMarketData = payload
  },
}
