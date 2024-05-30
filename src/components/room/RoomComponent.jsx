import "./RoomComponent.css";
import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'; 
import Room from '../../../public/Room';

const RoomComponent = () => {
    const [cameraDistance, setCameraDistance] = useState(500);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 700) {
                setCameraDistance(700); 
            } else {
                setCameraDistance(500);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const cameraPosition = [cameraDistance, cameraDistance, cameraDistance];
    const cameraRotation = [-Math.atan2(cameraDistance, cameraDistance), Math.atan2(cameraDistance, cameraDistance), 0]; // Look towards the center of the room

    return (
        <div className="room-background">
            <Canvas className="room">
                <ambientLight />
                <PerspectiveCamera 
                    makeDefault 
                    position={cameraPosition} 
                    rotation={cameraRotation} 
                />
                <OrbitControls 
                    enableZoom={false} 
                    minDistance={cameraDistance} 
                    maxDistance={cameraDistance + 500} 
                    target={[0, 0, 0]} 
                />
                <Suspense fallback={null}>
                    <Room />
                </Suspense>
                <Environment preset='sunset'/>
            </Canvas>
        </div>
    );
};

export default RoomComponent;
