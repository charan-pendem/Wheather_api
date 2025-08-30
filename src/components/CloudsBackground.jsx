import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import CLOUDS from 'vanta/dist/vanta.clouds.min'
import './CloudsBackground.css'

const CloudsBackground = () => {
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = CLOUDS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        skyColor: 0x87ceeb,
        cloudColor: 0xffffff,
        cloudShadowColor: 0x183550,
        sunColor: 0xff9919,
        sunGlareColor: 0xff6633,
        sunlightColor: 0xff9933,
        speed: 1.0
      })
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
        vantaEffect.current = null
      }
    }
  }, [])

  return <div ref={vantaRef} className="clouds-background" />
}

export default CloudsBackground