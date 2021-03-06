import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import store from './redux/store'
const theme = {
  colors: {
    dark: '#363636',
    grey: '#BABABA'
  },
  fonts: {
    main: 'Oswald, sans-serif',
    heading: 'Cabin, sans-serif',
    interFont: 'Inter, sans-serif'
  }
}
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
    <App />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
