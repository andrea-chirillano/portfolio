import "./ComputerComponent.css";
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'; 
import Computer from '../../../public/Computer';

const ComputerComponent = () => {
    return (
        <div className="computer-background">
            <Canvas className="computer">
                <ambientLight />
                <PerspectiveCamera 
                    makeDefault 
                    position={[5, 2, 5]} 
                    rotation={[0, -Math.PI / 4, 0]} 
                />
                <OrbitControls 
                    enableZoom={false} 
                    target={[0, 0, 0]} // Focus on the center of the computer
                />
                <Suspense fallback={null}>
                    <Computer />
                </Suspense>
                <Environment preset='sunset'/>
            </Canvas>
        </div>
    );
};

export default ComputerComponent;
