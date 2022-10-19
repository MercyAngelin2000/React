import React from 'react'
import { Card } from 'react-bootstrap'
import './Projects.css'
import logo from 'src/assets/images/logo.jpg'
// import child from 'src/assets/images/child.jpg'


function Patients() {
  return (
    
      <table class="table">
       <tbody id="tbody">
      <tr> <td>
      <Card id='card'>
             <img src={logo} alt='logo'></img>   
      </Card>
      </td>
      <td>
      <Card id='card'>
         <img src={logo} alt='logo'></img>    
      </Card>
      </td>
      <td>
      <Card id='card'>
             <img src={logo} alt='logo'></img>   
      </Card>
      </td>
      <td>
      <Card id='card'>
           <img src={logo} alt='logo'></img>   
      </Card>
      </td>
      </tr>
      </tbody>
      </table>
    
  )
}

export default Patients