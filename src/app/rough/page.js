"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PortalScrollDemo = () => {
  const modelRef = useRef();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    if (typeof window === 'undefined') return;

    // Dynamically import Three.js only on client side
    import('three').then(THREE => {
      // Import GLTFLoader from the correct path
      import('three/examples/jsm/loaders/GLTFLoader').then(({ GLTFLoader }) => {
        const scene = new THREE.Scene();
        scene.background = null;

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
        });
        
        // renderer.setClearColor(0xffffff, 1);
        scene.background = null; // Transparent background
        const container = modelRef.current;
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.physicallyCorrectLights = true;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 2.5;

        if (modelRef.current) {
          modelRef.current.appendChild(renderer.domElement);
        }

        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        // Load model
        const loader = new GLTFLoader();
        loader.load(
          '/vr_headset_simple.glb',
          (gltf) => {
            const model = gltf.scene;
            scene.add(model);

            // Center model
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            model.position.sub(center);
            
            // Scale model
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            camera.position.z = maxDim * 2;
            
            model.scale.set(1.2, 1.2, 1.2); // or adjust accordingly
            camera.position.z = maxDim * 1.5; // Less than 2 for closer zoom
            
            // Animation functions
            let animationFrameId;
            let isFloating = false;
            
            const playInitAnimation = () => {
              if (model) {
                // Initial scale animation
                gsap.to(model.scale, { 
                  x: 1,
                  y: 1,
                  z: 1,
                  duration: 1,
                  ease: 'power2.out'
                });

                // Continuous rotation
                gsap.to(model.rotation, { 
                  y: Math.PI * 2, 
                  duration: 8, 
                  repeat: -1,
                  ease: 'none'
                });
              }
            };
            
            const animate = () => {
              renderer.render(scene, camera);
              animationFrameId = requestAnimationFrame(animate);
            };
            
            playInitAnimation();
            animate();
            
            // Handle window resize
            const handleResize = () => {
              camera.aspect = container.clientWidth / container.clientHeight;
              camera.updateProjectionMatrix();
              const container = modelRef.current;
renderer.setSize(container.clientWidth, container.clientHeight);
            };

            ScrollTrigger.create({
              trigger: "body",
              start: 'top top',
              end: 'top -10',
              onEnterBack: () => {
                if (model) {
                  gsap.to(model.rotation, 
                    { 
                      x: 1,
                      y: 1,
                      z: 1,
                      duration: 1,
                      ease: 'power2.out'
                    }
                  );

                  // Update floating state
                  isFloating = true;
                }
                gsap.to(scanContainer, 
                  { 
                    scale: 1,
                    duration: 1,
                    ease: 'power2.out'
                  }
                );
              }
            });
            
            
            
            window.addEventListener('resize', handleResize);
            
            // Cleanup function
            return () => {
              cancelAnimationFrame(animationFrameId);
              window.removeEventListener('resize', handleResize);
              if (modelRef.current && modelRef.current.contains(renderer.domElement)) {
                modelRef.current.removeChild(renderer.domElement);
              }
              renderer.dispose();
            };
          },
          undefined,
          (error) => {
            console.error('Error loading model:', error);
          }
        );
      });
    });
  }, []);

  return (
    <>
    
      <div 
        ref={modelRef} 
        className="w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden bg-transparent relative"
      />

    </>
  );
};


export default PortalScrollDemo;
