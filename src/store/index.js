import { RouterStore } from 'mobx-react-router'
import ToastModel from './ToastModel'
import ApplicationModel from './ApplicationModel'

export const stores = {
  toastModel: new ToastModel(),
  applicationModel: new ApplicationModel(),
  routing: new RouterStore(),
}
