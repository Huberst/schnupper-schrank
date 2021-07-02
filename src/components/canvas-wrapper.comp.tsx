import { Canvas } from "@react-three/fiber"
import React, { useContext, useEffect, useRef } from "react"
import { AppCtx } from "../store/context"
import { Box } from "./box.comp"

export const CanvasWrapper: React.FC = () => {

  // const canvasRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<any>(null)
  const ctx = useContext(AppCtx).GlobalUi
  const { width, height } = ctx

  useEffect(() => {
    canvasRef.current?.setAttribute("width", width.toString())
    canvasRef.current?.setAttribute("height", height.toString())
  }, [width, height])


  return (
    <div ref={canvasRef}>
      <Canvas onCreated={bla => {}}>
          <ambientLight/>
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canvas>
     </div>
  )
}
