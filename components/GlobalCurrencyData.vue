<template>
  <div>
    <div>
      <div v-if="globalMarketData.isLoading">Loading...</div>
      <div v-else class="global-market">
        <div
          v-if="globalMarketData.data.total_volume"
          class="global-market-item"
        >
          <p class="title">TOTAL MARKET VOLUME</p>
          <div class="content">
            <p>
              {{ globalMarketData.data.total_volume.eur }}
              <span> €</span>
            </p>
          </div>
        </div>
        <div
          v-if="globalMarketData.data.total_volume"
          class="global-market-item"
        >
          <p class="title">TOTAL MARKET CAPACITY</p>
          <div class="content">
            <p>
              {{ globalMarketData.data.total_market_cap.eur }}
              <span> €</span>
            </p>
          </div>
        </div>

        <div v-if="globalMarketData.data.markets" class="global-market-item">
          <p class="title">MARKETS</p>
          <div class="content">
            <p>{{ globalMarketData.data.markets }} <span></span></p>
          </div>
        </div>
        <div
          v-if="globalMarketData.data.active_cryptocurrencies"
          class="global-market-item"
        >
          <p class="title">ACTIVE CRYPTOCURRENCIES</p>
          <div class="content">
            <p>
              {{ globalMarketData.data.active_cryptocurrencies }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['globalMarketData']),
  },
  mounted() {
    this.getGlobalMarketData()
  },
  methods: {
    ...mapActions(['getGlobalMarketData']),
  },
}
</script>
<style lang="scss" scoped></style>
