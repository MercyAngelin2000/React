import {React,useState} from 'react'
import { Card ,InputGroup} from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import './Donation.css'

function Donation() {

  const [query, setQuery] = useState(' ')
  const data = [{ "id": "1", "Donar Name": "Mercy Angelin", "Donates to": "Women Welfare", "Total Donation (Rs.)": "30000"},
  { "id": "2", "Donar Name": "Sajeeth Britto", "Donates to": "Education", "Total Donation (Rs.)": "60000" }
]
  const tbdata = data.filter((item) => {
    if (query == " ") {
      return item;
    }
    else if (item['Donar Name'].toLocaleLowerCase().includes(query?.toLocaleLowerCase())) {
      return item;
    }
  }

  )
    .map((item) =>
      <tr>
        <td>{item.id}</td>
        <td>{item['Donar Name']}</td>
        <td>{item['Donates to']}</td>
        <td>{item['Total Donation (Rs.)']}</td>
        <td><button type='submit' className="btn btn-info" >Edit</button> <button type='submit' className="btn btn-danger">Delete</button></td>
      </tr>
    )
    return (
        <Card>
          
          <CardHeader id="header"> <b>Donation and Tax</b>
         <InputGroup>
            <input type="text" className='form-control' placeholder="Search.." onChange={(e) => { setQuery(e.target.value) }} />
            <button type="submit" className='btn btn-info'><i class="fa fa-search "></i></button></InputGroup>
          </CardHeader>
        <table class="table">
<thead id="thead">
<tr>
  <th scope="col">#</th>
  <th scope="col">Donar Name</th>
  <th scope="col"> Donates to</th>
  <th scope="col"> Total Donation (Rs.)</th>
  <th>Action</th>
</tr>
</thead>
<tbody>
 {tbdata}
</tbody>
</table>
    </Card>
    )
}

export default Donation