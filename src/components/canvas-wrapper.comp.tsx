import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React, { useContext, useEffect, useRef } from "react"
import { AppCtx } from "../store/context"
import { Box } from "./box.comp"

export const CanvasWrapper: React.FC = () => {

  const ctx = useContext(AppCtx).Parts
  const testPart = ctx.current["test"]

  return (
    <Canvas onCreated={bla => {}}>
        <ambientLight/>
        <pointLight position={[10, 10, 10]} />
        <Box invert={true} scale={[14.5, 14.5, 14.5]} position={[0, 0, 0]} />
        <Box part={testPart} color={""} position={[1.2, 0, 0]} />
        <OrbitControls />
      </Canvas>
  )
}
