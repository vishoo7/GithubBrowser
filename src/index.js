import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(reducer)

render(
  document.getElementById('root')
)
