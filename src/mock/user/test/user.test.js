const UserService = require('../user_service')
const UserClient = require('../user_client')
jest.mock('../user_client')

describe('UserService', () => {
  const login = jest.fn(async () => {})

  UserClient.mockImplementation(() => {
    return {
      login,
    }
  })

  let userService

  beforeEach(() => {
    userService = new UserService(new UserClient())
  })

  it('login', async () => {
    await userService.login('abc', 'abc')
    await userService.login('abc', 'abc')
    expect(login.mock.calls.length).toBe(1)
  })
})
