import "./RoomComponent.css";
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import  { Environment, OrbitControls } from '@react-three/drei'; 
import Room from '../../../public/Room';

const RoomComponent = () => {
    const fixedDistance = 500;
    return (
        <div className="room-background">
            <Canvas className="room">
                <ambientLight />
                <OrbitControls enableZoom={false} minDistance={fixedDistance} maxDistance={fixedDistance} />
                <Suspense fallback={null}>
                    <Room />
                </Suspense>
                <Environment preset='sunset'/>
            </Canvas>
        </div>
    );
};

export default RoomComponent;
