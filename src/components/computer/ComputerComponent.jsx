import "./ComputerComponent.css";
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import  { Environment, OrbitControls } from '@react-three/drei'; 
import Computer from '../../../public/Computer';

const ComputerComponent = () => {
    return (
        <div className="computer-background">
            <Canvas className="computer">
                <ambientLight />
                <OrbitControls enableZoom={false}/>
                <Suspense fallback={null}>
                    <Computer />
                </Suspense>
                <Environment preset='sunset'/>
            </Canvas>
        </div>
    );
};

export default ComputerComponent;
