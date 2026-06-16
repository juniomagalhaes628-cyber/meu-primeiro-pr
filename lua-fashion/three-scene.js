/* ========== LUA FASHION — THREE.JS FASHION HERO SCENE ========== */
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
  renderer.setClearColor(0x000000, 0);

  /* ---------- Cena & Câmara (1:1) ---------- */
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.z = 6.5;

  /* ---------- Luzes ---------- */
  scene.add(new THREE.AmbientLight(0xfff0f5, 0.75));

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.1);
  dirLight.position.set(-2, 3, 4);
  scene.add(dirLight);

  const rimLight = new THREE.DirectionalLight(0x4455AA, 0.30);
  rimLight.position.set(3, -2, -2);
  scene.add(rimLight);

  const pointLight = new THREE.PointLight(0xD4567A, 2.2, 16);
  pointLight.position.set(0, 0.3, 3.5);
  scene.add(pointLight);

  /* ---------- Grupo principal (tilt com o rato) ---------- */
  const mainGroup = new THREE.Group();
  scene.add(mainGroup);

  /* ====== TECIDO DE SEDA (fundo ondulante) ====== */
  const SILK_SEG = 22;
  const silkGeo = new THREE.PlaneGeometry(4.8, 5.8, SILK_SEG, SILK_SEG);
  const silkPos = silkGeo.attributes.position;
  const silkOrigZ = new Float32Array(silkPos.count);
  for (let i = 0; i < silkPos.count; i++) silkOrigZ[i] = silkPos.getZ(i);

  const silkMesh = new THREE.Mesh(
    silkGeo,
    new THREE.MeshStandardMaterial({
      color:       0xF0A0B8,
      side:        THREE.DoubleSide,
      metalness:   0.22,
      roughness:   0.28,
      transparent: true,
      opacity:     0.30,
    })
  );
  silkMesh.position.z = -0.55;
  mainGroup.add(silkMesh);

  /* ====== BORBOLETA 3D ====== */
  const butterflyGroup = new THREE.Group();
  mainGroup.add(butterflyGroup);

  /* Forma de asa (lado direito — a esquerda é espelhada via scale.x = -1) */
  function createWingShape() {
    const s = new THREE.Shape();
    s.moveTo(0, 0.12);
    s.bezierCurveTo(0.25,  0.65,  1.70,  1.45, 1.48,  0.88); /* borda superior */
    s.bezierCurveTo(2.10,  0.52,  1.92, -0.18, 1.08, -0.14); /* recorte lateral */
    s.bezierCurveTo(1.30, -0.58,  1.50, -1.30, 0.92, -1.08); /* asa inferior */
    s.bezierCurveTo(0.52, -1.52,  0.10, -0.72, 0,     0.12); /* retorno ao corpo */
    return s;
  }

  const wingGeo = new THREE.ShapeGeometry(createWingShape(), 30);
  const wingMat = new THREE.MeshStandardMaterial({
    color:             0xD4567A,
    side:              THREE.DoubleSide,
    metalness:         0.32,
    roughness:         0.38,
    transparent:       true,
    opacity:           0.92,
    emissive:          0x7B1A38,
    emissiveIntensity: 0.18,
  });

  const wingR = new THREE.Mesh(wingGeo, wingMat);
  butterflyGroup.add(wingR);

  const wingL = new THREE.Mesh(wingGeo, wingMat.clone());
  wingL.scale.x = -1; /* espelha geometria para o lado esquerdo */
  butterflyGroup.add(wingL);

  /* Corpo */
  butterflyGroup.add(new THREE.Mesh(
    new THREE.CylinderGeometry(0.072, 0.048, 1.15, 8),
    new THREE.MeshStandardMaterial({ color: 0x8B1A38, metalness: 0.58, roughness: 0.32 })
  ));

  /* Antenas */
  const antMat = new THREE.MeshBasicMaterial({ color: 0x8B1A38 });
  [[-1, -0.07], [1, 0.07]].forEach(([dir, xOff]) => {
    const pts = [
      new THREE.Vector3(xOff,                0.57, 0),
      new THREE.Vector3(xOff + dir * 0.22,   0.88, 0.04),
      new THREE.Vector3(xOff + dir * 0.34,   1.04, 0.08),
    ];
    butterflyGroup.add(new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 6, 0.013, 4),
      antMat
    ));
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.044, 6, 6), antMat);
    ball.position.copy(pts[2]);
    butterflyGroup.add(ball);
  });

  butterflyGroup.position.y = 0.18;

  /* ====== GLITTER ROSA (sobe continuamente) ====== */
  const GLITTER_N = 360;
  const gPos = new Float32Array(GLITTER_N * 3);
  const gVel = new Float32Array(GLITTER_N);
  for (let i = 0; i < GLITTER_N; i++) {
    gPos[i * 3]     = (Math.random() - 0.5) * 11;
    gPos[i * 3 + 1] = (Math.random() - 0.5) * 11;
    gPos[i * 3 + 2] = -2.5 - Math.random() * 4.5;
    gVel[i]         = 0.003 + Math.random() * 0.005;
  }
  const gBuf = new THREE.BufferAttribute(gPos, 3);
  const glitterGeo = new THREE.BufferGeometry();
  glitterGeo.setAttribute('position', gBuf);
  scene.add(new THREE.Points(
    glitterGeo,
    new THREE.PointsMaterial({ color: 0xF8D0E0, size: 0.066, transparent: true, opacity: 0.80, sizeAttenuation: true })
  ));

  /* Camada de brilhos navy subtis */
  const bPos = new Float32Array(140 * 3);
  for (let i = 0; i < 140; i++) {
    bPos[i * 3]     = (Math.random() - 0.5) * 11;
    bPos[i * 3 + 1] = (Math.random() - 0.5) * 11;
    bPos[i * 3 + 2] = -4 - Math.random() * 3;
  }
  const blueGeo = new THREE.BufferGeometry();
  blueGeo.setAttribute('position', new THREE.BufferAttribute(bPos, 3));
  scene.add(new THREE.Points(
    blueGeo,
    new THREE.PointsMaterial({ color: 0x8899CC, size: 0.044, transparent: true, opacity: 0.42, sizeAttenuation: true })
  ));

  /* ---------- Mouse / Touch tilt ---------- */
  let targetRotX = 0, targetRotY = 0;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.addEventListener('mousemove', e => {
      const r = hero.getBoundingClientRect();
      targetRotX = -((e.clientY - r.top)  / r.height - 0.5) * 0.38;
      targetRotY =  ((e.clientX - r.left) / r.width  - 0.5) * 0.38;
    });
    hero.addEventListener('mouseleave', () => { targetRotX = 0; targetRotY = 0; });
    hero.addEventListener('touchmove', e => {
      const t = e.touches[0], r = hero.getBoundingClientRect();
      targetRotX = -((t.clientY - r.top)  / r.height - 0.5) * 0.24;
      targetRotY =  ((t.clientX - r.left) / r.width  - 0.5) * 0.24;
    }, { passive: true });
  }

  /* ---------- Loop de animação ---------- */
  let clock = 0, rafId;

  function animate() {
    rafId = requestAnimationFrame(animate);
    clock += 0.013;

    /* Tilt suave do grupo (lerp) */
    mainGroup.rotation.x += (targetRotX - mainGroup.rotation.x) * 0.055;
    mainGroup.rotation.y += (targetRotY - mainGroup.rotation.y) * 0.055;

    /* Asas: bater de borboleta (oscila entre aberto e semi-fechado) */
    const flapAngle = 0.36 + Math.sin(clock * 2.3) * 0.36;
    wingR.rotation.y = flapAngle;
    wingL.rotation.y = flapAngle; /* scale.x=-1 já espelha o efeito visual */

    /* Borboleta: flutuação suave + ligeiro balanço */
    butterflyGroup.position.y = 0.18 + Math.sin(clock * 0.88) * 0.09;
    butterflyGroup.rotation.z = Math.sin(clock * 0.55) * 0.036;

    /* Tecido de seda: ondas por deslocamento de vértices */
    for (let i = 0; i < silkPos.count; i++) {
      const x = silkPos.getX(i);
      const y = silkPos.getY(i);
      silkPos.setZ(i,
        silkOrigZ[i]
        + Math.sin(x * 1.1  + clock)             * 0.20
        + Math.sin(y * 0.82 + clock * 0.88)      * 0.15
        + Math.sin((x - y)  * 0.56 + clock * 0.72) * 0.10
      );
    }
    silkPos.needsUpdate = true;
    silkMesh.rotation.z += 0.00045;

    /* Glitter: sobe e reaparece em baixo */
    for (let i = 0; i < GLITTER_N; i++) {
      gPos[i * 3 + 1] += gVel[i];
      if (gPos[i * 3 + 1] > 6) {
        gPos[i * 3 + 1] = -6;
        gPos[i * 3]     = (Math.random() - 0.5) * 11;
      }
    }
    gBuf.needsUpdate = true;

    /* Pulso de luz rosa */
    pointLight.intensity = 1.85 + Math.sin(clock * 0.8) * 0.52;

    renderer.render(scene, camera);
  }

  animate();

  /* ---------- Parar quando fora do viewport (poupa bateria) ---------- */
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { if (!rafId) animate(); }
    else { cancelAnimationFrame(rafId); rafId = null; }
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
    wingR.rotation.y = 0.3;
    wingL.rotation.y = 0.3;
    renderer.render(scene, camera);
  }

})();
