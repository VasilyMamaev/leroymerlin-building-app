import React, { useState } from 'react'
import { Container, Paper, TextField, makeStyles, Button } from '@material-ui/core'
import green from '@material-ui/core/colors/green'
import ReportIcon from '@material-ui/icons/Report'
import CalcTable from './calc-table/calc-table'

const Calc = React.memo((props) => {

  const useStyles = makeStyles({
    container: {
      marginTop: 100,
      textAlign: 'center',
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5
    },
    result: {
      marginTop: 10,
      marginBottom: 10
    },
    warning: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#CDCDCD'
    }
  });

  const classes = useStyles()

  const [formControls, setFormCotrols] = useState(props.formState)
  const [isCalculated,setIsCalculated] = useState(false)  

  const onControlValueChange = (value, controlName) => {
    setFormCotrols({
      ...formControls, 
      [controlName] : {
        ...formControls[controlName],
        value
      }   
    })
  }

  const onSubmitForm = (evt) => {
    evt.preventDefault()
    props.calculateResult(...Object.keys(formControls).map((controlName) => formControls[controlName].value))
    setIsCalculated(true)
    }

  return (
    <Container maxWidth="sm" className={classes.container}>
      <h2>{props.tableProperties.header}</h2>
      <Paper className={classes.warning}><ReportIcon style={{color: 'red'}}></ReportIcon>Внимание! Дробное число вводиться через точку, например 2.5</Paper>
      <form onSubmit={onSubmitForm}>
        {Object.keys(formControls).map((controlName, index) => {
          return <div>
            <TextField
              key= {controlName + index}
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
      <Paper elevation={3} className={classes.result}>
      { isCalculated ? <CalcTable tableProperties={props.tableProperties} lastCalc={props.lastCalc}/> : null }
      </Paper>
    </Container>
  )
})


export default Calc