<template>
  <div>{{ coin }}</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      coin: '',
    }
  },
  async mounted() {
    this.coin = await this.fetchCoinById(this.$route.params.id)
  },
  methods: { ...mapActions(['fetchCoinById', 'fetchCoinPrices']) },
}
</script>

<style lang="scss" scoped></style>
