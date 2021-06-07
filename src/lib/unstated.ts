import { useState } from 'react'
import { createContainer } from 'unstated-next'

function useDefaultState(initialState = {}) {
  let [data, setData] = useState(initialState)
  let update = (nextState: unknown) => setData(Object.assign({ data, nextState }))
  return { data, update }
}

export let Unstated = createContainer(useDefaultState)
// export let PayloadContainer = createContainer(useDefaultState)
