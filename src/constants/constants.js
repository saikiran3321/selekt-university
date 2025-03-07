import ReactGA from 'react-ga'

export const VIDEO = [
  { section: 'builder', id: 'Cq8pwHNG7bU', title: 'How to change fonts ?' },
  { section: 'builder', id: 'Cq8pwHNG7bU', title: 'How to change Color ?' },
  { section: 'builder', id: 'Cq8pwHNG7bU', title: 'How to change background ?' },
  { section: 'preview', id: 'Cq8pwHNG7bU', title: 'How to change templates ?' },
  { section: 'preview', id: 'Cq8pwHNG7bU', title: 'How to change section styles ?' },
  { section: 'options', id: 'Cq8pwHNG7bU', title: 'How to change section title ?' },
  { section: 'options', id: 'Cq8pwHNG7bU', title: 'How to change Rating ?' },
]

export const sendGoogleAnalytics = (pathname) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.pageview(pathname)
  }
}

export const registerForGoogleAnalytics = (history) => {
  if (process.env.NODE_ENV === 'production') {
    history.listen((location) => {
      ReactGA.set({ page: location.pathname })
      ReactGA.pageview(location.pathname)
    })
  }
}
