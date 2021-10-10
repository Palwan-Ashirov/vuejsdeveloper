<template>
  <div>
    <h1 class="basket_head">
      КОРЗИНА
    </h1>
    <ul>
      <li class="basket_card_title">
        <h2>Товар</h2>
        <span>Номинал</span>
        <span>Количество</span>
        <span>Итого</span>
      </li>
      <li v-for="post,id in allCards" :key="id" class="basket_card">
        <img :src="post.img" alt="Product image">
        <h2>
          {{ post.title }}
        </h2>
        <span class="price">
          {{ post.nominal }} $
        </span>
        <div class="counter_btn">
          <button @click="changeCounter(id,1)">
            +
          </button>
          <span>{{ post.count }}</span>
          <button :disabled="$store.state.cards[id].count < 1" @click="changeCounter(id,-1)">
            -
          </button>
        </div>
        <span class="card_total">{{ post.total }} $</span>
        <button class="delete_btn" @click="remove(id)">
          <img src="~/assets/delete.png" alt="delete icon">
        </button>
      </li>
    </ul>
    <div class="total_price">
      <span>К оплате {{ totalPrice }} $</span>
      <button>Оплатить</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['allCards', 'totalPrice'])
  },
  methods: {
    changeCounter (post, step) {
      this.$store.commit('quantityCard', { post, step })
    },
    remove (index) {
      this.$store.commit('removeCard', { index })
    }
  }
}
</script>

<style>
.basket_head{
  text-align: center;
  margin: 10px;
}
.basket_card_title{
  display: grid;
  grid-template-columns: 45% 15% 15% 15% 10%;
  border-bottom: 1px solid #000;
  align-items: center;
  padding: 10px 0;
}
.basket_card{
  display: grid;
  grid-template-columns: 15% 30% 15% 15% 15% 10%;
  grid-template-areas: "img title price count total delbtn";
  align-items: center;
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
  margin: 10px 0;
}
.basket_card h2{
  margin-left: 10px;
  grid-area: title;
}
.basket_card img{
  width: 100%;
  height: auto;
  grid-area: img;
}
.basket_card > .price{
  grid-area: price;
}
.basket_card > .counter_btn{
  grid-area: count;
}
.basket_card > .card_total{
  grid-area: total;
}
.counter_btn > button{
  width: 20px;
}
.counter_btn > span{
  margin: 0 8px;
}
.delete_btn{
  border: none;
  width: 35px;
  height: 35px;
  grid-area: delbtn;
  margin-left: 10px;
  cursor: pointer;
}
.delete_btn > img {
  background-color: #f16536;
  width: 100%;
  height: 100%;
  padding: 5px;
}
.delete_btn:active{
  border: 1px solid #000;
  transform: scale(1.05);
}
.total_price{
  float: right;
  margin-right: 20px;
}
.total_price > button{
  background-color: #f16536;
  color: #fff;
  cursor: pointer;
  border: 1px solid #f16536;
  max-width: 150px;
  padding: 10px;
  margin: 15px;
}
.total_price > button:active{
  transform: scale(1.01);
  border-color: #000;
}
@media (max-width: 535px){
  .basket_card_title{
    display: none;
  }
  .basket_card{
    grid-template-columns: 30% 30% 20% 20% ;
    grid-template-areas: "img title count delbtn"
                         "img price total delbtn";
  text-align: center;
  }
  .counter_btn > span{
  margin: 0 3px;
}
}
</style>
