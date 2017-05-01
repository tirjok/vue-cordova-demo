export default {
  currentDateObj () {
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1
    let yyyy = today.getFullYear()

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }

    return {
      day: dd,
      month: mm,
      year: yyyy
    }
  },

  next14DaysObj () {
    let next = new Date(+new Date() + 12096e5)

    let dd = next.getDate()
    let mm = next.getMonth() + 1
    let yyyy = next.getFullYear()

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }

    return {
      day: dd,
      month: mm,
      year: yyyy
    }
  },

  currentDate () {
    let dateObj = this.currentDateObj()

    return dateObj.month + '/' + dateObj.day + '/' + dateObj.year
  },

  expireDate () {
    let dateObj = this.currentDateObj()
    let nextDateObj = this.next14DaysObj()

    return {
      today: dateObj.year + '-' + dateObj.month + '-' + dateObj.day,
      next_2_week_date: nextDateObj.year + '-' + nextDateObj.month + '-' + nextDateObj.day
    }
  },

  amountPresenterInK (amount) {
    let sellInK = amount / 1000

    if (sellInK < 1) {
      return Math.round(amount) + 'tk'
    }

    return sellInK + 'k'
  },

  amountPresenterActualInK (amount) {
    if (!amount) {
      return 0
    }

    let inK = amount / 1000

    if (inK >= 1) {
      return inK + ' K'
    }

    return Math.abs(amount) + 'TK'
  },

  getRandomIntInclusive (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
