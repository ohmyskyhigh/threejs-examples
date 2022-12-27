import * as THREE from "three";
import { useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { applyProps } from '@react-three/fiber'

function Urus(props: any) {
	// load lambo asset
	const { scene, nodes, materials } = useGLTF("lambo/lambo.glb");

    useEffect(()=>{
        if(scene){
            const box = new THREE.Box3().setFromObject(scene);
            console.log("obj min", box.min);
            console.log("obj max", box.max);
        }
    }, [scene]);

	return <primitive object={scene} {...props} />;
}

export default Urus;
