import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { VideoUploadStatus, ScoliosisPredictionStatus, PointCloudData } from '../../types';
import * as THREE from 'three';

type PointsProps = {
    pointCloudData: THREE.Vector3[]
};

// This component will contain the useFrame hook and is a direct child of Canvas.
// I couldn't consolidate it into Visualizer because useFrame can only be used
// on direct children of the canvas component
const Points = ({ pointCloudData } : PointsProps) => {
    const pointsRef = useRef<THREE.Points>(null);
    const pointsGeometry = new THREE.BufferGeometry().setFromPoints(pointCloudData);
    
    // animate the visualized data
    useFrame(() => {
        if (pointsRef.current) {
            pointsRef.current.rotation.x += 0.01;
            pointsRef.current.rotation.y += 0.01;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry attach="geometry" {...pointsGeometry} />
            <pointsMaterial attach="material" color="white" size={10} />
        </points>
    );
};

type VisualizerProps = {
    pointCloudData: PointCloudData,
    videoUploadStatus: VideoUploadStatus,
    scoliosisPredictionStatus: ScoliosisPredictionStatus
};

// Visualize the data under full illumination
export function Visualizer ({ pointCloudData, videoUploadStatus, scoliosisPredictionStatus } : VisualizerProps) {

    console.log(pointCloudData);
    const points : THREE.Vector3[] = [];
    for (const point of pointCloudData) {
        points.push(new THREE.Vector3(point.x, point.y, point.z));
    }

    return (
        <div className="flex flex-col items-center w-full h-full">
        <div className="flex justify-around w-full p-4">
          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg">Video Upload Status</span>
            <span className="text-xl">{videoUploadStatus}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg">Scoliosis Prediction Status</span>
            <span
              className={`text-xl ${
                scoliosisPredictionStatus === "Positive"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {scoliosisPredictionStatus}
            </span>
          </div>
        </div>
        <div className="flex-grow">
          <Canvas>
            <ambientLight />
            <Points pointCloudData={points} />
          </Canvas>
        </div>
      </div>
    );
};