import React, { useState, useCallback, useEffect } from 'react'
import { evolve, map } from 'ramda'

import Viewer from './Viewer'
import { stalls, sensors, beacons } from './Data.js'
import { enigmarooms } from './Data2.js'

const gold = "#A67C37";
const INITIAL_MODE = '2d'

const Iot = () => {
  const [space, setSpace] = useState()
  const [mode, setMode] = useState(INITIAL_MODE)

  // memoize so Viewer render once only (wrapped in memo)
  const onReady = useCallback(space => setSpace(space), [])

  const onModeChange = useCallback(setMode, [])

  const autoElevation = map(
    evolve({ position: { elevation: value => (mode === '3d' ? value : 0) } })
  )

  // render data layers
  useEffect(() => {
    if (!space) {
      return
    }
    space.addDataLayer({
      id: 'enigmarooms',
      type: 'polygon',
      data: enigmarooms,
      tooltip: d => `${d.name} : Ruimtetemperatuur: ${d.sensor} °C Ruimte: ${d.sensor} °C`,

      color: d =>
        d.sensor < 35 ? '#3aa655' : d.sensor < 40 ? '#c08727' : '#ff3f34',
      alpha: 0.7,
      height: mode === '3d' ? 1.9 : 0.0045
    })
    return () => {
      space.removeDataLayer('enigmaroom')
    }
  }, [space, mode, autoElevation])

  return (
    <div style={{ width: '100%', maxWidth: 1600, margin: '0 auto'}}>
    <Viewer
      mode={INITIAL_MODE}
      onReady={onReady}
      onModeChange={onModeChange}
    />
  </div>
  )
}

export default Iot