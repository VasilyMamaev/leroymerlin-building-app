import React, { useState } from 'react'
import LastCalcs from './last-calcs'
import { connect } from 'react-redux'
import { getLastCalcs } from '../../redux/calc-selectors'
import { useEffect } from 'react'
import { lastCalcsAPI } from '../../api/api'

const LastCalcsContainer = React.memo((props) => {

  let [lastCalcs, setLastCalcs] = useState([])
  let [isFetched, setIsFetched] = useState(false)

  const getCalcs = () => {
    lastCalcsAPI.getLastCalcs()
    .then(response => {
      if (response.data) {
        let calcsFromFirebase = Object.keys(response.data).map((item) => ({...response.data[item].calc}))
        setLastCalcs(calcsFromFirebase)
        setIsFetched(true)
      } else {
        setLastCalcs(props.lastCalcsFromState)
        setIsFetched(true)
      }
    })
  }

  useEffect(getCalcs, [])

  return (
    <>
    { isFetched 
      ? <LastCalcs
          calcs={lastCalcs}
        />
      : null
    }
    </>
  )
})

let mapStateToProps = (state) => {
  return {
    lastCalcsFromState: getLastCalcs(state)
  }
}


export default connect(mapStateToProps, {})(LastCalcsContainer)
