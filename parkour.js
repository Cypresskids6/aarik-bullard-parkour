import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

const objects = []; //list ~ array
let raycaster; //raygun

let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;

let prevTime = performance.now(); //current time
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();

let camera, scene, controls, renderer;

init();
animate();
function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.y = 100;

    controls = new PointerLockControls(camera,document.body);

    const blocker = document.getElementById('blocker');
    const instructions = document.getElementById('instructions');

    instructions.addEventListener('click', function(){
        controls.lock();
    });
    controls.addEventListener('lock', function(){
        instructions.style.display = 'none';
        blocker.style.display = 'none';
    });
    controls.addEventListener('unlock', function(){
        instructions.style.display = '';
        blocker.style.display = 'block';
    });
    scene.add(controls.getObject());

    const onKeyDown = function (event) {
        switch (event.code) {
            case 'KeyW':
                moveForward = true;
                break;
            case 'KeyS':
                moveBackward = true;
                break
            case 'KeyA':
                moveLeft = true;
                break;
            case 'KeyD':
                moveRight = true;
                break;
            case 'Space':
                if (canJump === true) velocity.y += 350;
                canJump = false;
                break
        }
    }

    const onKeyUp = function (event) {
        switch (event.code) {
            case 'KeyW':
                moveForward = false;
                break;
            case 'KeyS':
                moveBackward = false;
                break
            case 'KeyA':
                moveLeft = false;
                break;
            case 'KeyD':
                moveRight = false;
                break;
        }
    }
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp)

    raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, -1, 0), 0, 10);

    const geometry1 = new THREE.SphereGeometry(3, 20, 10)
    const material1 = new THREE.MeshLambertMaterial({ color: 0x212752 });
    const sphere1 = new THREE.Mesh(geometry1, material1);
    scene.add(sphere1)
    objects.push(sphere1);

    const geometry2 = new THREE.SphereGeometry(3, 20, 10);
    const material2 = new THREE.MeshLambertMaterial({ color: 0x212752 });
    const cube2 = new THREE.Mesh(geometry2, material2);
    scene.add(cube2);
    cube2.position.set(23, 23, 23);
    objects.push(cube2);

    const geometry3 = new THREE.SphereGeometry(3, 20, 10);
    const material3 = new THREE.MeshLambertMaterial({ color: 0x212752 });
    const cube3 = new THREE.Mesh(geometry3, material3);
    scene.add(cube3);
    cube3.position.set(27, 27, 27);
    objects.push(cube3);

    const geometry4 = new THREE.SphereGeometry(3, 20, 10)
    const material4 = new THREE.MeshLambertMaterial({ color: 0x212752 });
    const cube4 = new THREE.Mesh(geometry4, material4);
    scene.add(cube4)
    cube4.position.set(35, 35, 35);
    objects.push(cube4);

    const geometry6 = new THREE.SphereGeometry(3, 20, 10)
    const material6 = new THREE.MeshLambertMaterial({ color: 0x212752 });
    const cube6 = new THREE.Mesh(geometry6, material6);
    scene.add(cube6)
    cube4.position.set(56, 56, 56)
    objects.push(cube6);

    const geometry7 = new THREE.SphereGeometry(3, 20, 10)
    const material7 = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const cube7 = new THREE.Mesh(geometry7, material7);
    scene.add(cube7)
    objects.push(cube7);

    const geometry8 = new THREE.SphereGeometry(3, 20, 10)
    const material8 = new THREE.MeshLambertMaterial({ color: 0x212752 });
    const cube8 = new THREE.Mesh(geometry8, material8);
    scene.add(cube8)
    cube8.position.set(63, 63, 63)
    objects.push(cube8);

    const geometry9 = new THREE.SphereGeometry(3, 20, 10)
    const material9 = new THREE.MeshLambertMaterial({ color: 0x212752 });
    const cube9 = new THREE.Mesh(geometry9, material9);
    scene.add(cube9)
    cube9.position.set(27, 27, 27)
    objects.push(cube9);

    const geometry10 = new THREE.BoxGeometry(3, 20, 10)
    const material10 = new THREE.MeshLambertMaterial({ color: 0x212752 });
    const sphere10 = new THREE.Mesh(geometry10, material10);
    scene.add(sphere10)
    sphere10.position.set(35, 35, 35)
    objects.push(sphere10);

    const geometry11 = new THREE.SphereGeometry(3, 20, 10)
    const material11 = new THREE.MeshLambertMaterial({ color: 0x212752 });
    const cube11 = new THREE.Mesh(geometry11, material11);
    scene.add(cube11)
    cube11.position.set(56, 56, 56)
    objects.push(cube11);

    const geometry5 = new THREE.TorusGeometry(20, 20, 10, 10)
    const material5 = new THREE.MeshLambertMaterial({ color: 0x212752 });
    const cube5 = new THREE.Mesh(geometry5, material5);
    cube5.rotateX(-1.57);
    scene.add(cube5)
    cube5.position.set(0, 0, 0)
    objects.push(cube5);

    const geometry12 = new THREE.TorusGeometry(20, 20, 10, 10)
    const material30 = new THREE.MeshLambertMaterial({ color: 0x212757 })
    const torus2 = new THREE.Mesh(geometry12, material30)
    torus2.rotateX(-1.57);
    scene.add(torus2)
    torus2.position.set(-100, 0, 0)
    objects.push(torus2);

    const geometry14 = new THREE.BoxGeometry(20, 20, 10)
    const material14 = new THREE.MeshLambertMaterial({ color: 0x212752 });
    const cube14 = new THREE.Mesh(geometry14, material14);
    scene.add(cube14)
    cube14.position.set(-40, 0, 0)
    objects.push(cube14);

    const geometry15 = new THREE.BoxGeometry(20, 20, 10)
    const material15 = new THREE.MeshLambertMaterial({ color: 0x242752 });
    const cube15 = new THREE.Mesh(geometry15, material15);
    scene.add(cube15)
    cube15.position.set(-50, 0, 0)
    objects.push(cube15);

    const geometry16 = new THREE.BoxGeometry(20, 20, 10)
    const material16 = new THREE.MeshLambertMaterial({ color: 0x242752 });
    const cube16 = new THREE.Mesh(geometry16, material16);
    scene.add(cube16)
    cube16.position.set(-60, 0, 0)
    objects.push(cube16);

    const geometry17 = new THREE.BoxGeometry(20, 20, 10)
    const material17 = new THREE.MeshLambertMaterial({ color: 0x242752 });
    const cube17 = new THREE.Mesh(geometry17, material17);
    scene.add(cube17)
    cube17.position.set(-70, 0, 0)
    objects.push(cube17);

    const geometry19 = new THREE.BoxGeometry(20, 20, 10)
    const material19 = new THREE.MeshLambertMaterial({ color: 0x242902 });
    const cube19 = new THREE.Mesh(geometry19, material19);
    scene.add(cube19)
    cube19.position.set(-30, 0, 0)
    objects.push(cube19);

    const geometry20 = new THREE.BoxGeometry(20, 20, 10)
    const material20 = new THREE.MeshLambertMaterial({ color: 0x281752 });
    const cube20 = new THREE.Mesh(geometry20, material20);
    scene.add(cube20)
    cube20.position.set(-50, 0, 0)
    objects.push(cube20);

    const geometry21 = new THREE.SphereGeometry(3, 64, 64);
    const material21 = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    const sphere21 = new THREE.Mesh(geometry21, material21);
    scene.add(sphere21);
    sphere21.position.set(0, -20, 0);
    objects.push(sphere21);

    const geometry18 = new THREE.BoxGeometry(20, 20, 10);
    const material18 = new THREE.MeshLambertMaterial({ color: 0x248952 });
    const cube18 = new THREE.Mesh(geometry18, material18);
    scene.add(cube18);
    cube18.position.set(-80, 0, 0);
    objects.push(cube18);

    const geometry22 = new THREE.SphereGeometry(20, 64, 64);
    const material22 = new THREE.MeshLambertMaterial({ color: 0x00ffff });
    const sphere22 = new THREE.Mesh(geometry22, material22);
    scene.add(sphere22);
    sphere22.position.set(0, 50, 0);
    objects.push(sphere22);

    const knotGeo = new THREE.TorusKnotGeometry(10, 2, 64, 64);
    const knotMat = new THREE.MeshLambertMaterial({ color: 0xf0f0f0f });
    const knot = new THREE.Mesh(knotGeo, knotMat);
    knot.position.set(0, 20, -20);
    scene.add(knot);
    objects.push(knot);

    renderer = new THREE.WebGLRenderer({amtialias:true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const light = new THREE.AmbientLight(0xffffff, 20);
    scene.add(light);
    window.addEventListener('resize',onWindowResize);
    
}

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth,window.innerHeight);
}



function animate() {
    requestAnimationFrame(animate);
    const time = performance.now();
    if(controls.isLocked === true){
        raycaster.ray.origin.copy(controls.getObject().position);
        raycaster.ray.origin.y -= 10;

        const intersections = raycaster.intersectObjects(objects,false);
        const onObject = intersections.length > 0;
        const delta = (time-prevTime) / 1000;

        velocity.x -= velocity.x *10.0* delta;
        velocity.z -= velocity.z *10.0* delta;
        velocity.y -= 9.8 * 100.0 * delta;

        direction.z = Number(moveForward) - Number(moveBackward);
        direction.x = Number(moveRight) - Number(moveLeft);
        direction.normalize();

        if(moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta;
        if(moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;

        if(onObject === true){
            velocity.y = Math.max(0,velocity.y);
            canJump = true;
        }
        controls.moveRight(-velocity.x * delta);
        controls.moveForward(-velocity.z * delta);
        controls.getObject().position.y += (velocity.y * delta);

        if(controls.getObject().position.y < 10){
            velocity.y = 0;
            controls.getObject().position.y = 10;
            canJump = true;
        }
    } 
    prevTime = time;
    renderer.render(scene, camera);
}

