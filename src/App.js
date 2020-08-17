import React from 'react';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TemporaryDrawer from './components/drawer';
import CustomerTable from './components/Customerlist';
import TrainingsTable from './components/Trainingslist';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Kalenteri from './Calendar';

function App() {

  

  return (
    <div className="App">
   
  
           <AppBar position="static"  AppBar style={{ background: '#2E3B55', margin: '0 0 20px 0 '}} > 
        <Toolbar>    
          <Typography variant="h6" >
            PersonalTrainer
          </Typography> 
        </Toolbar>
        <TemporaryDrawer />
      </AppBar >  
      <BrowserRouter>
      <div>
      <ListItem button component={Link} to="/">
            <ListItemText primary="Customers" />
          </ListItem>
          <ListItem button component={Link} to="/trainings">
            <ListItemText primary="Trainings" />
          </ListItem>
          <ListItem button component={Link} to="/calendar" >
            <ListItemText primary="Calendar" />
          </ListItem>
      <Switch>
          <Route exact path="/" component={CustomerTable} />
          <Route exact path="/trainings" component={TrainingsTable} />
          <Route exact path="/calendar" component={Kalenteri} />

        </Switch>
        </div> 
        </BrowserRouter>
     
    </div>
   
    
  );
}

export default App;

