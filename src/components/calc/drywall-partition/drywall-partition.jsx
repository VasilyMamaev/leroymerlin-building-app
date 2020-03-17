import React from 'react'
import { makeStyles } from '@material-ui/core';

const DrywallPartition = () => {

  const useStyles = makeStyles({
    container: {
      marginTop: 100,
      backgroundColor: 'red'
    }
  });

  const classes = useStyles()
  
  return (
    <div className={classes.container}>
      
    </div>
  )
}

export default DrywallPartition
