export * from './auth'

// 用于封装wx promise
export const promisify = original => {
    return function(opt) {
      return new Promise((resolve, reject) => {
        opt = Object.assign({
          success: resolve,
          fail: reject
        }, opt)
        original(opt)
      })
    }
}
  
  