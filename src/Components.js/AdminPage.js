import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

function Adminpage() {
 const[record,setRecord]=useState(
  [
    {id:1,Category:"kurta",color:"brown",quantity:8},
    {id:2,Category:"kurta",color:"black",quantity:5},
    {id:3,Category:"kurta",color:"White",quantity:7},
    {id:4,Category:"kurta",color:"red",quantity:10},
    {id:5,Category:"hoody",color:"brown",quantity:5},
    {id:6,Category:"kurta",color:"black",quantity:6},
    {id:7,Category:"kurta",color:"blue",quantity:3},
    {id:8,Category:"kurta",color:"white",quantity:12},
    {id:9,Category:"women casual",color:"blue",quantity:5},
    {id:10,Category:"women casual",color:"pink",quantity:6},
    {id:11,Category:"women casual",color:"maroon",quantity:8}
  ]
 )
 const handledelete=(id)=>{
  const updatedrecord=
  record.filter((ref)=>
  ref?.id!==id)
  setRecord(updatedrecord);
 }
    
  
            
    return (<div>
  
 

<div class="container-fluid"/>
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3 sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <span data-feather="home" class="align-text-bottom"></span>
              Dashboard
            </a>
          </li>
          <li class="nav-item">
           <Link>
              <span data-feather="file" class="align-text-bottom"></span>
              Orders
            </Link>
          </li>
          <li class="nav-item">
           <Link>
              <span data-feather="shopping-cart" class="align-text-bottom"></span>
              Products
           </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="users" class="align-text-bottom"></span>
              Customers
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="bar-chart-2" class="align-text-bottom"></span>
              Reports
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="layers" class="align-text-bottom"></span>
              Integrations
            </a>
          </li>
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
          <span>Saved reports</span>
          <a class="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle" class="align-text-bottom"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Current month
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Last quarter
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Social engagement
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Year-end sale
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4"/>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar" class="align-text-bottom"></span>
            This week
          </button>
        </div>
      </div>

      <canvas class="my-4 w-100" id="myChart" width="900" height="380">
       
      </canvas>

    </div> 
    <div id='admin'></div>
    <h2>Products Available</h2>
      <div className='table'>
       <tr>
        <thead>
          <th>id</th>
          <th></th>
          <th>Category</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>color</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>quantity</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>operations</th>
        </thead>
        <tbody>
          {record.map((ab)=>(
            <tr>
            <td>{ab.id}</td>
            <td></td>
            
            <td>{ab.Category}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{ab.color}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{ab.quantity}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><button onClick={()=>handledelete(ab.id)}>Delete</button></td>

            

            </tr>
          ))}
        </tbody>
       </tr>
      </div>
    </div>
    );
    }

export default Adminpage;