export const state = () => ({
  coins: {
    isLoading: false,
    data: [],
  },
  selectedCoin: {},
  globalMarketData: {
    isLoading: false,
    data: {},
  },
})

// getters
export const getters = {}

// actions
export const actions = {
  async getCoins(context) {
    context.commit('SET_LOADING_COINS')
    const coins = await this.$axios.$get('/coins')
    context.commit('ADD_COINS', coins)
    context.commit('SET_LOADING_COINS')
  },
  async getCoin(context, id) {
    const coin = await this.$axios.get(`/coins/${id}`)
    context.commit('SET_SELECTED_COIN', coin)
  },
  async getGlobalMarketData(context) {
    context.commit('SET_LOADING_GLOBAL_MARKET_DATA')
    const globalMarketData = await this.$axios.get('/global')
    context.commit('UPDATE_GLOBAL_MARKET_DATA', globalMarketData)
    context.commit('SET_LOADING_GLOBAL_MARKET_DATA')
  },
}

// mutations
export const mutations = {
  ADD_COINS(state, payload) {
    state.coins = payload
  },

  SET_LOADING_COINS(state) {
    state.coins.isLoading = !state.coins.isLoading
  },

  SET_SELECTED_COIN(state, payload) {
    state.selectedCoin = payload
  },

  UPDATE_GLOBAL_MARKET_DATA(state, payload) {
    state.globalMarketData = payload
  },

  SET_LOADING_GLOBAL_MARKET_DATA(state) {
    state.globalMarketData.isLoading = !state.globalMarketData.isLoading
  },
}
