
export const state = {
  categories: [],
  count: 0
}

export const getters = {
  allCategories (state) {
    return state.categories
  }
}
export const mutations = {
  addToCard (state, data) {
    state.categories.push(data)
    state.count++
  }
}
