import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles, Paper } from '@material-ui/core';

const Welcomer = () => {

  const useStyles = makeStyles({
    container: {
      marginTop: '8%'
    },
    paper: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column'
    },
    header: {
      display: 'flex',
      alignItems: 'center'
    }
  });

  const classes = useStyles()
  
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Paper elevation={1} className={classes.paper}>
        <h2 className={classes.header}>Приветствуем вас в Building app!<img src={require('./leroy-merlin-logo-pic.png')} alt='logo'/></h2>
        <p>Чтобы приступить к расчетам, коснитесь значка меню в левом верхнем углу.</p>
      </Paper>
    </Container>
  )
}

export default Welcomer
