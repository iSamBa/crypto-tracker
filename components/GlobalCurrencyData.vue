<template>
  <div class="global-market">
    <h1>Total Market volume</h1>
    <span v-if="globalData.total_volume">{{
      globalData.total_volume.eur
    }}</span>
    <h1>Market capacity %</h1>
    <div v-if="marketCapacityPercentage">
      <ul>
        <li>btc : {{ marketCapacityPercentage.btc }} %</li>
        <li>eth : {{ marketCapacityPercentage.eth }} %</li>
        <li>bnb : {{ marketCapacityPercentage.bnb }} %</li>
      </ul>
    </div>
    <h1>Active crypto currencies</h1>
    <span v-if="globalData.active_cryptocurrencies">{{
      globalData.active_cryptocurrencies
    }}</span>
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
  },
  async mounted() {
    const data = await this.$store.dispatch('getGlobalMarketData')
    this.$store.commit('updateGlobalMarketData', data.data.data)
    console.log(data.data.data)
  },
}
</script>
