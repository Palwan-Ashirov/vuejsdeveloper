<template>
  <div class="card_list">
    <div v-for="card of cards" :key="card.id" class="card_item">
      <img :src="card.image" alt="">
      <h1>{{ card.title }}</h1>
      <div v-for="face of card.faces" :key="face">
        <input :id="`${card.id}-${face}`" v-model="choosenFace" type="radio" :name="`${card.id}`" :value="`${card.title}-${face}`">
        <label :for="`${card.id}-${face}`">{{ face }}</label>
      </div>
      <button :disabled="card.faces.length < 1" @click="add(card,choosenFace)">
        Add to basket
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      choosenFace: null
    }
  },
  methods: {
    add (card, face) {
      if (face) {
        if (card.title === face.split('-')[0]) {
          let nominals = ''
          let checker = false
          for (let i = 0; i < face.length; i++) {
            if (face[i - 1] === '-') {
              checker = true
            }
            if (checker) { nominals += face[i] }
          }
          const cardItem = {
            title: card.title,
            img: card.image,
            nominal: nominals
          }
          this.choosenFace = null
          this.$store.commit('addToCard', cardItem)
        }
      }
    }
  }
}

</script>

<style scoped>
.card_list{
    display: flex;
    flex-wrap: wrap;
}
    .card_item{
        max-width: 320px;
        height: auto;
        border: 1px solid #000;
        border-radius: 15px;
        margin: 10px;
        overflow: hidden;
    }
    .card_item img{
        width: 100%;
        height: auto;
    }
    .card_item h1{
        text-align: center;
    }
</style>
