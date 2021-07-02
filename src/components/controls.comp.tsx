import React, { useContext, useState } from 'react'
import { CA } from '../store/actions'
import { AppCtx } from '../store/context'
import { TPart } from '../store/parts'



export const Controls = () => {

  const ctx = useContext(AppCtx).Parts

  const testPart = ctx.current["test"]

  const [ width, setWidth ] = useState(testPart.width)

  const update = (evt: React.ChangeEvent<HTMLInputElement>) => {

    const value = evt.currentTarget.value
    const num = parseFloat(value)


    if (num <= 0) {
      console.error("width too small")
      setWidth(1)
      return
    }

    setWidth(num)

    CA.PartsActions.updatePart({
      id: "test",
      width: num,
      height: testPart.height,
      depth: testPart.depth
    })
  }

  return (
    <div id="controls">

      <label>width</label>
      <input
        value={width}
        onChange={update}
        type="number"
      />

      <label>height</label>

      <input
      // val
      type="text" />
    </div>
  )
}
