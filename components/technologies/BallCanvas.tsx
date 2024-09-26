"use client"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Decal, Float, Preload, useTexture } from "@react-three/drei"

// import CanvasLoader from "../Loader"

interface BallProps {
  imgUrl: string
}

interface BallCanvasProps {
  icon: {
    src: string
    height: number
    width: number
    blurDataURL: string
    blurWidth: number
    blurHeight: number
  }
}

const Ball = ({imgUrl} : BallProps) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} floatIntensity={2} rotationIntensity={1}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#ff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal map={decal} position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]}  />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon} :BallCanvasProps) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ball imgUrl={icon.src}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas