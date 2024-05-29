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
                setCameraDistance(700); // Increase the distance for smaller screens
            } else {
                setCameraDistance(500); // Default distance
            }
        };

        // Set initial distance based on current window width
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
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
                    enableZoom={true} 
                    minDistance={cameraDistance} 
                    maxDistance={cameraDistance + 500} 
                    target={[0, 0, 0]} // Focus on the center of the room
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
