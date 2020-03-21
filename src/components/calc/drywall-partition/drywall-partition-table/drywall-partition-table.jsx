import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'

const DrywallPartitionTable = (props) => {

  const names = ['ГКЛ', 'профиль ПН', 'профиль ПС',
    'саморезы', 'шпаклевка', 'армирующая лента', 'дюбель-гвоздь',
    'демпферная лента', 'грунтовка', 'финишная шпаклевка', 'звукоизоляция']
  const values = Object.values(props.lastCalc.calcResult)
  const units = ['шт.', 'шт.', 'шт.', 'шт.', 'кг', 'пог.м', 'шт',
    'пог.м', 'л', 'кг', 'кв.м']

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Наименование</TableCell>
          <TableCell>Количество</TableCell>
          <TableCell>Единица измерения</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
        { names.map((name, index) => {
          return (
          <TableRow>
            <TableCell>{name}</TableCell>
            <TableCell>{values[index]}</TableCell>
            <TableCell>{units[index]}</TableCell>
          </TableRow>
          )
        }) }
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default DrywallPartitionTable
