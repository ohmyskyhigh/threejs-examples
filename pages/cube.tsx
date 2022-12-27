import * as THREE from "three";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";

export default function Cube() {
	function Box(props: ThreeElements["mesh"]) {
		const ref = useRef<THREE.Mesh>(null!);
		const [hovered, hover] = useState(false);
		const [clicked, click] = useState(false);

		// use frame;
		useFrame((state, delta) => (ref.current.rotation.x += delta));
		return (
			<mesh {...props} ref={ref} scale={clicked ? 1.5 : 1}>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
			</mesh>
		);
	}

	return (
        //camera default { fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }
		<Canvas>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Box position={[0, 0, 0]} />
		</Canvas>
	);
}
