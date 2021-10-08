export const actions = {
  totalPrices ({ commit }) {
    commit('prices')
  }
}

export const state = {
  categories: [],
  count: 0
}
export const mutations = {
  addToCard (state, data) {
    state.categories.push(data)
    state.count++
  },
  addToCounter (state, { post, step }) {
    state.categories[post].count += step
    state.categories[post].total = state.categories[post].count * state.categories[post].nominal
  },
  removeCard (state, index) {
    state.categories.splice(index.index, 1)
  }

}
export const getters = {
  allCategories (state) {
    return state.categories
  },
  totalPrice (state) {
    let price = 0
    for (let i = 0; i < state.categories.length; i++) {
      price += parseInt(state.categories[i].total)
    }
    return price
  }
}
