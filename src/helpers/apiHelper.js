export const objToStr = (obj) => {
  let qstr = Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&')

  return qstr
}

export const objToQueryStr = (obj) => {
  let qstr = Object.keys(obj).map(function (k) {
    if (obj[k]) {
      return `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`
    }
  }).join('&')

  return qstr
}
