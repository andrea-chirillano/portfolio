import "./ComputerComponent.css";
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'; 
import Computer from '../../../public/Computer';
import useMediaQuery from './useMediaQuery';

const ComputerComponent = () => {
    const isScreenSmall = useMediaQuery('(max-width: 700px)');

    const cameraPosition = isScreenSmall ? [10, 5, 10] : [5, 1, 5];

    return (
        <div className="computer-background">
            <Canvas className="computer">
                <ambientLight />
                <PerspectiveCamera 
                    makeDefault 
                    position={cameraPosition}
                    rotation={[0, -Math.PI / 4, 0]} 
                />
                <OrbitControls 
                    enableZoom={false}
                    target={[0, 0, 0]}
                />
                <Suspense fallback={null}>
                    <Computer />
                </Suspense>
                <Environment preset="sunset" />
            </Canvas>
        </div>
    );
};

export default ComputerComponent;
