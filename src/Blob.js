import React, { useRef, useEffect, useState, useContext } from 'react'
import useEventListener from '@use-it/event-listener'
import { TweenMax, Power1 } from 'gsap/TweenMax'
import { debounce } from 'lodash'
import * as THREE from 'three'
import noise from './lib/perlin'
import { ThemeContext } from './themeContext'

//COLORS
const CANVAS_LIGHT = 0xffffff
const CANVAS_DARK = 0x1e2126

const HEMISPHERE_LIGHT_SKY = 0xfdbcfe
const HEMISPHERE_LIGHT_GROUND = 0xb465e9
const DIRECTIONAL_LIGHT = 0x590d82

const MESH_PHONG_MATHERIAL_EMISSIVE = 0x23f660

const Blob = () => {
  const canvasRef = useRef(null)
  const refs = useRef(null)
  const theme = useContext(ThemeContext)
  const [windowSize, setSize] = useState({})

  const screenMeasure = () => {
    const width = document.documentElement.clientWidth
    const heightMeasure = document.documentElement.clientHeight / 1.6
    const height = heightMeasure > 375 ? heightMeasure : 375

    return [width, height]
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const [width, height] = screenMeasure()

    setSize({ width, height })

    const threeRefs = (refs.current = {})

    threeRefs.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true
    })

    const { renderer } = threeRefs

    // renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1)
    renderer.setSize(width, height)
    renderer.setClearColor(theme === 'light' ? CANVAS_LIGHT : CANVAS_DARK)

    const scene = new THREE.Scene()

    //This projection mode is designed to mimic the way the human eye sees.
    //It is the most common projection mode used for rendering a 3D scene

    // PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
    // fov — Camera frustum vertical field of view.
    // aspect — Camera frustum aspect ratio.
    // near — Camera frustum near plane.
    // far — Camera frustum far plane
    threeRefs.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      10000
    )
    threeRefs.camera.position.set(0, 0, 300)

    //A light source positioned directly above the scene,
    //with color fading from the sky color to the ground color.
    const light = new THREE.HemisphereLight(
      HEMISPHERE_LIGHT_SKY,
      HEMISPHERE_LIGHT_GROUND,
      0.7
    )
    scene.add(light)

    //A light that gets emitted in a specific direction.
    //This light will behave as though it is infinitely far away
    //and the rays produced from it are all parallel.
    //The common use case for this is to simulate daylight;
    //the sun is far enough away that its position can be considered to be infinite,
    //and all light rays coming from it are parallel.
    const light_2 = new THREE.DirectionalLight(DIRECTIONAL_LIGHT, 0.5)
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

    //A material for shiny surfaces with specular highlights.
    const material = new THREE.MeshPhongMaterial({
      //Emissive (light) color of the material, essentially a solid color unaffected by other lighting.
      //Default is black.
      emissive: MESH_PHONG_MATHERIAL_EMISSIVE,
      emissiveIntensity: 0.4,
      shininess: 0.5
    })

    const shape = new THREE.Mesh(geometry, material)
    scene.add(shape)

    threeRefs.mouse = new THREE.Vector2(0.8, 0.5)

    const updateVertices = a => {
      for (let i = 0; i < geometry.vertices.length; i++) {
        const vector = geometry.vertices[i]
        vector.copy(vector._o)
        const perlin = noise.simplex3(
          vector.x * 0.006 + a * 0.0002,
          vector.y * 0.006 + a * 0.0003,
          vector.z * 0.006
        )
        const { mouse } = threeRefs
        const ratio = perlin * 0.4 * (mouse.y + 0.1) + 0.8
        vector.multiplyScalar(ratio)
      }
      geometry.verticesNeedUpdate = true
    }

    let RAF_ID_RECURSIVE
    const render = a => {
      RAF_ID_RECURSIVE = window.requestAnimationFrame(render)
      updateVertices(a)
      renderer.render(scene, threeRefs.camera)
    }

    const RAF_ID = window.requestAnimationFrame(render)

    return () => {
      window.cancelAnimationFrame(RAF_ID_RECURSIVE)
      window.cancelAnimationFrame(RAF_ID)
    }
  }, [theme])

  const onResize = () => {
    const [width, height] = screenMeasure()

    const { camera, renderer } = refs.current

    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)

    setSize({ width, height })
  }

  const onMouseMove = e => {
    const { mouse } = refs.current

    const { width, height } = windowSize

    if (!width || !height) {
      return
    }

    TweenMax.to(mouse, 0.8, {
      y: e.clientY / width,
      x: e.clientX / height,
      ease: Power1.easeOut
    })
  }

  useEventListener('mousemove', onMouseMove)
  useEventListener('resize', debounce(onResize, 100))

  return (
    <canvas
      ref={canvasRef}
      style={{
        minHeight: '375px',
        height: '62.5vh',
        backgroundColor: theme === 'light' ? 'transparent' : '#1e2126'
      }}
    ></canvas>
  )
}

export default Blob
