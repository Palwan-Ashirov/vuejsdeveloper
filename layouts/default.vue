<template>
  <div>
    <header>
      <div class="header container">
        <nuxt-link to="/">
          Home
        </nuxt-link>
        <nuxt-link to="/basket">
          {{ counter }} Basket
        </nuxt-link>
      </div>
    </header>
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    counter () {
      return this.$store.state.categories.length
    }
  }
}

</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container{
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
}
header{
  background-color: #f16536;
}
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
