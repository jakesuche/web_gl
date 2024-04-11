import * as THREE from "three";

// canavas
const canvas = document.querySelector("canvas.webgl");
console.log(canvas);

// SCRENE
const scene = new THREE.Scene();

// the schape of the mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({
  color: "0xff0000",
});
// is the visible object
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// camera

const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
