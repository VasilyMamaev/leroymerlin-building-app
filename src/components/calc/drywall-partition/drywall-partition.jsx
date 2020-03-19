import React, { useState } from 'react'
import { makeStyles, Container } from '@material-ui/core'
import green from '@material-ui/core/colors/green'
import Paper from '@material-ui/core/Paper'
import ReportIcon from '@material-ui/icons/Report'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const DrywallPartition = React.memo((props) => {

  const useStyles = makeStyles({
    container: {
      marginTop: 100,
      textAlign: 'center'
    },
    input: {

    }
  });

  const classes = useStyles()

  const [formControls, setFormCotrols] = useState({
    widthWall: {
      value: '',
      label: 'длина прегородки',
      valid: false,
      errorMessage: 'эррор',
      touched: false,
      validation: {}
    },
    heightWall: {
      value: '',
      label: 'ширина прегородки',
      valid: false,
      errorMessage: 'эррор',
      touched: false,
      validation: {}
    },
    doorsInWall: {
      value: '0',
      label: 'количество дверных проемов',
      valid: false,
      errorMessage: 'эррор',
      touched: false,
      validation: {}
    }
  })

  const onControlValueChange = (value, controlName) => {
    setFormCotrols({
      ...formControls, 
      [controlName] : {
        ...formControls[controlName],
        value
      }   
    })
  }

  console.log(formControls)
  return (
    <Container maxWidth="sm" className={classes.container}>
      <h2>Расчет перегородки из ГКЛ</h2>
      <Paper>
        <Paper><ReportIcon></ReportIcon>Внимание! Дробное число вводиться через точку, например 2.5</Paper>
        <form onSubmit={console.log('')}>
          {Object.keys(formControls).map((controlName, index) => {
            return <div>
              <TextField
                key= {controlName}
                type="number"
                variant="outlined"
                margin="normal"
                required
                id={`${controlName}`}
                label={formControls[controlName].label}
                name={`${controlName}`}
                value={formControls[controlName].value}
                onChange={(evt) => onControlValueChange(evt.target.value, `${controlName}`)}
              />
            </div> 
          })}
          <Button type='submit' variant='contained' style={{backgroundColor: green[500]}}>Расчитать</Button>
        </form>
      </Paper>
    </Container>
  )
})

export default DrywallPartition
