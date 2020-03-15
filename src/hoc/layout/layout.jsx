import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import SquareFootIcon from '@material-ui/icons/SquareFoot'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore'
import ArchiveIcon from '@material-ui/icons/Archive'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  menuIcon: {
    position: "absolute",
    left: 70,
    top: 30,
    height: 40,
    width: 40
  }
});

const Layout = React.memo((props) => {

  const classes = useStyles();

  

  const [DrawerToggler, setDrawerToggler] = useState(false)

  const listIcons = [<SquareFootIcon/>, <EmojiObjectsIcon/>, <LocalGroceryStoreIcon/>]

  return (
    <>
      <MenuIcon className={classes.menuIcon} onClick={() => setDrawerToggler(true)}/>
      <Drawer anchor='left' open={DrawerToggler} onClose={() => setDrawerToggler(false)}>
      <List className={classes.list}>
        {['Расчитать проект', 'Как сдеать ремонт самому', 'Оформление заказа'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{listIcons[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
          <ListItem button >
            <ListItemIcon><ArchiveIcon/></ListItemIcon>
            <ListItemText primary='Последние расчеты' />
          </ListItem>
      </List>
      </Drawer>
      <main>
        {props.children}
      </main>
    </>
  )
})

export default Layout