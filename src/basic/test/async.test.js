const fetchProduct = require('../async.js')
describe('Async', () => {
  it('async - done', done => {
    fetchProduct().then(item => {
      // done을 사용하지 않을 경우 promise보다 test case가 먼저 실행된다.
      expect(item).toEqual({ item: 'Milk', price: 200 })
      //  수동적으로 끝나는 시점을 명시
      //  하지만 수행시간 때문에 추천하지는 않음
      done()
    })
  })
  it('async - return', () => {
    //   어떤 비동기적인 코드를 진행하고 그 안에서 어떤것을 확인한다면 return을 해주면 된다.
    return fetchProduct().then(item => {
      expect(item).toEqual({ item: 'Milk', price: 200 })
    })
  })
  it('async - await', async () => {
    const product = await fetchProduct()
    expect(product).toEqual({ item: 'Milk', price: 200 })
  })
  it('async - resolves', () => {
    return expect(fetchProduct()).resolves.toEqual({ item: 'Milk', price: 200 })
  })
  it('async - reject', () => {
    return expect(fetchProduct('error')).rejects.toBe('network error')
  })
})
