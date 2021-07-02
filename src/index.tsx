
import React from 'react'
import ReactDOM from 'react-dom'
import { MainComp } from './components/main.comp'
import { CA } from './store/actions'
import { AppStore } from './store/app-store'


ReactDOM.render(
  <MainComp store={AppStore} register={true} />,
  document.getElementById('main')
)

// Side effects

window.addEventListener("resize", (evt) => {
  CA.GlobalUi.updateCanvas(window.innerWidth, window.innerHeight)
})
