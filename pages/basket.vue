<template>
  <div>
    <h1>
      Here basket
    </h1>
    <ul>
      <li v-for="post in allCategories" :key="post">
        {{ post.title }} || {{ post.nominal }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed:
    mapGetters(['allCategories'])
}
</script>
