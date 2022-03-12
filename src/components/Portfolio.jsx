import React from "react";
import { TrackballControls } from 'three'
import { useEffect, useRef } from "react";
import * as THREE from "three";


function Portfolio() {
    const mountRef = useRef(null);
    useEffect(() => {

        let container;
        let camera, scene, raycaster, renderer;

        let INTERSECTED;
        let theta = 0;

        const pointer = new THREE.Vector2();
        const radius = 100;
        init();
        animate();

        function init() {

            container = document.createElement( 'div' );
            mountRef.current.appendChild( container );

            camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );

            scene = new THREE.Scene();
            scene.background = new THREE.Color( 0xf0f0f0 );

            const light = new THREE.DirectionalLight( 0xffffff, 1 );
            light.position.set( 1, 1, 1 ).normalize();
            scene.add( light );

            var geometry = new THREE.BoxGeometry( 10, 10, 10 );
            var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            var cube = new THREE.Mesh( geometry, material );

            scene.add( cube );



            raycaster = new THREE.Raycaster();

            renderer = new THREE.WebGLRenderer();
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            container.appendChild( renderer.domElement );



            document.addEventListener( 'mousemove', onPointerMove );

            //

            window.addEventListener( 'resize', onWindowResize );

        }

        function onWindowResize() {

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );

        }

        function onPointerMove( event ) {

            pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

        }

        //

        function animate() {

            requestAnimationFrame( animate );

            render();
        }

        function render() {

            theta += 0.1;


            camera.updateMatrixWorld();

            // find intersections

            raycaster.setFromCamera( pointer, camera );

            const intersects = raycaster.intersectObjects( scene.children, false );

            if ( intersects.length > 0 ) {

                if ( INTERSECTED != intersects[ 0 ].object ) {

                    if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

                    INTERSECTED = intersects[ 0 ].object;
                    INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
                    INTERSECTED.material.emissive.setHex( 0xff0000 );

                }

            } else {

                if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

                INTERSECTED = null;

            }

            renderer.render( scene, camera );

        }


        return () => mountRef.current.removeChild( render.domElement);
    }, []);
    return (
        <div ref={mountRef}>
        </div>
    );
}


export default Portfolio;
