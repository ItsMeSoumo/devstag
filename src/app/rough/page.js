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

    import('three').then(THREE => {
      import('three/examples/jsm/loaders/GLTFLoader').then(({ GLTFLoader }) => {
        const scene = new THREE.Scene();
        scene.background = null;

        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );

        const renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
        });

        const container = modelRef.current;
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.physicallyCorrectLights = true;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 2.5;

        if (container) {
          container.appendChild(renderer.domElement);
        }

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        const loader = new GLTFLoader();
        loader.load(
          '/vr_headset_simple.glb',
          (gltf) => {
            const model = gltf.scene;
            scene.add(model);

            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            model.position.sub(center);

            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            camera.position.z = maxDim * 1.5;

            model.scale.set(1, 1, 1);

            let animationFrameId;
            let currentRotationY = 0;

            const handleWheel = (e) => {
              const delta = e.deltaY * 0.002;
              currentRotationY += delta;
              gsap.to(model.rotation, {
                y: currentRotationY,
                duration: 1,
                ease: 'power2.out'
              });
            };

            container.addEventListener('wheel', handleWheel);

            // Animate model Y position based on scroll
            ScrollTrigger.create({
              trigger: container,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
              onUpdate: (self) => {
                const progress = self.progress;
                gsap.to(model.position, {
                  y: progress * 2 - 1, // move between -1 to +1
                  ease: 'none',
                  overwrite: true
                });
              }
            });

            const animate = () => {
              renderer.render(scene, camera);
              animationFrameId = requestAnimationFrame(animate);
            };

            animate();

            const handleResize = () => {
              camera.aspect = container.clientWidth / container.clientHeight;
              camera.updateProjectionMatrix();
              renderer.setSize(container.clientWidth, container.clientHeight);
            };

            window.addEventListener('resize', handleResize);

            return () => {
              cancelAnimationFrame(animationFrameId);
              window.removeEventListener('resize', handleResize);
              container.removeEventListener('wheel', handleWheel);
              if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
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
    <div 
      ref={modelRef} 
      className="w-full md:w-[100%] h-[600px] md:h-[700px] rounded-2xl overflow-hidden bg-transparent relative"
    />
  );
};

export default PortalScrollDemo;
