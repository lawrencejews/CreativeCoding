## Creative Coding With Canvas & WebGL
### Unicode Compositions: Print Art with Canvas.
- Globally install canvas-sketch.
- Touch new file in the folder: canvas-sketch.js --new --open.
- Flags: new create a .js file and  --open links it to a new browser.
- Add canvas-sketch-util with npm install.
- Adding randomness kind static from canvas-sketch-util.
- Random color palettes -> npm i nice-color-palettes.
### The Third Dimension -> three.js
- Material describes the surface quality of a mesh[wireframe].
- Geometry describes the actual topography.
- Mesh describe the combination of material and geometry to create a wrapper for elements.
- Scene describes the combination of meshes in thousands given a project.
- Camera is the virtual view from an angle giving out depth description. 
- Creating a three.js project -> canvas-sketch webgl.js --new --template=three.
- Create an output folder for .png -> stop server then run: canvas-sketch webgl.js --output=tmp/
- Save the .png sequence from the web browser to temp -> CTRL + SHIFT + S.
- Install FFMPEG to save .gif file then -> canvas-sketch-mp4 tmp/
### Shaders
- Evaluates pixels in an image to be reproduced in a new image output.
- Create a shaders template -> canvas-sketch shaders.js --new --template=shader.
- Live Reloads when coding: Add --hot flag -> canvas-sketch shader.js --hot.
- Adding noise in shaders install -> glsl-noise from npm.
- Create difference colors -> npm i glsl-hsl2rgb.