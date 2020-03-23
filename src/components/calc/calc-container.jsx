import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { getLastCalc } from '../../redux/calc-selectors'
import { getCalcAC } from '../../redux/calc-reducer'
import Calc from './calc'

const CalcContainer = React.memo((props) => {

  //props for Drywall
  const DrywallFormState = {
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
  }

  const DrywallCalculateResult = (widthWall, heightWall, doorsInWall, windowsInWall) => {
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

  const DrywallTableProperties = {
    names: ['ГКЛ', 'профиль ПН', 'профиль ПС','подвесы',
    'саморезы', 'шпаклевка', 'армирующая лента', 'дюбель-гвоздь',
    'демпферная лента', 'грунтовка', 'финишная шпаклевка', 'звукоизоляция'],
    units: ['шт.', 'шт.', 'шт.', 'шт.', 'шт.', 'кг', 'пог.м', 'шт',
    'пог.м', 'л', 'кг', 'кв.м']
  }

  //props for DrywallPartition
  const DrywallPartitionFormState = {
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
  }

  const DrywallPartitionCalculateResult = (widthWall, heightWall, doorsInWall) => {
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

  const DrywallPartitionTableProperties = {
    names: ['ГКЛ', 'профиль ПН', 'профиль ПС',
    'саморезы', 'шпаклевка', 'армирующая лента', 'дюбель-гвоздь',
    'демпферная лента', 'грунтовка', 'финишная шпаклевка', 'звукоизоляция'],
    units: ['шт.', 'шт.', 'шт.', 'шт.', 'кг', 'пог.м', 'шт',
    'пог.м', 'л', 'кг', 'кв.м']
  }


  //render
  let calcId = props.match.params.calcId

  switch (calcId) {
    case 'DrywallPartition':
      return (
        <Calc 
          calculateResult={DrywallPartitionCalculateResult}
          formState={DrywallPartitionFormState}
          lastCalc={props.lastCalc}
          tableProperties={DrywallTableProperties}
        />
      )
    case 'Drywall':
      return (
        <Calc 
          calculateResult={DrywallCalculateResult}
          formState={DrywallFormState}
          lastCalc={props.lastCalc}
          tableProperties={DrywallPartitionTableProperties}
        />
      )
    default:
      return null
  }
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

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withRouter
)  (CalcContainer)