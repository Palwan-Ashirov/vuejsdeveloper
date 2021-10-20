export const state = () => ({
  cards: []
})
export const mutations = {
  addCard (state, data) {
    const card = state.cards.find(item => item.title === data.title && item.nominal === data.nominal)
    if (!card) { state.cards.push(data) } else {
      state.cards.forEach((item) => {
        if (item.title === data.title && item.nominal === data.nominal) {
          quantityTotal(item, 1)
        }
      })
    }
  },
  quantityCard (state, { post, step }) {
    const card = state.cards[post]
    quantityTotal(card, step)
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
    state.cards.forEach((element) => {
      price += parseInt(element.total)
    })
    return price
  }
}

export const quantityTotal = (card, step) => {
  card.count += step
  card.total = card.count * card.nominal
}
