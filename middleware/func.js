export default class Func {
  static LoadJS = () => {
    setTimeout(() => {
      const links = [
        '/js/bootstrap.bundle.min.js',
        '/js/owl.carousel.min.js',
        '/js/jquery.magnific-popup.min.js',
        '/js/wNumb.js',
        '/js/nouislider.min.js',
        '/js/jquery.mousewheel.min.js',
        '/js/jquery.mCustomScrollbar.min.js',
        '/js/main.js'
      ]
      // window.addEventListener('load', function (event) {
      links.map((value, key) => {
        const script = document.createElement('script')
        script.src = value
        return document.body.append(script)
      })
      // })
    }, 300)
  }

  static VND = (n, separate = ',') => {
    const s = n.toString()
    const len = s.length
    let ret = ''
    for (let i = 1; i <= len; i++) {
      ret = s[len - i] + ret
      if (i % 3 === 0 && i < len) {
        ret = separate + ret
      }
    }
    return ret
  }

  static changeTime = (time) => {
    const startTime = new Date(time)

    // later record end time
    const endTime = new Date()

    // time difference in ms
    let timeDiff = endTime - startTime

    // strip the ms
    timeDiff /= 1000

    // get seconds (Original had 'round' which incorrectly counts 0:28, 0:29, 1:30 ... 1:59, 1:0)
    const seconds = Math.round(timeDiff % 60)

    // remove seconds from the date
    timeDiff = Math.floor(timeDiff / 60)

    // get minutes
    const minutes = Math.round(timeDiff % 60)

    // remove minutes from the date
    timeDiff = Math.floor(timeDiff / 60)

    // get hours
    const hours = Math.round(timeDiff % 24)

    // remove hours from the date
    timeDiff = Math.floor(timeDiff / 24)

    // the rest of timeDiff is number of days
    const days = timeDiff

    if (days >= 1) {
      return days + ' ngày trước'
    } else if (hours >= 1) {
      return hours + ' giờ trước'
    } else if (minutes >= 1) {
      return minutes + ' phút trước'
    } else {
      return seconds + ' giây trước'
    }
  }

  static changeDate = (time) => {
    return time.slice(0, 19).replace('T', ' ') // date dang Date.toISOString() =>>> 011-10-05T14:48:00.000Z
  }
}
