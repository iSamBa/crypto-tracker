<template>
  <div class="global-market">
    <div class="total global-market-item">
      <h4>Total Market volume</h4>
      <span v-if="globalData.total_volume">{{
        globalData.total_volume.eur
      }}</span>
    </div>
    <div class="capacity global-market-item">
      <h4>Market capacity %</h4>
      <div v-if="marketCapacityPercentage">
        <ul>
          <li>btc : {{ marketCapacityPercentage.btc }} %</li>
          <li>eth : {{ marketCapacityPercentage.eth }} %</li>
          <li>bnb : {{ marketCapacityPercentage.bnb }} %</li>
        </ul>
      </div>
    </div>
    <div class="active-currencies global-market-item">
      <h4>Active crypto currencies</h4>
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
