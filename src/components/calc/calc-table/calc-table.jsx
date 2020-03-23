import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, makeStyles } from '@material-ui/core'

const CalcTable = (props) => {

  const useStyles = makeStyles({
    table: {
      minWidth: '100%',
    },
  });

  const classes = useStyles()

  const values = Object.values(props.lastCalc.calcResult)

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Наименование</TableCell>
          <TableCell>Количество</TableCell>
          <TableCell>Единица измерения</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
        { props.tableProperties.names.map((name, index) => {
          return (
          <TableRow>
            <TableCell>{name}</TableCell>
            <TableCell>{values[index]}</TableCell>
            <TableCell>{props.tableProperties.units[index]}</TableCell>
          </TableRow>
          )
        }) }
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default CalcTable