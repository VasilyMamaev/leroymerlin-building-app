import React, { useRef, useEffect } from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, makeStyles } from '@material-ui/core'

const CalcTable = (props) => {

  const useStyles = makeStyles({
    table: {
      width: '95%',
    },
    tableRow: {
    }
  });

  const classes = useStyles()

  const values = Object.values(props.lastCalc.calcResult)


  let resultRef = useRef()
  useEffect(() => {resultRef.current.scrollIntoView({block: 'start', behavior: 'smooth'})}, [])

  return (
    <Table className={classes.table} ref={resultRef} padding="default">
      <TableHead>
        <TableRow className={classes.tableRow}>
          <TableCell>Наименование</TableCell>
          <TableCell>Количество</TableCell>
          <TableCell>Единица измерения</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        { props.tableProperties.names.map((name, index) => {
          return (
          <TableRow key={name + index} className={classes.tableRow}>
            <TableCell>{name}</TableCell>
            <TableCell align='center'>{values[index]}</TableCell>
            <TableCell align='center'>{props.tableProperties.units[index]}</TableCell>
          </TableRow>
          )
        }) }
      </TableBody>
    </Table>
  )
}

export default CalcTable