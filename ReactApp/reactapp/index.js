import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import App from './components/app.jsx'

// store.dispatch(push('/foo'))
import {store,history} from './reducers/store'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)


