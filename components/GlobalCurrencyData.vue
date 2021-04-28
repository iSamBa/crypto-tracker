<template>
  <div class="global-market">
    <template v-if="globalMarketData.isLoading">Loading...</template>
    <template v-else>
      <div
        v-if="globalMarketData.data.total_volume"
        class="total global-market-item"
      >
        <h4 class="title">TOTAL MARKET VOLUME</h4>
        <div class="content">
          <p>
            {{ globalMarketData.data.total_volume.eur }}
            <span> €</span>
          </p>
        </div>
      </div>
      <div
        v-if="globalMarketData.data.markets"
        class="capacity global-market-item"
      >
        <h4 class="title">MARKETS</h4>
        <div class="content">
          <p>{{ globalMarketData.data.markets }} <span></span></p>
        </div>
      </div>
      <div
        v-if="globalMarketData.data.active_cryptocurrencies"
        class="active-currencies global-market-item"
      >
        <h4 class="title">ACTIVE CRYPTOCURRENCIES</h4>
        <div class="content">
          <p>
            {{ globalMarketData.data.active_cryptocurrencies }}
          </p>
        </div>
      </div>
    </template>
    <line-chart
      :data="selectedCoin.prices"
      prefix="€"
      width="max"
      :round="2"
      :zeros="true"
    ></line-chart>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    //  globalData() {
    //    return this.$store.state.globalMarketData
    //  },
    //  markets() {
    //    return this.globalData.markets
    //  },
    ...mapState(['globalMarketData', 'selectedCoin']),
  },
  mounted() {
    this.getGlobalMarketData()
    this.getCoinPrices({ id: 'bitcoin', currency: 'eur', duration: 2000 })
    // const data = await this.$store.dispatch('getGlobalMarketData')
    // this.$store.commit('updateGlobalMarketData', data.data.data)
  },
  methods: {
    ...mapActions(['getGlobalMarketData', 'getCoinPrices']),
  },
}
</script>
<style lang="scss" scoped></style>
