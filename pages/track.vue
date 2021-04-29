<template>
  <div class="box-inner">
    <dashboard-item></dashboard-item>
    <coin-list></coin-list>
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
