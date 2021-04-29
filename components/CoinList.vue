<template>
  <div v-if="coins.data" class="coin-row">
    <div v-for="coin in coins.data" :key="coin.id" class="coin-item">
      <img class="icon" :src="coin.image.thumb" :alt="coin.name" />
      <p class="name">{{ coin.name }}</p>
      <p class="price">{{ coin.market_data.current_price.eur }} €</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: { ...mapState(['coins']) },
  mounted() {
    this.getCoins()
  },
  methods: { ...mapActions(['getCoins']) },
}
</script>
