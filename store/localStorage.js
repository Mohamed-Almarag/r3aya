export const state = () => ({
  currentLocale: 'en',
  expire: 24,
  status: true,
})

export const mutations = {
  SET_CURRENT_LOCALE(state, payload) {
    state.currentLocale = payload
  },
}

export const getters = {
  currentLocale(state) {
    return state.currentLocale
  },
}
