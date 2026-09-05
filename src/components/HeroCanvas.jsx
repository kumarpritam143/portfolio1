import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Sphere() {
    return (
        <mesh rotation={[0.5, 0.5, 0]}>
            <icosahedronGeometry args={[2, 1]} />
            <meshBasicMaterial
                color="#a855f7"
                wireframe
            />
        </mesh>
    );
}

export default function HeroCanvas() {
    return (
        <Canvas camera={{ position: [0, 0, 6] }}>
            <ambientLight intensity={1} />
            <Sphere />
            <OrbitControls
                autoRotate
                autoRotateSpeed={2}
                enableZoom={false}
            />
        </Canvas>
    );
}