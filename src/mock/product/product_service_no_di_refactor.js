class ProductService_stub {
  constructor(productClient) {
    // Dependency Injection에 맞게
    this.productClient = productClient
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then(items => items.filter(item => item.available))
  }
}

module.exports = ProductService_stub
