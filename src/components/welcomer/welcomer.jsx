import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';

const Welcomer = () => {

  const useStyles = makeStyles({
    container: {
      marginTop: 100,
      backgroundColor: 'red'
    }
  });

  const classes = useStyles()
  
  return (
    <Container maxWidth="sm" className={classes.container}>
      Приветствуем вас в Building app!
    </Container>
  )
}

export default Welcomer
