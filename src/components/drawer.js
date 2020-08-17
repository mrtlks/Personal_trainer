import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { BrowserRouter,  Link} from 'react-router-dom';
import DehazeIcon from '@material-ui/icons/Dehaze';
import App from '../App';



const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false

  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

/*-----------------------------------------*/

  const list = anchor => (
    <div
    className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <BrowserRouter>
      <div>
      <ListItem button component={Link} to="/" className={App} >
            <ListItemText primary="Customers" />
          </ListItem>
          <ListItem button component={Link} to="/trainings" className={App}>
            <ListItemText primary="Trainings" />
          </ListItem>
          <ListItem button component={Link} to="/trainings" className={App}>
            <ListItemText primary="Calendar" />
          </ListItem>
     
        </div> 
        </BrowserRouter>
     
    </div>
  );
  
/*-----------------------------------------*/

return (
  <div>
    <Button onClick={toggleDrawer("left", true)} style={{float: 'left', margin: 20 }}   color="primary"> < DehazeIcon fontSize="large"  /> </Button>
    <Drawer
      BackdropProps={{ invisible: true }}
      open={state.left}
      onClose={toggleDrawer("left", false)}
    >
      {list(List)}
      
    </Drawer>
   
    
  </div>
);
}

