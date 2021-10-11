export const state = () => ({
  cards: []
})
export const mutations = {
  addCard (state, data) {
    let target = 0
    let i
    for (i = 0; i < state.cards.length; i++) {
      if (state.cards[i].title === data.title && state.cards[i].nominal === data.nominal) {
        target = 1; break
      }
    }
    if (target === 0) { state.cards.push(data) } else {
      state.cards[i].count += 1
      state.cards[i].total = state.cards[i].count * state.cards[i].nominal
    }
  },
  quantityCard (state, { post, step }) {
    state.cards[post].count += step
    state.cards[post].total = state.cards[post].count * state.cards[post].nominal
  },
  removeCard (state, index) {
    state.cards.splice(index.index, 1)
  }
}

export const getters = {
  allCards (state) {
    return state.cards
  },
  totalPrice (state) {
    let price = 0
    for (let i = 0; i < state.cards.length; i++) {
      price += parseInt(state.cards[i].total)
    }
    return price
  }
}
