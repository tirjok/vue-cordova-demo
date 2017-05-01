export const isAdmin = (roles) => {
  let decission = false

  if (!roles) {
    return decission
  }

  roles.forEach(function (item) {
    if (item === 'admin') {
      decission = true
      return false
    }
  })

  return decission
}

export const isSuperAdmin = (roles) => {
  let decission = false

  if (!roles) {
    return decission
  }

  roles.forEach(function (item) {
    if (item === 'super_user') {
      decission = true
      return false
    }
  })

  return decission
}
