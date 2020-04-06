import React from 'react'
import { Container, Paper, makeStyles } from '@material-ui/core'
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';

const Order = () => {

  const useStyles = makeStyles({
    paper: {
      marginTop: '40%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 20
    }
  });

  const classes = useStyles()
  
  return (
    <Container maxWidth="sm">
      <Paper className={classes.paper}>
        <EmojiFoodBeverageIcon/>
        <strong>Приложение находится в разработке</strong>
      </Paper>
    </Container>
  )
}

export default Order
