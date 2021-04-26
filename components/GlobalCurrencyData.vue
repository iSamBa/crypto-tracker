<template>
  <div class="global-market">
    <div class="total global-market-item">
      <h4 class="title">TOTAL MARKET VOLUME</h4>
      <div v-if="globalData.total_volume" class="content">
        <p>
          {{ globalData.total_volume.eur }}
          <span> €</span>
        </p>
      </div>
    </div>
    <div class="capacity global-market-item">
      <h4 class="title">MARKETS</h4>
      <div v-if="markets" class="content">
        <p>{{ markets }} <span></span></p>
      </div>
    </div>
    <div class="active-currencies global-market-item">
      <h4 class="title">ACTIVE CRYPTOCURRENCIES</h4>
      <div v-if="globalData.active_cryptocurrencies" class="content">
        <p>
          {{ globalData.active_cryptocurrencies }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ts-nocheck
export default {
  computed: {
    globalData() {
      return this.$store.state.globalMarketData
    },
    markets() {
      return this.globalData.markets
    },
  },
  async mounted() {
    const data = await this.$store.dispatch('getGlobalMarketData')
    this.$store.commit('updateGlobalMarketData', data.data.data)
  },
}
</script>
<style lang="scss" scoped></style>
