import React from 'react'
import ReactDOM from 'react-dom/client'
import Exercicio4a from './Exercicio4a'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Exercicio4a />
    </Provider>
  </React.StrictMode>,
)
