<template>
  <div class="box-inner">
    Track | coins
    <div v-for="coin in coins" :key="coin.id">
      <span>{{ coin.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    coins() {
      return this.$store.state.coins
    },
  },
  async mounted() {
    const coins = await this.$store.dispatch('getCoins')
    this.$store.commit('addCoins', coins)
  },
}
</script>

<style lang="scss" scoped></style>
