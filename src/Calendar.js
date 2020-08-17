import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Scheduler, DayView, WeekView, MonthView, Toolbar,DateNavigator, TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';
import React, { useState, useEffect } from 'react';


import './App.css';

export default function Kalenteri () {

    const [trainings, setTrainings] = useState([]);
   

    useEffect(() => fetchData(), []);
    

    const fetchData = () => {
        fetch (`https://customerrest.herokuapp.com/api/trainings`)
        .then(response => response.json())
        .then(data => setTrainings(data.content))   
    }
  console.log(trainings)

  


        return (
          <Paper>
            <Scheduler
     
            >
                
              <ViewState
                defaultCurrentDate="2020-08-17"
              />
              <DayView />
              
              <Toolbar />
              <DateNavigator />
              <TodayButton />
     
            </Scheduler>
          </Paper>
        );
      }

    
