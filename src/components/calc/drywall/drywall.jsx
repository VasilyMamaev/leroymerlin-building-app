import React, { useState } from 'react'
import { Container, Paper, TextField, makeStyles, Button } from '@material-ui/core'
import green from '@material-ui/core/colors/green'
import ReportIcon from '@material-ui/icons/Report'
import DrywallTable from './drywall-table/drywall-table'
import { getCalcAC } from '../../../redux/calc-reducer'
import { getLastCalc } from '../../../redux/calc-selectors'
import { connect } from 'react-redux'

const Drywall = React.memo((props) => {

  const useStyles = makeStyles({
    container: {
      marginTop: 100,
      textAlign: 'center'
    },
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
    },
    windowsInWall: {
      value: '0',
      label: 'количество оконных проемов',
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
    calculateResult(formControls.widthWall.value, formControls.heightWall.value, formControls.doorsInWall.value, formControls.windowsInWall.value)
    setIsCalculated(true)
  }

  const calculateResult = (widthWall, heightWall, doorsInWall, windowsInWall) => {
    const ww = Number(widthWall)
    const hw = Number(heightWall)
    const dw = Number(doorsInWall)
    const wiw = Number(windowsInWall)

    const doorsArea = (dw * 1.2) + (wiw * 0.4)
    const area = (ww * hw) - doorsArea
    const perimeter = (ww + hw) * 2

    props.addCalc(
      {
        calcName: 'Расчет обшивки стены ГКЛ',
        calcResult: {
          gkl: Math.ceil(area / 3),
          pn: Math.ceil(perimeter / 3) + (2 * dw + 3 * wiw),
          ps: Math.ceil((ww / 0.6) - 1),
          gimbal: Math.ceil(((ww / 0.6) - 1) * 3),
          screws: Math.ceil(area * 34),
          putty: Math.ceil(area * 0.9),
          ReinforcingTape: Math.ceil(ww > 1.2 ? (Math.ceil(ww / 1.2) - 2 ) * hw : 0),
          dowels: Math.ceil(area * 1.5),
          sealingTape: Math.ceil(perimeter),
          primer: Math.ceil(area / 10),
          finishPutty: Math.ceil(area * 1.2),
          insulation: Math.ceil(area)
        }
      }
    ) 
  }

  return (
    <Container maxWidth="sm" className={classes.container}>
      <h2>Расчет обшивки стены ГКЛ</h2>
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
      { isCalculated ? <DrywallTable lastCalc={props.lastCalc}/> : null }
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

export default connect(mapStateToProps,mapDispatchToProps) (Drywall)