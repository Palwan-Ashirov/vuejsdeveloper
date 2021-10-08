<template>
  <div>
    <h1>
      Here basket
    </h1>
    <ul>
      <li v-for="post,id in allCategories" :key="id">
        {{ post.title }} || {{ post.nominal }} || {{ post.count }} || Total price {{ post.total }}
        <button @click="changeCounter(id,1)">
          +
        </button>
        <button :disabled="$store.state.categories[id].count < 1" @click="changeCounter(id,-1)">
          -
        </button>
        <button @click="remove(id)">
          delete
        </button>
      </li>
    </ul>
    {{ totalPrice }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['allCategories', 'totalPrice'])

  },
  // mapGetters(['allCategories']),
  methods: {
    changeCounter (post, step) {
      this.$store.commit('addToCounter', { post, step })
    },
    remove (index) {
      this.$store.commit('removeCard', { index })
    }

  }

}

</script>
