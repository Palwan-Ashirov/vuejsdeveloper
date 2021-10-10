<template>
  <div class="index_page">
    <div class="menu">
      <div class="burger_menu">
        <h3 @click="mobileView = !mobileView">
          Категория товаров
        </h3>
        <ul v-if="mobileView" class="menu_list_mb">
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
        :cards="filteredByCategories"
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
      cards: brandsJSON,
      mobileView: false
    }
  },
  computed: {
    choosenCategory () {
      if (this.pickedCategory === 'AllCategory') { return 0 }
      const data = this.categories.filter(item => item.title.includes(this.pickedCategory))
      return data[0].id
    },
    filteredByCategories () {
      if (this.choosenCategory < 1) { return this.cards }
      return this.cards.filter(item => item.categories.includes(this.choosenCategory))
    }
  }
}
</script>

<style scoped>
.index_page{
  display: flex;
}
.card{
  width: 100%;
}
.menu{
  min-width: 20%;
}
.burger_menu{
  display: none;
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
  .index_page{
    flex-direction: column;
  }
  .burger_menu{
    display: block;
    padding: 5px 0;
    background-color: gray;
    text-align: center;
    color: #fff;
    position: relative;
  }
  .burger_menu > h3{
    display: inline-block;
    cursor: pointer;
  }
  .burger_menu >h3:hover{
    color: #f16536;
  }
  .menu{
    min-width: 100%;
  }
  .menu_list{
    display: none;
  }
  .card{
    width: 100%;
  }
}
</style>
