/* global smplr */
import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { loadSmplrJs } from "@smplrspace/smplr-loader";


const Viewer = memo(({ mode, onReady, onModeChange }) => {

  const localrun = useRef(false);

 
  useEffect(() => {
    if (localrun.current) return;
    // we recommend using the default value 'esm' in your code but stackblitz required 'umd'
    console.log(localrun.current)
    localrun.current = true;
    loadSmplrJs('umd')
      .then((smplr) => {
        const space = new smplr.Space({
          spaceId: 'dbdd39b8-14ed-41fd-9552-8725f8edb241',
          clientToken: 'pub_574eb1407e1048b8beee65c70deeb679',
          containerId: 'smplr-container'
        });
        space.startViewer({
          preview: true,
          mode,
          allowModeChange: true,
          onModeChange,
          onReady: () => onReady(space),
          onError: error => console.error('Could not start viewer', error)
        });
      })
      .catch((error) => console.error(error));
  }, []);


  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '60%'
      }}
    >
      <div
        id='smplr-container'
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'whitesmoke'
        }}
      />
    </div>
  )
})

Viewer.propTypes = {
  mode: PropTypes.string.isRequired,
  onReady: PropTypes.func.isRequired,
  onModeChange: PropTypes.func
}

export default Viewer