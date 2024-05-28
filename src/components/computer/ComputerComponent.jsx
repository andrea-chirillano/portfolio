import "./ComputerComponent.css";
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import  { Environment, OrbitControls } from '@react-three/drei'; 
import Computer from '../../../public/Computer.jsx';

const ComputerComponent = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="computer-background">
            <Canvas>
                <ambientLight intensity={1}/>
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
