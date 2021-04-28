export const state = () => ({
  coins: {
    isLoading: false,
    data: [],
  },
  selectedCoin: {
    isLoading: false,
    coin: {},
    prices: [],
  },
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
    context.commit('SET_LOADING_SELECTED_COIN')
    const coin = await this.$axios.get(`/coins/${id}`)
    context.commit('SET_SELECTED_COIN', coin)
    context.commit('SET_LOADING_SELECTED_COIN')
  },
  async getGlobalMarketData(context) {
    context.commit('SET_LOADING_GLOBAL_MARKET_DATA')
    const globalMarketData = await this.$axios.get('/global')
    context.commit('UPDATE_GLOBAL_MARKET_DATA', globalMarketData.data.data)
    context.commit('SET_LOADING_GLOBAL_MARKET_DATA')
  },
  async getCoinPrices(context, params) {
    context.commit('SET_LOADING_SELECTED_COIN')
    const prices = await this.$axios.get(
      `/coins/${params.id}/market_chart?vs_currency=${params.currency}&days=${params.duration}`
    )
    context.commit('SET_PRICES_SELECTED_COIN', prices.data.prices)
    context.commit('SET_LOADING_SELECTED_COIN')
  },
}

// mutations
export const mutations = {
  ADD_COINS(state, payload) {
    state.coins.data = payload
  },

  SET_LOADING_COINS(state) {
    const value = state.coins.isLoading
    state.coins.isLoading = !value
  },

  SET_SELECTED_COIN(state, payload) {
    state.selectedCoin.coin = payload
  },

  UPDATE_GLOBAL_MARKET_DATA(state, payload) {
    state.globalMarketData.data = payload
  },

  SET_LOADING_GLOBAL_MARKET_DATA(state) {
    const value = state.globalMarketData.isLoading
    state.globalMarketData.isLoading = !value
  },

  SET_PRICES_SELECTED_COIN(state, payload) {
    state.selectedCoin.prices = payload
  },

  SET_LOADING_SELECTED_COIN(state) {
    const value = state.selectedCoin.isLoading
    state.selectedCoin.isLoading = !value
  },
}
