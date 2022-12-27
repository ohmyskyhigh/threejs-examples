import * as THREE from "three";
import {
	Environment,
	Lightformer,
	ContactShadows,
	OrbitControls,
	Stats,
	GizmoHelper,
	GizmoViewport,
	PerspectiveCamera,
} from "@react-three/drei";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import Urus from "../components/lambo.component";
import React, { createRef, Fragment, useEffect, useRef, Suspense } from "react";
import { Group } from "three";

export default function Lambo() {
	const meshRef = useRef<Group>(null);
	const boundingBox = new THREE.Box3();
	const boundingBoxSize = new THREE.Vector3();

	return (
		<Fragment>
			<Canvas 
                gl={{ toneMappingExposure: 0.7 }}
                style={{height:"100vh"}}
            >
				<Suspense fallback={null}>
					<Environment
						files="/lambo/old_depot_2k.hdr"
						ground={{ height: 30, radius: 180 }}
					/>
					<spotLight
						angle={1}
						position={[-80, 200, -100]}
						intensity={1}
					/>
					<ContactShadows
						renderOrder={2}
						frames={1}
						resolution={1024}
						scale={120}
						blur={2}
						opacity={0.6}
						far={100}
					/>
				</Suspense>
				<OrbitControls
					enableZoom={false}
					enablePan={false}
					minPolarAngle={0}
					maxPolarAngle={Math.PI / 2.25}
					makeDefault
				/>
				<PerspectiveCamera
					makeDefault
					position={[0, 150, 120]}
					fov={30}
				/>
			</Canvas>
		</Fragment>
	);
}
