/* ========== LUA FASHION — THREE.JS HERO SCENE ========== */
(function () {
  'use strict';

  const canvas = document.getElementById('lf-moon-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  /* ---------- Dimensões ---------- */
  const SIZE = Math.min(320, window.innerWidth * 0.45);

  /* ---------- Renderer ---------- */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(SIZE, SIZE);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0); /* fundo transparente */

  /* ---------- Cena & Câmara ---------- */
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.z = 5.5;

  /* ---------- Luzes ---------- */
  scene.add(new THREE.AmbientLight(0xfff4cc, 0.4));

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
  dirLight.position.set(-3, 3, 3);
  scene.add(dirLight);

  const pointLight = new THREE.PointLight(0xC8A951, 1.5, 12);
  pointLight.position.set(0, 0, 3);
  scene.add(pointLight);

  /* ---------- Grupo da Lua ---------- */
  const moonGroup = new THREE.Group();
  scene.add(moonGroup);

  /* Esfera dourada principal */
  const moonMesh = new THREE.Mesh(
    new THREE.SphereGeometry(1.6, 64, 64),
    new THREE.MeshStandardMaterial({
      color:             0xC8A951,
      metalness:         0.75,
      roughness:         0.25,
      emissive:          0x8B6F2E,
      emissiveIntensity: 0.18,
    })
  );
  moonGroup.add(moonMesh);

  /* Esfera "sombra" deslocada — cria o efeito crescente */
  const shadowMesh = new THREE.Mesh(
    new THREE.SphereGeometry(1.55, 64, 64),
    new THREE.MeshStandardMaterial({
      color:       0x0A0A0A,
      metalness:   0,
      roughness:   1,
      transparent: false,
      depthWrite:  false,
    })
  );
  shadowMesh.position.x = 1.3;
  shadowMesh.renderOrder = 1;
  moonGroup.add(shadowMesh);

  /* Halo exterior (anel) */
  const haloMesh = new THREE.Mesh(
    new THREE.TorusGeometry(2.0, 0.03, 16, 80),
    new THREE.MeshBasicMaterial({
      color:       0xC8A951,
      transparent: true,
      opacity:     0.18,
    })
  );
  moonGroup.add(haloMesh);

  const halo2Mesh = new THREE.Mesh(
    new THREE.TorusGeometry(2.35, 0.015, 16, 80),
    new THREE.MeshBasicMaterial({
      color:       0xE8C97A,
      transparent: true,
      opacity:     0.09,
    })
  );
  moonGroup.add(halo2Mesh);

  /* ---------- Partículas douradas ---------- */
  const COUNT    = 280;
  const posArr   = new Float32Array(COUNT * 3);
  const sizeArr  = new Float32Array(COUNT);

  for (let i = 0; i < COUNT; i++) {
    posArr[i * 3]     = (Math.random() - 0.5) * 14;
    posArr[i * 3 + 1] = (Math.random() - 0.5) * 14;
    posArr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    sizeArr[i]        = 0.025 + Math.random() * 0.04;
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
  pGeo.setAttribute('size',     new THREE.BufferAttribute(sizeArr, 1));

  const particles = new THREE.Points(
    pGeo,
    new THREE.PointsMaterial({
      color:       0xE8C97A,
      size:        0.045,
      transparent: true,
      opacity:     0.65,
      sizeAttenuation: true,
    })
  );
  scene.add(particles);

  /* ---------- Estrelas de fundo (menores e mais distantes) ---------- */
  const starsGeo  = new THREE.BufferGeometry();
  const starPos   = new Float32Array(500 * 3);
  for (let i = 0; i < 500; i++) {
    starPos[i * 3]     = (Math.random() - 0.5) * 40;
    starPos[i * 3 + 1] = (Math.random() - 0.5) * 40;
    starPos[i * 3 + 2] = -5 - Math.random() * 20;
  }
  starsGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const stars = new THREE.Points(
    starsGeo,
    new THREE.PointsMaterial({ color: 0xffffff, size: 0.018, transparent: true, opacity: 0.35 })
  );
  scene.add(stars);

  /* ---------- Interatividade: mouse tilt ---------- */
  let targetRotX = 0;
  let targetRotY = 0;

  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      targetRotX = -((e.clientY - rect.top)  / rect.height - 0.5) * 0.40;
      targetRotY =  ((e.clientX - rect.left) / rect.width  - 0.5) * 0.40;
    });
    heroSection.addEventListener('mouseleave', () => {
      targetRotX = 0;
      targetRotY = 0;
    });
  }

  /* Touch tilt para mobile */
  if (heroSection) {
    heroSection.addEventListener('touchmove', (e) => {
      const t = e.touches[0];
      const rect = heroSection.getBoundingClientRect();
      targetRotX = -((t.clientY - rect.top)  / rect.height - 0.5) * 0.25;
      targetRotY =  ((t.clientX - rect.left) / rect.width  - 0.5) * 0.25;
    }, { passive: true });
  }

  /* ---------- Loop de animação ---------- */
  let t = 0;
  let rafId;

  function animate() {
    rafId = requestAnimationFrame(animate);
    t += 0.01;

    /* Lua: tilt suave com lerp + rotação lenta contínua */
    moonGroup.rotation.x += (targetRotX - moonGroup.rotation.x) * 0.05;
    moonGroup.rotation.y += (targetRotY - moonGroup.rotation.y) * 0.05;
    moonGroup.rotation.z += 0.0015;

    /* Halos contrarrotam levemente */
    haloMesh.rotation.z  -= 0.0008;
    halo2Mesh.rotation.z += 0.0005;

    /* Partículas: rotação orbital lenta */
    particles.rotation.y  += 0.0007;
    particles.rotation.x   = Math.sin(t * 0.09) * 0.06;

    /* Estrelas: deriva muito lenta */
    stars.rotation.y += 0.0002;

    /* PointLight: pulso (lua "respira") */
    pointLight.intensity = 1.2 + Math.sin(t * 0.8) * 0.45;

    renderer.render(scene, camera);
  }

  animate();

  /* ---------- Responsivo ---------- */
  function onResize() {
    const s = Math.min(320, window.innerWidth * 0.45);
    renderer.setSize(s, s);
    /* aspect ratio é sempre 1:1 */
    camera.updateProjectionMatrix();
    /* Actualizar estilo do canvas */
    canvas.style.width  = s + 'px';
    canvas.style.height = s + 'px';
  }
  window.addEventListener('resize', onResize);

  /* ---------- Parar animação fora do viewport (performance) ---------- */
  const visObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!rafId) animate();
      } else {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    });
  });
  visObserver.observe(canvas);

  /* ---------- prefers-reduced-motion ---------- */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReduced.matches) {
    cancelAnimationFrame(rafId);
    rafId = null;
    /* Render estático único */
    moonGroup.rotation.z = 0.3;
    renderer.render(scene, camera);
  }

})();
