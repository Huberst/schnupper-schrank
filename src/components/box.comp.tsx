import React from "react"
import { useRef, useState } from "react"
import * as THREE from "three"
import { TPart } from "../store/parts"

type BoxProps = {
  invert?: boolean
  color?: string,
  part?: TPart
}

export function Box(props: JSX.IntrinsicElements['mesh'] & BoxProps) {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // useFrame((state, delta) => (mesh.current.rotation.x += 0.01))

  const color = props.color || "gray"

  const part = props.part

  const geometry: [ width: number, height: number, depth: number ]= part
    ? [ part.width, part.height, part.depth ]
    : [ 1, 1, 1 ]


  return (
    <mesh
      {...props}
      ref={mesh}
      // scale={active ? 1.5 : 1}
      onClick={(event: any) => setActive(!active)}
      onPointerOver={(event: any) => setHover(true)}
      onPointerOut={(event: any) => setHover(false)}>
      <boxGeometry args={geometry} />
      <meshStandardMaterial
        side={props.invert ? THREE.BackSide : THREE.FrontSide}
        // color={hovered ? 'hotpink' : 'orange'}
        color={color}
      />
    </mesh>
  )
}
