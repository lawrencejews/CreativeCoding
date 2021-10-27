// Ensure ThreeJS is in global scope for the 'examples/'
global.THREE = require("three");

// Include any additional ThreeJS examples below
require("three/examples/js/controls/OrbitControls");

const canvasSketch = require("canvas-sketch");
const random = require('canvas-sketch-util/random');
const palettes = require('nice-color-palettes');
const eases = require('eases');
const BezierEasing = require('bezier-easing');

const settings = {
  dimension: [512, 512],
  fps: 24,
  duration: 4,
  // Make the loop animated
  animate: true,
  // Get a WebGL canvas rather than 2D
  context: "webgl",
  //Smooth edges: Turn on MSAA
  attributes:{ antialias: true}
};

const sketch = ({ context }) => {
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: context.canvas
  });

  // WebGL background color
  renderer.setClearColor("hsl(0, 0%, 95%)", 1);

  // Setup a camera
  const camera = new THREE.OrthographicCamera();
 

  // Setup your scene
  const scene = new THREE.Scene();

  const palette = random.pick(palettes);
  
  // Setup a geometry
  const box = new THREE.BoxGeometry(1, 1, 1);
  
  // Setup a mesh with geometry + material
  for (let i = 0; i < 40; i++){
    const mesh = new THREE.Mesh(
      box,
      // Setup a material
       new THREE.MeshStandardMaterial({
        color: random.pick(palette),
       }),
       );
    mesh.position.set(
      random.range(-1, 1),
      random.range(-1, 1),
      random.range(-1,1)
    );
    mesh.scale.set(
      random.range(-1, 1),
      random.range(-1, 1),
      random.range(-1,1)
    )
    mesh.scale.multiplyScalar(0.5);
    
    scene.add(mesh);
  }

  scene.add(new THREE.AmbientLight('hsl(0, 0%, 40%)'));

  //Add light with color and intensity
  const light = new THREE.DirectionalLight('white', 1);
  light.position.set(2, 2, 4);
  scene.add(light);

  //Animation curves
  const easeFn = BezierEasing(0.67, 0.03, 0.29, 0.99);

  // draw each frame
  return {
    // Handle resize events here
    resize({ pixelRatio, viewportWidth, viewportHeight }) {
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(viewportWidth, viewportHeight);
      
      //Isometric threejs Camera
      const aspect = viewportWidth / viewportHeight;

      //Orth zoom
      const zoom = 1.5;

      //Bounds
      camera.left = -zoom * aspect;
      camera.right = zoom * aspect;
      camera.top = zoom;
      camera.bottom = -zoom;

      //Near/far
      camera.near = -100;
      camera.far = 100;

      //Set position & look at the center
      camera.position.set(zoom, zoom, zoom);
      camera.lookAt(new THREE.Vector3());
      
      //Update the camera
      camera.updateProjectionMatrix();
    },

    // Update & render your scene here
    render({ playhead }) {
      const t = Math.sin(playhead * Math.PI);
      //scene.rotation.z = eases.expoInOut(t);
      scene.rotation.z = easeFn(t);
      renderer.render(scene, camera);
    },
    // Dispose of events & renderer for cleaner hot-reloading
    unload() {
      renderer.dispose();
    }
  };
};

canvasSketch(sketch, settings);
