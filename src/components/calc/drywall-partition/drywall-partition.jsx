import React, { useState } from 'react'
import { makeStyles, Container } from '@material-ui/core'
import green from '@material-ui/core/colors/green'
import Paper from '@material-ui/core/Paper'
import ReportIcon from '@material-ui/icons/Report'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { getCalcAC } from '../../../redux/calc-reducer'
import { connect } from 'react-redux'
import { getLastCalc } from '../../../redux/calc-selectors'
import DrywallPartitionTable from './drywall-partition-table/drywall-partition-table'

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
      label: 'высота прегородки',
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
    calculateResult(formControls.widthWall.value, formControls.heightWall.value, formControls.doorsInWall.value)
    setIsCalculated(true)
  }

  const calculateResult = (widthWall, heightWall, doorsInWall) => {
    const ww = Number(widthWall)
    const hw = Number(heightWall)
    const dw = Number(doorsInWall)

    const doorsArea = dw * 1.2
    const area = (ww * hw) - doorsArea
    const perimeter = (ww + hw) * 2

    props.addCalc(
      {
        calcName: 'Расчет перегородки из ГКЛ',
        calcResult: {
          gkl: Math.ceil(area / 1.5),
          pn: Math.ceil(perimeter / 3) + (2 * dw),
          ps: Math.ceil((ww / 0.6) - 1),
          screws: Math.ceil(area * 68),
          putty: Math.ceil(area * 1.8),
          ReinforcingTape: Math.ceil(ww > 1.2 ? (Math.ceil(ww / 0.6) - 2 ) * hw : 0),
          dowels: Math.ceil(area * 1.5),
          sealingTape: Math.ceil(perimeter),
          primer: Math.ceil(area / 5),
          finishPutty: Math.ceil(area * 2.4),
          insulation: Math.ceil(area)
        }
      }
    ) 
  }

  return (
    <Container maxWidth="sm" className={classes.container}>
      <h2>Расчет перегородки из ГКЛ</h2>
      <Paper>
        <Paper><ReportIcon></ReportIcon>Внимание! Дробное число вводиться через точку, например 2.5</Paper>
        <form onSubmit={onSubmitForm}>
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
      { isCalculated ? <DrywallPartitionTable lastCalc={props.lastCalc}/> : null }
    </Container>
  )
})


let mapStateToProps = (state) => {
  return {
    lastCalc: getLastCalc(state)
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addCalc: (calc) => {
      dispatch(getCalcAC(calc))
    }
  }

}

export default connect(mapStateToProps,mapDispatchToProps) (DrywallPartition)
