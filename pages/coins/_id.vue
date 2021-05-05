<template>
  <div v-if="coin && prices" class="box-inner">
    <div v-if="coin" class="heading">
      <img class="symbol" :src="coin.image.small" :alt="coin.title" />
      <div class="title">
        <h4>{{ coin.name }}</h4>
        <p>{{ coin.symbol }}</p>
      </div>
      <p class="change">{{ coin.market_data.price_change_percentage_24h }}%</p>
      <div v-if="coin.market_data" class="price">
        <h4>{{ coin.market_data.current_price.eur }} €</h4>
      </div>
    </div>
    <p
      v-if="coin.description"
      class="description"
      v-html="coin.description.id"
    ></p>
    <div v-if="coinPrices[0]">
      <price-chart
        :prices="coinPrices"
        :fill="true"
        :display-y-grid="true"
      ></price-chart>
    </div>
  </div>
  <div v-else>
    <loader-item
      loading-msg="Fetching data from API"
      illustration-color="#000"
    ></loader-item>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      coin: '',
      prices: [],
    }
  },
  computed: {
    coinPrices() {
      return this.prices
    },
  },
  async mounted() {
    const coinId = this.$route.params.id
    this.coin = await this.fetchCoinById(coinId)
    this.prices = await this.fetchCoinPrices({
      id: coinId,
      currency: 'eur',
      duration: 4000,
    })
  },
  methods: { ...mapActions(['fetchCoinById', 'fetchCoinPrices']) },
}
</script>

<style lang="scss" scoped></style>
