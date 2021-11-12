import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './state/store'
import { MuiThemeProvider } from '@material-ui/core/styles'
import './app-configs'
import App from './App'
import materialTheme from './materialTheme'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeProvider theme={materialTheme}>
        <App />
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
