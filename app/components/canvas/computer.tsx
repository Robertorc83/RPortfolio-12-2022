import { Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../loader";
import { useIsSmall } from "~/hooks/useMediaQuery";

const Computers = ({isSmall}: {isSmall: boolean}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isSmall ? 0.7 : 1.2}
        position={isSmall ? [0, -3, -2.2] : [0, -2.0, -2.75]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const isSmall = useIsSmall()
  return (
    <div className="overflow-visible lg:h-[350px] xl:h-[400px]">
        <Canvas
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        >
        <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            />
            <Computers isSmall={isSmall} />
        </Suspense>

        <Preload all />
        </Canvas>
    </div>
  );
};

export default ComputersCanvas;
