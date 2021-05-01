<template>
  <div>{{ this.$route.params.id }}</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      coin: {},
    }
  },
}
</script>

<style lang="scss" scoped></style>
