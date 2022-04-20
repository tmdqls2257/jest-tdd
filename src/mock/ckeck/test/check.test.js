const check = require('../check')

describe('check', () => {
  let onSuccess
  let onFail

  beforeEach(() => {
    onSuccess = jest.fn()
    onFail = jest.fn()
  })

  it('should call onSuccess when predicate is true', () => {
    check(() => true, onSuccess, onFail)

    // onSuccess의 mock함수의 호출된 횟수의 길이가 1인경우
    expect(onSuccess.mock.calls.length).toBe(1)

    // onSuccess의 mock함수의 호출된 횟수의 길이가 1인경우
    expect(onSuccess).toHaveBeenCalledTimes(1)

    // expect(onSuccess.mock.calls[0][0]).toBe('yes')
    expect(onSuccess).toHaveBeenCalledWith('yes')

    expect(onFail.mock.calls.length).toBe(0)
  })

  it('should call onFail when predicate is true', () => {
    check(() => false, onSuccess, onFail)

    expect(onSuccess).toHaveBeenCalledTimes(0)

    expect(onFail).toHaveBeenCalledWith('no')

    expect(onFail).toHaveBeenCalledTimes(1)
  })
})
