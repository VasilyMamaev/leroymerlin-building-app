import React from 'react'
import { makeStyles, Container, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CalcTable from '../calc/calc-table/calc-table';

const LastCalcs = (props) => {

  const useStyles = makeStyles({
    container: {
      marginTop: 100,
      textAlign: 'center'
    },
    root: {
      width: '100%',
    },
    heading: {
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      marginLeft: 20
    },
  });

  const classes = useStyles()

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }

  const DrywallTableProperties = {
    header: 'Расчет обшивки стены ГКЛ',
    names: ['ГКЛ 2500х1200 12,5мм', 'профиль ППН 27х28', 'профиль ПП 60х27',
    'саморезы 3.2*25', 'шпаклевка', 'армирующая лента', 'дюбель-гвоздь 6/40',
    'демпферная лента', 'грунтовка', 'финишная шпаклевка', 'звукоизоляция'],
    units: ['шт.', 'шт.', 'шт.', 'шт.', 'шт.', 'кг', 'пог.м', 'шт',
    'пог.м', 'л', 'кг', 'кв.м']
  }

  const DrywallPartitionTableProperties = {
    header: 'Расчет перегородки из ГКЛ',
    names: ['ГКЛ 2500х1200 12,5мм', 'профиль ПН 50х40', 'профиль ПС 50х50',
    'саморезы 3.2*25 ', 'шпаклевка', 'армирующая лента', 'дюбель-гвоздь 6/40',
    'демпферная лента', 'грунтовка', 'финишная шпаклевка', 'звукоизоляция'],
    units: ['шт.', 'шт.', 'шт.', 'шт.', 'кг', 'пог.м', 'шт',
    'пог.м', 'л', 'кг', 'кв.м']
  }

  const DrywallCeilingTableProperties = {
    header: 'Расчет потолка из ГКЛ',
    names: ['ГКЛ 2500х1200 9,5мм', 'профиль ППН 27х28', 'профиль ПП 60х27',
    'подвес прямой', 'соединитель одноуровневый "краб"', 'Саморезы 3.2*25',
    'шпаклевка универсальная', 'армирующая лента "серпянка"', 'дюбель-гвозди 6/40',
    'лента уплотнительная', 'грунтовка', 'минеральная вата', 'финишная шпаклевка'],
    units: ['шт.', 'шт.', 'шт.', 'шт.', 'шт.', 'шт.', 'кг', 'пог.м', 'шт',
    'пог.м', 'л', 'кв.м', 'кг']
  }

  return <Container maxWidth="sm" className={classes.container}>
      { props.calcs.map((item, index) => {
        let tableProperties = () => {
          if (item.calcName === 'Расчет потолка из ГКЛ') {return DrywallCeilingTableProperties}
          if (item.calcName === 'Расчет перегородки из ГКЛ') {return DrywallPartitionTableProperties}
          if (item.calcName === 'Расчет обшивки стены ГКЛ') {return DrywallTableProperties}
        }
        let getDateFromTimestamp = (date) => {
          let t = new Date(date)
          return `${t.getFullYear()}/${t.getMonth()}/${t.getDate()} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`
        }
        

        return <ExpansionPanel expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} key={item.calcDate}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <Typography className={classes.heading}>{item.calcName}</Typography>
            <Typography className={classes.secondaryHeading}>{getDateFromTimestamp(item.calcDate)}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <CalcTable tableProperties={tableProperties()} lastCalc={item}/>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      })}
      
    </Container>

}

export default LastCalcs
