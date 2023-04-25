import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { Box, Tooltip } from '@chakra-ui/react';

const Keyboard = () => {

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 1000);
    const renderer = new THREE.WebGLRenderer();
    const containerRef = useRef();
    
    useEffect(() => {
        const width = containerRef?.current?.offsetWidth;
        const height = containerRef?.current?.offsetHeight;
        
    // Renderer
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Point light
    const pointLight = new THREE.PointLight(0xffffff, 0.3);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    

    renderer.setClearColor( 0x000000, 0 );
    
    scene.add(camera);
    camera.lookAt(scene.position);
    camera.zoom = 650;
    camera.updateProjectionMatrix();    
    
    
    // Load a glTF resource
    const loader = new GLTFLoader();
    loader.load( "/keyboard/scene.gltf", function ( gltf ) {
        
        const model = gltf.scene;
        scene.add( model );
        model.rotation.x = 0.4;
        model.position.z = -4;
        model.position.y = 0.1;

        model.scale.set(10, 7, 10);

        // Animation
        const mixer = new THREE.AnimationMixer(model);
        const action = mixer.clipAction(gltf.animations[0]);
        action.play();

        // Render loop
        const animate = function () {

            model.rotation.y += 0.003;
            mixer.update(0.04);
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

    }, undefined, function ( error ) {
        console.error( error );
    } );


}, []);



    return (
        <Tooltip label='This work is based on "keyboard" (https://sketchfab.com/3d-models/keyboard-ba869e8681974cf088736173b8b86fef) by 45P3R4 (https://sketchfab.com/45P3R4) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)' bg='whiteAlpha.200' placement='right' >
            <Box w={{base: '80%', 'xl': '50%'}} h={{base: '35vh', 'xl': '100%'}} ref={containerRef}>
            </Box>
        </Tooltip>
    );
};

export default Keyboard;