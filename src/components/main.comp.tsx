import React, { useState } from "react"
import { TAppStore } from "../store/app-store"
import { AppCtx } from "../store/context"
import { CanvasWrapper } from "./canvas-wrapper.comp"
import { Controls } from "./controls.comp"


export const MainComp = (props: { store: TAppStore, register: boolean }) => {


  const [state, setState] = useState(props.store.getState())
  const [mounted, setMounted] = useState(false)

  if (props.register && !mounted) {
    console.warn("Reg main comp with state")
    props.store.subscribe( () => setState(props.store.getState()) )
    setMounted(true)
  }

  const Provider = AppCtx.Provider

  return (
    <Provider value={state}>
      <Controls />
      <CanvasWrapper />
    </Provider>
  )

}

