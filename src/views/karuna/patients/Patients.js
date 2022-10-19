import React, { useEffect, useState } from 'react'
import { Card, InputGroup } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import './Patients.css'
import {useNavigate} from 'react-router-dom';

function Patients() {
const id=1;
const url ="/userprofile/"+id
const [post,setPost]=useState(null);
  useEffect(() => {
    fetch("http://127.0.0.1:8000"+url,
    {
      "method": "GET"}).then(data => data.json().then(data =>
        console.log(data)
      ))
  },[]);
  const navigate = useNavigate();
  const edit = (e) =>{
    console.log(e);
    navigate('/karuna/patients/editpatient',
    {state:{e}})
  }
  const [query, setQuery] = useState(' ')
  const data = [{ "id": "1", "FirstName": "Ravi", "LastName": "Vishnu", "DOB": "2002-07-17", "Age": "20", "Problem": "Mental Disorder", "Needs": "200000", "Days": "50" },
  { "id": "2", "FirstName": "Josephin", "LastName": "Jenifer", "DOB": "2002-09-21", "Age": "20", "Problem": "Amnesia", "Needs": "100000", "Days": "40" }
]
  const tbdata = data.filter((item) => {
    if (query == " ") {
      return item;
    }
    else if (item.FirstName.toLocaleLowerCase().includes(query?.toLocaleLowerCase())) {
      return item;
    }
  }

  )
    .map((item) =>
      <tr>
        <td>{item.id}</td>
        <td>{item.FirstName}</td>
        <td>{item.LastName}</td>
        <td>{item.DOB}</td>
        <td>{item.Age}</td>
        <td>{item.Problem}</td>
        <td>{item.Needs}</td>
        <td>{item.Days}</td>
        <td><button type='submit' className="btn btn-info"  onClick={() => edit(item)}>Edit</button> <button type='submit' className="btn btn-danger">Delete</button></td>
      </tr>
    )
  return (
    <>
      <Card>
        
          <CardHeader id="header"> <b>Patient Details</b>
         <InputGroup>
            <input type="text" className='form-control' placeholder="Search.." onChange={(e) => { setQuery(e.target.value) }} />
            <button type="submit" className='btn btn-info'><i class="fa fa-search "></i></button></InputGroup>
          </CardHeader>
        
        <table class="table">
          <thead id="thead">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">DOB</th>
              <th scope='col'>Age</th>
              <th scope="col">Problem</th>
              <th scope='col'>Needs(Rupees)</th>
              <th scope='col'>Days</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {tbdata}
          </tbody>
        </table>
      </Card>
    </>

  )
}

export default Patients

