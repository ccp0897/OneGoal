// Obtener el elemento canvas
const canvas = document.getElementById("three-canvas");

// Crear la escena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ 
    canvas: canvas, // Usar el canvas del DOM
    antialias: true, 
    alpha: true 
});

// Crear la esfera
const geometry = new THREE.SphereGeometry(1, 64, 64);
const material = new THREE.ShaderMaterial({
    uniforms: {
        time: { value: 0.0 },
        color1: { value: new THREE.Color("#A7F407") },
        color2: { value: new THREE.Color("#779636") },
        color3: { value: new THREE.Color("#A3EB07") },
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

        // Función para calcular la distancia a un hexágono
        float hexDist(vec2 p) {
            vec2 q = vec2(p.x * 2.0 / sqrt(3.0), p.y - p.x / sqrt(3.0));
            vec2 h = fract(q) - 0.5;
            return max(abs(h.x), abs(h.y));
        }

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

            // Aplicar el patrón hexagonal
            float hexPattern = step(0.45, hexDist(vUv * 10.0));
            colorMix = mix(colorMix, vec3(1.0), hexPattern * 0.6);

            float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
            vec3 fresnelEffect = fresnel * fresnelColor * 0.5; 

            vec3 finalColor = min(colorMix + fresnelEffect, vec3(0.9, 0.9, 0.9));
            float alpha = 0.9;

            gl_FragColor = vec4(finalColor, alpha);
        }
    `,
});

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const emojiTexture = new THREE.TextureLoader().load("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='80' fill='white'>💬</text></svg>");
        const emojiMaterial = new THREE.SpriteMaterial({ map: emojiTexture, transparent: true });
        const emojiSprite = new THREE.Sprite(emojiMaterial);
        emojiSprite.scale.set(0.5, 0.5, 1); // Tamaño del emoji
        emojiSprite.position.set(0, 0, 1); // Posición del emoji (delante de la esfera)
        scene.add(emojiSprite);

        // Posición de la cámara
        camera.position.z = 2.5;

// Función para redimensionar el canvas
function resizeCanvas() {
    const size = window.innerHeight < window.innerWidth ? window.innerHeight * 0.5 : window.innerWidth * 0.5;
    renderer.setSize(size, size);
    camera.aspect = 1;
    camera.updateProjectionMatrix();
}

// Función de animación
function animate() {
    requestAnimationFrame(animate);
    material.uniforms.time.value += 0.02;

    renderer.render(scene, camera);
}

// Escuchar el evento de redimensionamiento
// window.addEventListener("resize", resizeCanvas);
//resizeCanvas();
animate();