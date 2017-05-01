import * as types from '../mutation-types'

const state = {
  profile: {},
  roles: [],
  company: {}
}

const mutations = {
  [types.SET_USER_PROFILE] (state, profile) {
    state.profile = profile
  },

  [types.SET_USER_ROLES] (state, roles) {
    state.roles = roles
  },

  [types.SET_USER_COMPANY] (state, info) {
    state.company = info
  }
}

export default {
  state,
  mutations
}
