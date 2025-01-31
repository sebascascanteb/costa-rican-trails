import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

export const Componente3d = () => {
  const planoRef = useRef();
  const { scrollY } = useThree();

  useFrame(() => {
    // Obtener la posición del scroll
    const scrollPosition = scrollY.get();
    // Inclinar el plano hacia arriba o hacia abajo según la posición del scroll
    planoRef.current.rotation.x = -scrollPosition / 100; // Ajusta el valor 100 para controlar la inclinación
  });

  return (
    <mesh ref={planoRef} rotation-x={0} position={[0, 0, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
};


