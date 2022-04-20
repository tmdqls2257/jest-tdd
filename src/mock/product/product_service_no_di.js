const ProductClient = require('./product_client')
class ProductService {
  constructor() {
    // 좋지 못한 코드 클래스 내부에서 의존성을 만들어주는 것은 OOP설계 원칙을 벗어나는 행위
    this.productClient = new ProductClient()
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then(items => items.filter(item => item.available))
  }
}

module.exports = ProductService
