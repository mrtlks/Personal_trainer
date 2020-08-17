import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Addcustomer from './Addcustomer';
import Editcustomer from './Editcustomer';
import Addtraining from './Addtraining';
import DeleteIcon from '@material-ui/icons/Delete';





export default function CustomerTable(){

  const [customers, setCustomers] = useState([]);

  useEffect(() => fetchData(), []);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  

  
  const fetchData = () => {
      fetch (' https://customerrest.herokuapp.com/api/customers')
      .then(response => response.json())
      .then(data => setCustomers(data.content))   
  }



  const deleteCustomer =(link) =>{
  console.log(link);
  if (window.confirm('Are you sure') ){
        fetch(link, {method:'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err))
        
           /*Snackbar -ilmoitus poiston onnistumisesta*/
        .then(handleClick)
      } 
    }

 const saveCustomer = (customer) => {
  fetch(' https://customerrest.herokuapp.com/api/customers',{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(customer)
    })
    .then(res => fetchData())
    .catch(err => console.error(err))
}


const updateCustomer =(customer, link) => {
  fetch(link, {
    method: 'PUT',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(customer)
    })
    .then(res => fetchData())
    .catch(err => console.error(err))
  }


  const saveTraining = (training) => {
    fetch(`https://customerrest.herokuapp.com/api/trainings`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(training)
      })
      .then(res => fetchData())
      .catch(err => console.error(err))
  }
  
    

const columns =[
{ 
   Header: 'Actions',
   accessor: 'actions',
   sortable: false,
   filterable: false,
   width: 80,
   accessor: 'links[0].href',
   Cell: row  => <Button  onClick={() => deleteCustomer(row.value)} ><DeleteIcon></DeleteIcon></Button>
   
},
{
  sortable: false,
  filterable: false,
  width: 80,
  Cell: row => <Editcustomer updateCustomer={updateCustomer} customer={row.original}/>
},
{
  sortable: false,
  filterable: false,
  width: 80,
  Cell: row => <Addtraining saveTraining={saveTraining} customer={row.original}/>
},

{
   Header: 'First name',
   accessor: 'firstname'
},
{
   Header: 'Last name',
   accessor: 'lastname'
},
{
    Header: 'Email',
    accessor: 'email'
  },
  {
    Header: 'Phone',
    accessor: 'phone'
  },
  {
    Header: 'Street address',
    accessor: 'streetaddress'
  },
  {
    Header: 'Postcode',
    accessor: 'postcode'
  },
  {
    Header: 'City',
    accessor: 'city'
  },


]
  
 /* Cell: ({index}) => <button id={index} onClick={deletePressed} > Delete</button> */



  return(
      <div>
          <Addcustomer saveCustomer={saveCustomer}/>
          <Addtraining saveTraining={saveTraining}/>
        <ReactTable filterable={true} data={customers} columns={columns} />
        <Snackbar
        anchorOrigin={{
          vertical: 'top',
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