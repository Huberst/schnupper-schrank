
import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MainComp } from './components/main.comp'
import { AppStore } from './store/app-store'
import { CA } from './store/actions'







ReactDOM.render(
  <MainComp store={AppStore} register={true} />,
  document.getElementById('main')
)

// Side effects

window.addEventListener("resize", (evt) => {
  CA.GlobalUi.updateCanvas(window.innerWidth, window.innerHeight)
})

