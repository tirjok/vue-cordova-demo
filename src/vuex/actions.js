import * as types from './mutation-types'

export const setProfile = ({commit, dispatch}, item) => {
  commit(types.SET_USER_PROFILE, item)

  if (item) {
    dispatch('setRoles', item.roles)
  } else {
    dispatch('setRoles', null)
  }
}

export const setRoles = ({commit}, roles) => {
  commit(types.SET_USER_ROLES, roles)
}
