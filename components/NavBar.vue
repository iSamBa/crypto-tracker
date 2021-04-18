<template>
  <nav class="navbar navbar-expand-lg navbarlight box-inner">
    <nuxt-link to="/" exact>
      <img class="logo" src="~/static/logo/logo.png" alt="logo" />
    </nuxt-link>
    <button
      class="navbar-toggler collapsed"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="icon-bar top-bar" />
      <span class="icon-bar middle-bar" />
      <span class="icon-bar bottom-bar" />
    </button>

    <div id="navbarsExampleDefault" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <nav-link link="index">Home</nav-link>
        <nav-link link="track">Track</nav-link>
        <nav-link link="about">About</nav-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  watch: {
    $route() {
      $('navbarsExampleDefault').collapse('hide')
    },
  },
}
</script>

<style lang="scss" scoped></style>
