<template>
  <div class="index_page">
    <div class="menu">
      <ul class="menu_list">
        <li class="menu_item">
          <input id="0" v-model="pickedCategory" type="radio" value="AllCategory">
          <label for="0">All Category</label>
        </li>
        <li v-for="category of categories" :key="category.id" class="menu_item">
          <input :id="category.id" v-model="pickedCategory" type="radio" :value="category.title">
          <label :for="category.id">{{ category.title }}</label>
        </li>
      </ul>
    </div>

    <div class="card">
      <Card
        :cards="filteredCards"
      />
    </div>
  </div>
</template>

<script>
import categoriesJSON from '@/static/categories'
import brandsJSON from '@/static/brands'

export default {
  data () {
    return {
      categories: categoriesJSON,
      pickedCategory: 'AllCategory',
      cards: brandsJSON
    }
  },
  computed: {
    choosenCategory () {
      if (this.pickedCategory === 'AllCategory') { return 0 }
      const data = this.categories.filter(item => item.title.includes(this.pickedCategory))
      return data[0].id
    },
    filteredCards () {
      if (this.choosenCategory < 1) { return this.cards }
      return this.cards.filter(item => item.categories.includes(this.choosenCategory))
    }
  },
  methods: {

  }
}
</script>

<style>
.index_page{
  display: flex;
  justify-content: space-between;
}
.menu{
  width: 20%;
}
.card{
  width: 80%;
}
.menu_item{
  list-style: none;
}
</style>
