<template>
  <div v-if="coins.data" class="coin-row">
    <nuxt-link
      v-for="coin in coins.data"
      :key="coin.id"
      :to="'/coins/' + coin.id"
      class="coin-item"
    >
      <img class="icon" :src="coin.image.thumb" :alt="coin.name" />
      <div class="name">
        <p>{{ coin.name }}</p>
        <p>{{ coin.symbol.toUpperCase() }}</p>
      </div>
      <div class="price">
        <p>
          {{
            coin.market_data.current_price.eur
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, '$&,')
          }}
          <span>€</span>
        </p>
        <p
          :class="[
            coin.market_data.price_change_percentage_24h < 0
              ? 'negative'
              : 'positive',
          ]"
        >
          {{ coin.market_data.price_change_percentage_24h.toFixed(2) }}
          <span>%</span>
        </p>
      </div>
    </nuxt-link>
  </div>
  <div v-else>
    <loader-item
      loading-msg="Fetching data from API"
      illustration-color="#000"
    ></loader-item>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: { ...mapState(['coins']) },
  mounted() {
    this.fetchCoins()
  },
  methods: { ...mapActions(['fetchCoins']) },
}
</script>
