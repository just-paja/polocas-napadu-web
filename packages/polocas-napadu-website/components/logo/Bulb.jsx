import React from 'react'
import PropTypes from 'prop-types'

const colors = {
  inverse: '#fcfaed',
  primary: '#007120'
}

function BulbHandle ({ style }) {
  const posx = 438
  const posy = 640
  const width = 120
  const height = 25
  const spacing = 16
  return (
    <>
      <rect x={posx} y={posy + spacing} width={width} height={height} style={style} />
      <rect x={posx} y={posy + height + 2 * spacing} width={width} height={height} style={style} />
      <rect x={posx + width / 4} y={posy + height * 2 + spacing * 3} width={width / 2} height={height} style={style} />
    </>
  )
}

function BulbRay ({ style, rotate, x, y }) {
  return (
    <rect
      height={125}
      style={style}
      transform={`translate(62, 15) rotate(${rotate})`}
      width={30}
      x={x}
      y={y}
    />
  )
}

export function Bulb ({ className, color }) {
  const style = {
    fill: colors[color]
  }

  return (
    <svg className={className} viewBox='260 150 480 660'>
      <path
        d={[
          'm 408.88,365.37',
          'a 125.46,125.46 0 0 0 -2.5,174.84',
          'l 31.38,97.28',
          'H 557.41',
          'L 588.8,540.21',
          'A 125.45,125.45 0 0 0 408.88,365.37',
          'Z',
          'm -7.79,88.71',
          'a 96.5,96.5 0 1 1 164.73,68.24',
          'l -2.47,2.46 -27,83.76',
          'h -77.51',
          'l -27,-83.76 -2.47,-2.46',
          'a 95.9,95.9 0 0 1 -28.28,-68.24',
          'z'
        ].join(' ')}
        style={style}
      />
      <BulbHandle style={style} />
      <BulbRay rotate={-45} style={style} x={-170} y={410} />
      <BulbRay rotate={0} style={style} x={265} y={235} />
      <BulbRay rotate={45} style={style} x={460} y={-220} />
      <BulbRay rotate={-90} style={style} x={-310} y={540} />
      <BulbRay rotate={135} style={style} x={-160} y={-840} />
    </svg>
  )
}

Bulb.propTypes = {
  color: PropTypes.oneOf(['primary', 'inverse'])
}

Bulb.defaultProps = {
  color: 'primary'
}
