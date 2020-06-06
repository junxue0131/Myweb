export function throttle(fn, threshhold = 100) {
    let timeout = null
    let start = new Date()
    return function() {
      let curr = new Date() - 0
      clearTimeout(timeout)
      if (curr - start >= threshhold) {
        fn.apply(this, arguments)
        start = curr
      } else {
        timeout = setTimeout(() => {
          fn.apply(this, arguments)
        }, threshhold)
      }
    }
  }