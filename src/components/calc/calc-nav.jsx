import React from 'react'
import { Container, ListItem, ListItemText, List, makeStyles, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom';

const CalcNav = (props) => {

  const useStyles = makeStyles({
    container: {
      marginTop: 100
    },
    link:  {
      color: 'black',
      textDecoration: 'none'
    },
  });

  const classes = useStyles()


  const listLinks = ['DrywallPartition', 'Drywall', 'DrywallCeiling']

  return (
    <Container maxWidth="sm" className={classes.container}>
      <List>
        {['Расчет прегородки из ГКЛ', 'Обшивка стен ГКЛ на металлическом каркасе', 'Обшивка потолка ГКЛ на металлическом каркасе'].map((text, index) => (
          <div key={text}>
            <Link to={`Calc/${listLinks[index]}`} className={classes.link}>
              <ListItem button key={text}>
                <ListItemText primary={text}/>
              </ListItem>
              <Divider />
            </Link>
          </div>
        ))}
      </List>
    </Container>
  )
}

export default CalcNav
