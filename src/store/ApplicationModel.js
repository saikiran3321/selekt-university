import { observable, action } from 'mobx'

export default class ApplicationModel {
  @observable isLogin = false

  constructor() {
    this.initialize()
  }

  @action
  initialize() {
    const status = localStorage.getItem('isLogin')
    this.setLogin(status === 'true')
  }

  getLogin() {
    return this.isLogin
  }

  @action
  setLogin(val) {
    this.isLogin = val
  }
}
