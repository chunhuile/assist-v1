import { color } from "echarts";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
const Building: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  // 创建场景
  useEffect(() => {
    // 创建场景
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    // 创建相机
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.z = 10;
    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }
    // 添加光源
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    scene.add(light);
    // 创键模型(立方体)
    const geometry = new THREE.BoxGeometry(10, 12, 4); //宽、高、深
    const material = new THREE.MeshLambertMaterial({ color: 0x8f8f });
    const building = new THREE.Mesh(geometry, material);
    scene.add(building);
    // 渲染函数
    const animate = () => {
      requestAnimationFrame(animate);
      building.rotation.y += 0.01; // 旋转效果
      renderer.render(scene, camera);
    };

    // animate();
    // 处理窗口缩放
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // 清理函数
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  // 清除

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }}></div>;
};

export default Building;
