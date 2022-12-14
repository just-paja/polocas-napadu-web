import moment from 'moment'
import React, { useEffect, useRef, useState } from 'react'

const getSecondDiff = start => moment().diff(start, 'seconds')
const numberBase = 10
const timerInterval = 200
const zeroPad = number => (number < numberBase ? `0${number}` : `${number}`)

export const Timer = ({ start }) => {
  const [time, setTime] = useState(getSecondDiff(start))
  const interval = useRef(null)
  const incrementTime = () => setTime(getSecondDiff(start))
  const duration = moment.duration(time, 'seconds')

  useEffect(() => {
    interval.current = setInterval(incrementTime, timerInterval)
    return () => clearInterval(interval.current)
  }, [])

  return (
    <span>
      {zeroPad(duration.hours())}:{zeroPad(duration.minutes())}:
      {zeroPad(duration.seconds())}
    </span>
  )
}
