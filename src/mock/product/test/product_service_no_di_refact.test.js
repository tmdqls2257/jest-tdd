// mock과 stub의 차이점
// mock은 기존의 함수를 흉내내는것에 불과하지만
// stub는 기존의 함수의 인터페이스를 모두 충족하는 다른 객체

const ProductService_stub = require('../product_service_no_di_refactor.js')
const StubProductClient = require('./stub_product_client.js')

describe('ProductService - Stub', () => {
  let productService

  beforeEach(() => {
    productService = new ProductService_stub(new StubProductClient())
  })

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems()
    expect(items.length).toBe(1)
    expect(items).toEqual([{ item: '🥛', available: true }])
  })
})
