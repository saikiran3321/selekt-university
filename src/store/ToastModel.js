import { observable, action } from 'mobx'

export default class ToastModel {
  @observable toast = {};

  @action
  showToast(text, hideToastCallback, type, timeOut) {
    this.toast = {
      text,
      hideToast: hideToastCallback,
      type,
      timeOut,
    }
  }

  @action
  hideToast() {
    this.toast = {}
  }

  @action
  removeToast() {
    this.toast = {
      removeToast: true,
    }
  }
}
