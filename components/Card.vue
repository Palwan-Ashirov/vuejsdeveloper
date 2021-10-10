<template>
  <div class="card_list">
    <div v-for="card of cards" :key="card.id" class="card_item">
      <img :src="card.image" alt="">
      <h1>{{ card.title }}</h1>
      <div class="form_radio_list">
        <div v-for="face of card.faces" :key="face" class="form_radio_btn">
          <input :id="`${card.id}-${face}`" v-model="choosenFace" type="radio" :name="`${card.id}`" :value="`${card.title}-${face}`">
          <label :for="`${card.id}-${face}`">{{ face }}</label>
        </div>
      </div>
      <button v-if="card.faces.length > 0" class="card_btn" @click="addCardToBasket(card,choosenFace)">
        Добавить в корзину
      </button>
      <span v-else class="absent_product">Нет в наличии</span>
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
    addCardToBasket (card, face) {
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
            nominal: parseInt(nominals),
            count: 1,
            total: nominals
          }
          this.choosenFace = null
          this.$store.commit('addCard', cardItem)
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
  justify-content: center;
}
.card_item{
  width: 30%;
  height: auto;
  border-radius: 15px;
  margin: 10px 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.1), 0 2px 2px 0 rgba(0, 0, 0, 0.19);
  transition: 0.3s ease;
}
.card_item:hover{
  transform: scale(1.025);
}
.card_item > img{
  width: 100%;
  height: auto;
}
.card_item > h1{
  margin: 15px 0px;
}
.form_radio_list{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.form_radio_btn{
  display: inline-block;
  margin: 5px 5px;
}
.form_radio_btn > input[type=radio]{
  display: none;
}
.form_radio_btn > label{
  display: inline-block;
  border: 1px solid #f16536;
  cursor: pointer;
  border-radius: 3px;
  color: #f16536;
}
.form_radio_btn > input[type=radio]:checked + label{
  background-color: #f16536;
  color: #fff;
}
.form_radio_btn > label:hover{
  opacity: 0.4;
}
.card_btn{
  background-color: #f16536;
  color: #fff;
  cursor: pointer;
  border: 1px solid #f16536;
  max-width: 150px;
  padding: 10px;
  margin: 15px 0;
}
.card_btn:active{
  transform: scale(1.01);
  border-color: #000;
}
.absent_product{
  color: red;
}
@media (max-width:535px){
  .card_item{
    width: 45%;
    height: auto;
  }
}
</style>
