const { create } = require('../model/user.model')
const UserModel = require('../model/user.model')

class UserService {
  static async registerUser (email, password) {
    try {
      const createUser = new UserModel({ email, password })
      return await createUser.save()
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}

module.exports = UserService
