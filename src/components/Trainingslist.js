import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import moment from 'moment';
import DeleteIcon from '@material-ui/icons/Delete';

export default function TrainingsTable(props){

  const [training, setTrainings] = useState([]);


  useEffect(() => fetchData(), []);
  const [open, setOpen] = React.useState(false); 



  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  }
  
  
  const fetchData = () => {
      fetch (`https://customerrest.herokuapp.com/api/trainings`)
      .then(response => response.json())
      .then(data => setTrainings(data.content))   
 

}


  const deleteTraining =(link) =>{
    /*valinnan vahvistus*/
    if (window.confirm('Are you sure') ){

   fetch(link, {method:'DELETE'})
   .then(res => fetchData())
   .catch(err => console.error(err))
   
   /*Snackbar -ilmoitus poiston onnistumisesta*/
   .then(handleClick)
    } 

 }



const columns =[
    /*Rivin poistaminen*/
{

    Header: 'Actions',
    accessor: 'actions',
    sortable: false,
    filterable: false,
    width: 80,
    accessor: 'links[1].href',
    Cell: row  => <Button  onClick={() => deleteTraining(row.value)} ><DeleteIcon></DeleteIcon></Button>
    
},
{
  Header: 'Activity',
  accessor: 'activity'
  },
{
  Header: 'Date',
  accessor: 'date',
  Cell: row => {
    if(row.value) {
    return moment(row.value).format('LLL')
    } else {
    return 'Not complete'
    }
    }
},
{
    Header: 'Duration (min)',
    accessor: 'duration'
  },
  {
    Header: 'Customer',
    accessor: 'links[2].href'
  },
]

  return(
      <div>
        <ReactTable filterable={true} data={training}  columns={columns} />
        
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
          </React.Fragment>
        }
      />
      </div>
  );
}