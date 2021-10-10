<template>
  <div>
    <header>
      <div class="header container">
        <nuxt-link to="/">
          <img src="~/assets/logo.png" alt="Logo" class="logo">
        </nuxt-link>
        <nuxt-link to="/basket" class="basket_link">
          <img src="~/assets/basket.png" alt="Basket Icon" class="basket">
          <span v-if="counter" class="count">{{ counter }}</span>
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
  text-decoration: none;
}
.container{
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
}
header{
  background-color: #f16536;
  padding: 8px 20px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
}
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo{
  width: 100px;
}
.basket{
  width: 40px;
}
.basket_link{
  position: relative;
}
.count{
  position: absolute;
  top: -5px;
  right: -13px;
  width: 22px;
  background-color: red;
  border-radius: 50%;
  color: #fff;
  text-align: center;
}
</style>
