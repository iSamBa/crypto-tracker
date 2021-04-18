<template>
  <li class="nav-item" :class="getActive()">
    <nuxt-link :to="{ name: link }" class="nav-link" exact>
      <slot />
    </nuxt-link>
  </li>
</template>
<script>
export default {
  name: 'NavLink',
  props: {
    link: {
      type: String,
      required: true,
    },
  },
  methods: {
    getActive() {
      if (this.$nuxt.$route.name === this.link) {
        return 'active'
      }
      return ''
    },
  },
}
</script>
