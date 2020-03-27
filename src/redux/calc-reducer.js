import { lastCalcsAPI } from "../api/api"

const GET_CALC = 'GET_CALC'

const initialState = {
  lastCalcs: []
}

const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CALC':
      return {
        ...state,
        lastCalcs: [...state.lastCalcs, action.calc]
      }
    default:
      return state
  }
}

export const getCalcAC = (calc) => {
  return {type: GET_CALC, calc}
}

export const addCalcTC = (calc) => {
  return (dispatch) => {
    dispatch(getCalcAC(calc))
    lastCalcsAPI.postCalc(calc)
  }
}



export default calcReducer