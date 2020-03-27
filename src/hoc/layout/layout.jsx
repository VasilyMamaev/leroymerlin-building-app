import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import SquareFootIcon from '@material-ui/icons/SquareFoot'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore'
import ArchiveIcon from '@material-ui/icons/Archive'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import { makeStyles, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import green from '@material-ui/core/colors/green'
import { Link } from 'react-router-dom'

const Layout = React.memo((props) => {

  const useStyles = makeStyles({
    list: {
      width: 300,
    },
    link:  {
      color: 'black',
      textDecoration: 'none'
    },
    menuIcon: {
      position: "absolute",
      left: 70,
      top: 30,
      height: 40,
      width: 40,
    }
  });

  const classes = useStyles();

  const [DrawerToggler, setDrawerToggler] = useState(false)

  const listIcons = [<SquareFootIcon/>, <EmojiObjectsIcon/>, <LocalGroceryStoreIcon/>, <ArchiveIcon style={{color: green[500]}}/>]
  const listLinks = ['Calc', 'Learn', 'Order', 'LastCalcs']

  return (
    <div>
      <Button className={classes.menuIcon} onClick={() => setDrawerToggler(true)}><MenuIcon/></Button>
      <Drawer anchor='left' open={DrawerToggler} onClose={() => setDrawerToggler(false)}>
        <List className={classes.list}>
          {['Расчитать проект', 'Как сделать ремонт самому', 'Оформление заказа', 'Последние расчеты'].map((text, index) => (
            <Link key={text + index} className={classes.link} to={location => ({ ...location, pathname: `/${listLinks[index]}` })}>
              <ListItem button key={text} onClick={() => setDrawerToggler(false)}>
                <ListItemIcon style={{color: green[500]}}>{listIcons[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
              {index === 2 ? <Divider/> : null}
            </Link>
          ))}
        </List>
      </Drawer>
      <main>
        {props.children}
      </main>
    </div>
  )
})

export default Layout