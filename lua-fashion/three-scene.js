/* ========== LUA FASHION — THREE.JS HERO SCENE ========== */
(function () {
  'use strict';

  const canvas = document.getElementById('lf-moon-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  /* ---------- Dimensões ---------- */
  function calcSize() { return Math.min(320, window.innerWidth * 0.45); }
  const SIZE = calcSize();

  /* ---------- Renderer ---------- */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(SIZE, SIZE);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0); /* fundo 100% transparente */

  /* ---------- Cena & Câmara (1:1 aspect ratio) ---------- */
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.z = 5.8;

  /* ---------- Luzes ---------- */
  /* Ambiente quente — dourado lunar subtil */
  scene.add(new THREE.AmbientLight(0xfff4cc, 0.45));

  /* Direcional — luar vindo de cima-esquerda */
  const dirLight = new THREE.DirectionalLight(0xffeedd, 1.5);
  dirLight.position.set(-3.5, 4, 4);
  scene.add(dirLight);

  /* Rim light frio atrás — separa a lua do fundo */
  const rimLight = new THREE.DirectionalLight(0xaaccff, 0.35);
  rimLight.position.set(3, -2, -3);
  scene.add(rimLight);

  /* Point light dourada — halo/glow pulsante */
  const pointLight = new THREE.PointLight(0xC8A951, 2.0, 14);
  pointLight.position.set(0.6, 0.4, 3.2);
  scene.add(pointLight);

  /* ---------- Grupo da Lua ---------- */
  const moonGroup = new THREE.Group();
  scene.add(moonGroup);

  /* Esfera dourada principal — metalness alto para aspecto premium */
  moonGroup.add(new THREE.Mesh(
    new THREE.SphereGeometry(1.6, 80, 80),
    new THREE.MeshStandardMaterial({
      color:             0xC8A951,
      metalness:         0.82,
      roughness:         0.18,
      emissive:          0x7A5C20,
      emissiveIntensity: 0.20,
    })
  ));

  /* "Mordida" negra deslocada — cria a forma crescente */
  const bite = new THREE.Mesh(
    new THREE.SphereGeometry(1.58, 80, 80),
    new THREE.MeshStandardMaterial({
      color:      0x080808,
      metalness:  0,
      roughness:  1,
    })
  );
  bite.position.set(1.28, 0.08, 0.12);
  bite.renderOrder = 1;
  moonGroup.add(bite);

  /* Anel interior — dourado, anima em sentido contrário */
  const ring1 = new THREE.Mesh(
    new THREE.TorusGeometry(2.05, 0.014, 16, 160),
    new THREE.MeshBasicMaterial({ color: 0xC8A951, transparent: true, opacity: 0.22 })
  );
  moonGroup.add(ring1);

  /* Anel exterior — mais subtil */
  const ring2 = new THREE.Mesh(
    new THREE.TorusGeometry(2.45, 0.007, 16, 160),
    new THREE.MeshBasicMaterial({ color: 0xE8C97A, transparent: true, opacity: 0.10 })
  );
  moonGroup.add(ring2);

  /* ---------- Partículas douradas (poeira de luar) ---------- */
  const GOLD_COUNT = 280;
  const gPos = new Float32Array(GOLD_COUNT * 3);
  for (let i = 0; i < GOLD_COUNT; i++) {
    /* Distribuição esférica ao redor da lua */
    const r   = 2.6 + Math.random() * 3.8;
    const th  = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    gPos[i * 3]     = r * Math.sin(phi) * Math.cos(th);
    gPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(th);
    gPos[i * 3 + 2] = r * Math.cos(phi);
  }
  const goldGeo = new THREE.BufferGeometry();
  goldGeo.setAttribute('position', new THREE.BufferAttribute(gPos, 3));
  const goldParticles = new THREE.Points(goldGeo, new THREE.PointsMaterial({
    color: 0xE8C97A, size: 0.048, transparent: true, opacity: 0.65, sizeAttenuation: true,
  }));
  scene.add(goldParticles);

  /* ---------- Estrelas brancas de fundo ---------- */
  const STAR_COUNT = 500;
  const sPos = new Float32Array(STAR_COUNT * 3);
  for (let i = 0; i < STAR_COUNT; i++) {
    sPos[i * 3]     = (Math.random() - 0.5) * 44;
    sPos[i * 3 + 1] = (Math.random() - 0.5) * 44;
    sPos[i * 3 + 2] = -6 - Math.random() * 22;
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({
    color: 0xffffff, size: 0.016, transparent: true, opacity: 0.32,
  }));
  scene.add(stars);

  /* ---------- Mouse / Touch tilt ---------- */
  let targetRotX = 0;
  let targetRotY = 0;
  const hero = document.querySelector('.hero');

  if (hero) {
    hero.addEventListener('mousemove', (e) => {
      const r = hero.getBoundingClientRect();
      targetRotX = -((e.clientY - r.top)  / r.height - 0.5) * 0.42;
      targetRotY =  ((e.clientX - r.left) / r.width  - 0.5) * 0.42;
    });
    hero.addEventListener('mouseleave', () => { targetRotX = 0; targetRotY = 0; });
    hero.addEventListener('touchmove', (e) => {
      const t = e.touches[0];
      const r = hero.getBoundingClientRect();
      targetRotX = -((t.clientY - r.top)  / r.height - 0.5) * 0.26;
      targetRotY =  ((t.clientX - r.left) / r.width  - 0.5) * 0.26;
    }, { passive: true });
  }

  /* ---------- Loop de animação ---------- */
  let clock = 0;
  let rafId;

  function animate() {
    rafId = requestAnimationFrame(animate);
    clock += 0.011;

    /* Lua: tilt suave (lerp) + rotação contínua */
    moonGroup.rotation.x += (targetRotX - moonGroup.rotation.x) * 0.055;
    moonGroup.rotation.y += (targetRotY - moonGroup.rotation.y) * 0.055;
    moonGroup.rotation.z += 0.0014;

    /* Anéis: contrarrotam para dar profundidade */
    ring1.rotation.z -= 0.0008;
    ring2.rotation.z += 0.0005;

    /* Partículas douradas: órbita lenta */
    goldParticles.rotation.y += 0.0008;
    goldParticles.rotation.x  = Math.sin(clock * 0.10) * 0.05;

    /* Estrelas: deriva imperceptível */
    stars.rotation.y += 0.00018;

    /* PointLight: pulso — lua "respira" */
    pointLight.intensity = 1.8 + Math.sin(clock * 0.85) * 0.55;

    renderer.render(scene, camera);
  }

  animate();

  /* ---------- Parar quando fora do viewport (poupa bateria) ---------- */
  new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      if (!rafId) animate();
    } else {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }).observe(canvas);

  /* ---------- Parar quando tab em background ---------- */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(rafId); rafId = null; }
    else if (!rafId) animate();
  });

  /* ---------- Responsivo ---------- */
  window.addEventListener('resize', () => {
    const s = calcSize();
    renderer.setSize(s, s);
    camera.updateProjectionMatrix();
  });

  /* ---------- prefers-reduced-motion: render estático ---------- */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    cancelAnimationFrame(rafId);
    rafId = null;
    moonGroup.rotation.z = 0.4;
    renderer.render(scene, camera);
  }

})();
