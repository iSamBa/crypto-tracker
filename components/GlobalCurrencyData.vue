<template>
  <div class="global-market">
    <div class="total global-market-item">
      <h4 class="title">TOTAL MARKET VOLUME</h4>
      <span v-if="globalData.total_volume">{{
        globalData.total_volume.eur
      }}</span>
    </div>
    <div class="capacity global-market-item">
      <h4 class="title">MARKET CAPACITY</h4>
      <div v-if="marketCapacityPercentage" class="market-capacity">
        <div class="market-capacity-item">
          <p>BTC</p>
          <p>{{ marketCapacityPercentageBtc }} <span>%</span></p>
        </div>
        <div class="market-capacity-item">
          <p>ETH</p>
          <p>{{ marketCapacityPercentageEth }} <span>%</span></p>
        </div>
        <div class="market-capacity-item">
          <p>BNB</p>
          <p>{{ marketCapacityPercentageBnb }} <span>%</span></p>
        </div>
      </div>
    </div>
    <div class="active-currencies global-market-item">
      <h4 class="title">ACTIVE CRYPTOCURRENCIES</h4>
      <span v-if="globalData.active_cryptocurrencies">{{
        globalData.active_cryptocurrencies
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    globalData() {
      return this.$store.state.globalMarketData
    },
    marketCapacityPercentage() {
      return this.globalData.market_cap_percentage
    },
    marketCapacityPercentageBtc() {
      return this.globalData.market_cap_percentage.btc.toFixed(2)
    },
    marketCapacityPercentageEth() {
      return this.globalData.market_cap_percentage.eth.toFixed(2)
    },
    marketCapacityPercentageBnb() {
      return this.globalData.market_cap_percentage.bnb.toFixed(2)
    },
  },
  async mounted() {
    const data = await this.$store.dispatch('getGlobalMarketData')
    this.$store.commit('updateGlobalMarketData', data.data.data)
  },
}
</script>
<style lang="scss" scoped></style>
