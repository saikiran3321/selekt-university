import React, { useEffect, useState, Fragment } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import * as mobX from 'mobx'
import { toast } from 'react-toastify'
import ReactGA from 'react-ga'
import Preloader from './components/elements/Preloader'
// import Cursor from './components/elements/CursorEffect'

import './assets/css/animate.min.css'
import './assets/css/aos.css'
import './assets/css/default-icons.css'
import './assets/css/flaticon-eduvalt.css'
import './assets/css/fontawesome-all.min.css'
import './assets/css/magnific-popup.css'
import './assets/css/main.css'
import './assets/css/odometer.css'
import './assets/css/select2.min.css'
import './assets/css/spacing.css'
import './assets/css/tg-cursor.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AppContainer, ToastContainer } from './containers'
import { stores } from './store'

mobX.configure({ enforceActions: true })
toast.configure()
if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize('UA-120517618-2')
}

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      AOS.init({
        duration: 1000,
        mirror: true,
        once: true,
        disable: 'mobile',
      })
    }, 1000)
  }, [])

  return (
    <Fragment>
      {/* <Cursor /> */}
      {!loading ? (
        <Provider store={stores}>
          <div>
            <AppContainer {...stores} />
            <ToastContainer toastModel={stores.toastModel} />
          </div>
        </Provider>
      ) : (
        <Preloader />
      )}
    </Fragment>
  )
}

render(<App />, document.getElementById('root'))

window.store = stores
