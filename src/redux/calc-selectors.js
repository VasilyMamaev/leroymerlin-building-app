import { createSelector } from 'reselect'

const getLastCalcSelector = (state) => {
  return state.calc.lastCalcs
}

export const getLastCalc = createSelector(getLastCalcSelector,
  (lastCalcs) => {
    let length = lastCalcs.length
    return lastCalcs[length - 1]
})