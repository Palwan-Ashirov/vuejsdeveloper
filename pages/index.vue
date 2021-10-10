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

<style scoped>

.index_page{
  display: flex;
  justify-content: space-between;
}
.menu{
  max-width: 20%;
}
.card{
  width: 80%;
}
.menu_list{
  margin-top: 10px;
  border-radius: 15px;
  padding: 5px 5px 5px;
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.1), 0 2px 2px 0 rgba(0, 0, 0, 0.19);
}
.menu_item{
  list-style: none;
  margin-bottom: 8px;
}
.menu_item input[type=radio] {
  display: none;
}
.menu_item input[type=radio]:checked + label{
  color: #f16536;
  border-bottom: 1px solid #f16536;
}
.menu_item label{
  cursor: pointer;
  font-size: 18px;

}
.menu_item label:hover{
  color: #f16536;
  border-bottom: 1px solid #f16536;
  opacity: 0.6;
}
@media (max-width:768px){
  .menu{
    display: none;
  }
  .card{
    width: 100%;
  }
}
</style>
