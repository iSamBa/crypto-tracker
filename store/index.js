export const state = () => ({
  coins: {
    isLoading: false,
    data: [],
  },
  globalMarketData: {
    isLoading: false,
    data: {},
  },
})

// getters
export const getters = {
  getCoins(state) {
    return state.coins
  },
  getGlobalMarketData(state) {
    return state.globalMarketData
  },
}

// actions
export const actions = {
  /**
   * Fetches all coins data from the API
   * @author iSamBa
   */
  async fetchCoins(context) {
    context.commit('SET_LOADING_COINS')
    const coins = await this.$axios.$get('/coins')
    context.commit('UPDATE_COINS', coins)
    context.commit('SET_LOADING_COINS')
  },
  /**
   * Fetches the specific coin data given by its id from the API.
   * @param {string} id coin id
   * @returns specific coin data
   * @author iSamBa
   */
  async fetchCoinById(id) {
    return await this.$axios.get(`/coins/${id}`)
  },

  /**
   * Fetches the global market data from the API.
   *
   * It updates the globalMarketData value in the store
   * @author iSamBa
   */
  async fetchGlobalMarketData(context) {
    context.commit('SET_LOADING_GLOBAL_MARKET_DATA')
    const globalMarketData = await this.$axios.get('/global')
    context.commit('UPDATE_GLOBAL_MARKET_DATA', globalMarketData.data.data)
    context.commit('SET_LOADING_GLOBAL_MARKET_DATA')
  },

  /**
   * Fetches the historical prices data of a specific coin
   * @param {Object} params contain the coin id, the currency and the days
   * @author iSamBa
   */
  async getCoinPrices(context, params) {
    const prices = await this.$axios.get(
      `/coins/${params.id}/market_chart?vs_currency=${params.currency}&days=${params.duration}`
    )
    return prices.data.prices.map((dataset) => {
      return [new Date(dataset[0]), dataset[1]]
    })
  },
}

// mutations
export const mutations = {
  /**
   * Updates the coins data in the state by the data in the payload
   * @param {*} state
   * @param {*} payload
   * @author iSamBa
   */
  ADD_COINS(state, payload) {
    state.coins.data = payload
  },

  /**
   * Updates the global market data in the state by the data in the payload
   * @param {*} state
   * @param {*} payload
   * @author iSamBa
   */
  UPDATE_GLOBAL_MARKET_DATA(state, payload) {
    state.globalMarketData.data = payload
  },
  /**
   * Toggles isLoading value of the coins in the state
   * @param {*} state
   * @author iSamBa
   */
  SET_LOADING_COINS(state) {
    const value = state.coins.isLoading
    state.coins.isLoading = !value
  },
  /**
   * Toggles isLoading value of the globalMarketData in the state
   * @param {*} state
   * @author iSamBa
   */
  SET_LOADING_GLOBAL_MARKET_DATA(state) {
    const value = state.globalMarketData.isLoading
    state.globalMarketData.isLoading = !value
  },
}
