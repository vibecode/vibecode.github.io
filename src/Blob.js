import React, { Component } from 'react'
import { TweenMax, Power1 } from 'gsap/TweenMax'
import * as THREE from 'three'
import OpenSimplexNoise from 'open-simplex-noise'

export class Blob extends Component {
  canvasRef = React.createRef()
  simplexNoise = new OpenSimplexNoise(Date.now())

  componentDidMount() {
    const canvas = this.canvasRef.current
    let width = canvas.offsetWidth,
      height = canvas.offsetHeight

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true
    })

    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1)
    renderer.setSize(width, height)
    renderer.setClearColor(0xa9e7da)

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 10000)
    camera.position.set(120, 0, 300)

    const light = new THREE.HemisphereLight(0xffffff, 0x0c056d, 0.6)
    scene.add(light)

    const light_2 = new THREE.DirectionalLight(0x590d82, 0.5)
    light.position.set(200, 300, 400)
    scene.add(light_2)

    const light_3 = light_2.clone()
    light_3.position.set(-200, 300, 400)
    scene.add(light_3)

    const geometry = new THREE.IcosahedronGeometry(120, 4)

    for (let i = 0; i < geometry.vertices.length; i++) {
      const vector = geometry.vertices[i]
      vector._o = vector.clone()
    }

    const material = new THREE.MeshPhongMaterial({
      emissive: 0x23f660,
      emissiveIntensity: 0.4,
      shininess: 0
    })

    const shape = new THREE.Mesh(geometry, material)
    scene.add(shape)

    const updateVertices = a => {
      for (let i = 0; i < geometry.vertices.length; i++) {
        const vector = geometry.vertices[i]
        vector.copy(vector._o)

        const noiseValue = this.simplexNoise.noise3D(
          vector.x * 0.006 + a * 0.0002,
          vector.y * 0.006 + a * 0.0003,
          vector.z * 0.006
        )
        const ratio = noiseValue * 0.4 * (mouse.y + 0.1) + 0.8
        vector.multiplyScalar(ratio)
      }
      geometry.verticesNeedUpdate = true
    }

    function render(a) {
      requestAnimationFrame(render)
      updateVertices(a)
      renderer.render(scene, camera)
    }

    function onResize() {
      canvas.style.width = ''
      canvas.style.height = ''
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    const mouse = new THREE.Vector2(0.8, 0.5)

    function onMouseMove(e) {
      TweenMax.to(mouse, 0.9, {
        y: e.clientY / height,
        x: e.clientX / width,
        ease: Power1.easeOut
      })
    }

    requestAnimationFrame(render)

    window.addEventListener('mousemove', onMouseMove)

    let resizeTm
    window.addEventListener('resize', function() {
      resizeTm = clearTimeout(resizeTm)
      resizeTm = setTimeout(onResize, 200)
    })
  }

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        // width="970"
        // height="584"
        style={{
          position: 'absolute',
          top: 0,
          zIndex: -1,
          width: '100%',
          height: '100vh'
        }}
      ></canvas>
    )
  }
}

export default Blob
