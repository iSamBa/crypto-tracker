<template>
  <div class="box-inner">
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
    <div class="graph">
      <line-chart
        :data="prices"
        :points="false"
        prefix="€"
        thousands=","
        decimal="."
        loading="Fetching data from the API ..."
        empty="No available data"
        :label="coin.name"
        :round="4"
        :zeros="true"
        :dataset="{ borderWidth: 1 }"
      ></line-chart>
    </div>
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
