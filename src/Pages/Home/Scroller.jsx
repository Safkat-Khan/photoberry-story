import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

import wedding from "../../Assets/wedding-1.jpg";
import wedding2 from "../../Assets/wedding-3.jpg";
import wedding3 from "../../Assets/wedding-4.jpg";
import wedding4 from "../../Assets/wedding-6.jpg";
import wedding5 from "../../Assets/wedding-7.jpg";
import wedding6 from "../../Assets/wedding-8.jpg";






import {
  
  Preload,
  ScrollControls,
  Scroll,
  useScroll,
  Image as ImageImpl,
} from "@react-three/drei";

function Image({ c = new THREE.Color(), ...props }) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  useFrame(() => {
    ref.current.material.color.lerp(
      c.set(hovered ? "white" : "#ccc"),
      hovered ? 0.4 : 0.05
    );
  });
  return (
    <ImageImpl
      ref={ref}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}
    />
  );
}

function Images() {
  const { width, height } = useThree((state) => state.viewport);
  const data = useScroll();
  const group = useRef();
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 3;
    group.current.children[3].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[4].material.zoom =
      1 + data.range(1.25 / 3, 1 / 3) / 1;
    group.current.children[5].material.zoom =
      1 + data.range(1.8 / 3, 1 / 3) / 3;
    group.current.children[5].material.grayscale =
      1 - data.range(1.6 / 3, 1 / 3);
    group.current.children[6].material.zoom =
      1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
  });
  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[4, height, 1]} url={wedding} />
      <Image position={[2, 0, 1]} scale={3} url={wedding2} />
      <Image position={[-2.3, -height, 2]} scale={[1, 3, 1]} url={wedding2} />
      <Image position={[-0.6, -height, 3]} scale={[1, 2, 1]} url={wedding5} />
      <Image position={[0.75, -height, 3.5]} scale={1.5} url={wedding6} />
      <Image
        position={[0, -height * 1.5, 2.5]}
        scale={[1.5, 3, 1]}
        url={wedding3}
      />
      <Image
        position={[0, -height * 2 - height / 4, 0]}
        scale={[width, height / 2, 1]}
        url={wedding4}
      />
    </group>
  );
}

export default function Scroller() {
  return (
    <div className="h-screen  relative w-full">
      <Canvas gl={{ antialias: false }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ScrollControls damping={1} pages={3}>
            <Scroll>
              <Images />
            </Scroll>
            <Scroll className="font-vibes" html>
              <h1
                className="text-9xl p-5 text-transparent bg-clip-text bg-gradient-to-tr from-[#F8D17C] to-yellow-700 font-bold"
                style={{ position: "absolute", top: "60vh", left: "0.5em" }}
              >
                Love
              </h1>
              <h1
                className="text-9xl left-40 md:left-[150vh] p-5 text-transparent bg-clip-text bg-gradient-to-tr from-[#F8D17C] to-yellow-700 font-bold"
                style={{ position: "absolute", top: "120vh" }}
              >
                Plan
              </h1>
              <h1
                className="p-5 md:top-[215vh] top-[235vh] left-[0.5vw] text-transparent bg-clip-text bg-gradient-to-tr from-[#F8D17C] to-yellow-700"
                style={{
                  position: "absolute",
               
                  fontSize: "20vw",
                }}
              >
                Celebrate
              </h1>
            </Scroll>
          </ScrollControls>
          <Preload />
        </Suspense>
      </Canvas>
    </div>
  );
}
