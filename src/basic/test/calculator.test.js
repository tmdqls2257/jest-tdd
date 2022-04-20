const Calculator = require('../calculator.js')

describe('Calculator', () => {
  // 테스트 전에 무엇인가 준비 되어야 한다면 beforeEach에서
  // 테스트가 끝나고 마무리 정리가 되어야 한다면 afterEach
  // 모든 테스트가 시작하기 전에 한번만 실행 beforeAll
  // 모든 테스트가 끝나고 한번만 실행 afterAll

  let cal
  beforeEach(() => {
    cal = new Calculator()
  })

  it('inits  with 0', () => {
    expect(cal.value).toBe(0)
  })

  it('sets', () => {
    cal.set(9)
    expect(cal.value).toBe(9)
  })

  it('clear', () => {
    cal.set(9)
    cal.clear()
    expect(cal.value).toBe(0)
  })

  it('add', () => {
    cal.set(9)
    cal.add(2)
    expect(cal.value).toBe(11)
  })

  it('add가 100보다 클경우 에러를 던집니다.', () => {
    // 예상하는 에러는 expect로 던져줍니다.
    expect(() => {
      cal.add(101)
    }).toThrow('Value can not be greater than 100')
  })

  it('subtract', () => {
    cal.subtract(-1)
    expect(cal.value).toBe(1)
  })

  it('multiply', () => {
    cal.set(5)
    cal.multiply(-1)
    expect(cal.value).toBe(-5)
  })

  describe('divides', () => {
    it('0/0 === NaN', () => {
      cal.divide(0)
      expect(cal.value).toBe(NaN)
    })
    it('1/0 === Infinity', () => {
      cal.set(1)
      cal.divide(0)
      expect(cal.value).toBe(Infinity)
    })

    it('4/4 === 1', () => {
      cal.set(4)
      cal.divide(4)
      expect(cal.value).toBe(1)
    })
  })
})
