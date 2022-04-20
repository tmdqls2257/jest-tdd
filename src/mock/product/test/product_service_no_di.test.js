const ProductService = require('../product_service_no_di.js')
const ProductClient = require('../product_client.js')
// 실제 product_client를 사용하는 것이 아닌 가짜를 사용합니다.
jest.mock('../product_client')

// 단위 테스트는 서로 모듈간의 상호작용을 테스트하면 안되고 그 단위 하나만 테스트해야합니다.
describe('ProductService', () => {
  // fetchItems를 호출하면 mock함수가 콜백함수를 호출해줍니다.
  const fetchItems = jest.fn(async () => [
    { item: '🥛', available: true },
    { item: '🍌', available: false },
  ])
  // ProductClient를 호출하면 fetchItems가 실행됩니다.
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    }
  })
  let productService

  beforeEach(() => {
    productService = new ProductService()
    fetchItems.mockClear()
    ProductClient.mockClear()
  })

  it('should filter out only available items', async () => {
    // productService.fetchAvailableItems()를 실행하면 fetchItems에 있는 아이템중에서
    // available이 true인 값만 리턴
    const items = await productService.fetchAvailableItems()
    expect(items.length).toBe(1)
    expect(items).toEqual([{ item: '🥛', available: true }])
  })

  it('test', async () => {
    const items = await productService.fetchAvailableItems()
    // 함수가 호출된 횟수
    expect(fetchItems).toHaveBeenCalledTimes(1)
  })
})
