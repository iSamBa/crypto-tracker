<template>
  <div class="global-market">
    <div class="total">
      <h1>Total Market volume</h1>
      <span v-if="globalData.total_volume">{{
        globalData.total_volume.eur
      }}</span>
    </div>
    <div class="capacity">
      <h1>Market capacity %</h1>
      <div v-if="marketCapacityPercentage">
        <ul>
          <li>btc : {{ marketCapacityPercentage.btc }} %</li>
          <li>eth : {{ marketCapacityPercentage.eth }} %</li>
          <li>bnb : {{ marketCapacityPercentage.bnb }} %</li>
        </ul>
      </div>
    </div>
    <div class="active-currencies">
      <h1>Active crypto currencies</h1>
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
  },
  async mounted() {
    const data = await this.$store.dispatch('getGlobalMarketData')
    this.$store.commit('updateGlobalMarketData', data.data.data)
  },
}
</script>
<style lang="scss" scoped></style>
