export const actions = {
  totalPrices ({ commit }) {
    commit('prices')
  }
}

export const state = {
  categories: []
}
export const mutations = {
  addToCard (state, data) {
    let target = 0
    let i
    for (i = 0; i < state.categories.length; i++) {
      if (state.categories[i].title === data.title && state.categories[i].nominal === data.nominal) {
        target = 1; break
      }
    }
    if (target === 0) { state.categories.push(data) } else {
      state.categories[i].count += 1
    }
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
