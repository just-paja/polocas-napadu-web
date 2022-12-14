import animations from 'react-animate-on-change'
import React, { useEffect, useRef, useState } from 'react'
import styles from './TeamScore.module.scss'

import { AudioManager } from '../AudioManager.mjs'
import { getNewRandomItem } from '../shuffle.mjs'
import { Howl } from 'howler'

import point8bit from '../sounds/point-8bit.wav'
import pointDistortionGuitar from '../sounds/point-distortion-guitar.wav'
import pointHalelujah from '../sounds/point-halelujah.wav'
import pointSynth01 from '../sounds/point-synth-01.wav'
import pointSynth02 from '../sounds/point-synth-02.wav'
import pointSynthBaseball from '../sounds/point-synth-baseball.wav'
import pointWindows from '../sounds/point-windows.wav'

const AnimateOnChange = animations.default
const availableFanfares = [
  point8bit,
  pointDistortionGuitar,
  pointHalelujah,
  pointSynth01,
  pointSynth02,
  pointSynthBaseball,
  pointWindows,
]

const fanfares = availableFanfares.map(sound => {
  AudioManager.store(
    sound,
    new Howl({
      src: [sound],
      format: 'wav',
    })
  )
  return sound
})

export const TeamScore = ({ backgroundColor = '#ccc', score }) => {
  const lastFanfare = useRef(null)
  const [animating, setAnimating] = useState(false)
  const [visibleScore, setVisibleScore] = useState(score)

  const handleAnimationEnd = () => setAnimating(false)
  const playFanfare = () => {
    const soundId = getNewRandomItem(fanfares, lastFanfare.current)
    lastFanfare.current = soundId
    AudioManager.play(soundId)
  }

  useEffect(() => {
    setVisibleScore(score)
    if (score > visibleScore) {
      playFanfare()
    }
    handleAnimationEnd()
  }, [score, visibleScore])
  return (
    <AnimateOnChange
      baseClassName={styles.animate}
      animationClassName={styles.appear}
      animate={Boolean(animating)}
      onAnimationEnd={handleAnimationEnd}
    >
      <span className={styles.score} style={{ backgroundColor }}>
        {visibleScore}
      </span>
    </AnimateOnChange>
  )
}
