document.addEventListener("DOMContentLoaded", function () {
    const canvas2 = document.getElementById("three-canvas__chat");
    if (canvas2) {
      console.log("Canvas encontrado:", canvas2);
  
      // Crear la escena
      const scene2 = new THREE.Scene();
      const camera2 = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
      const renderer2 = new THREE.WebGLRenderer({
        canvas: canvas2,
        antialias: true,
        alpha: true,
      });
  

  
      // Crear la esfera (burbuja)
      const geometry2 = new THREE.SphereGeometry(1, 64, 64);
      const material2 = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0.0 },
          color1: { value: new THREE.Color("#A7F407") },
          color2: { value: new THREE.Color("#779636") },
          color3: { value: new THREE.Color("#3A412D") },
          color4: { value: new THREE.Color("black") },
          fresnelColor: { value: new THREE.Color("#CCCCCC") },
        },
        transparent: true,
        vertexShader: `
          varying vec3 vNormal;
          varying vec2 vUv;
          varying vec3 vPosition;
          uniform float time;
  
          void main() {
              vNormal = normalize(normal);
              vUv = uv;
              vPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          varying vec2 vUv;
          varying vec3 vPosition;
          uniform float time;
          uniform vec3 color1;
          uniform vec3 color2;
          uniform vec3 color3;
          uniform vec3 color4;
          uniform vec3 fresnelColor;
  
          float smoothWave(float value, float speed) {
              return 0.5 + 0.4 * sin(value * speed + time);
          }
  
          void main() {
              float wave1 = smoothWave(vUv.y, 10.0);
              float wave2 = smoothWave(vUv.x, 15.0);
              float wave3 = smoothWave(vUv.y + vUv.x, 8.0);
  
              vec3 colorMix = mix(color1, color2, wave1);
              colorMix = mix(colorMix, color3, wave2);
              colorMix = mix(colorMix, color4, wave3 * 0.2);
  
              float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
              vec3 fresnelEffect = fresnel * fresnelColor * 0.5; 
  
              vec3 finalColor = min(colorMix + fresnelEffect, vec3(0.9, 0.9, 0.9));
              float alpha = 0.9;
  
              gl_FragColor = vec4(finalColor, alpha);
          }
        `,
      });
  
      const sphere2 = new THREE.Mesh(geometry2, material2);
      scene2.add(sphere2);
  
      // Posición de la cámara
      camera2.position.z = 2.5;
  
      function animate() {
        requestAnimationFrame(animate);
        material2.uniforms.time.value += 0.02;
        renderer2.render(scene2, camera2);
      }
  
      animate();
    } else {
      console.error('Canvas con ID "three-canvas__chat" no encontrado');
    }
  });