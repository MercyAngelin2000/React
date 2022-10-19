import {React,useState} from 'react'
import { Card ,InputGroup} from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import './Income.css'

function Income() {

  const [query, setQuery] = useState(' ')
  const data = [{ "id": "1", "EventName": "DB Music", "EventDate": "2022-10-30", "Event Income (Rs.)": "30000", "Event Expense (Rs.)": "20000" },
  { "id": "2", "EventName": "Play Beat", "EventDate": "17/10/2022", "Event Income (Rs.)": "60000", "Event Expense (Rs.)": "45000"  }
]
  const tbdata = data.filter((item) => {
    if (query == " ") {
      return item;
    }
    else if (item.EventName.toLocaleLowerCase().includes(query?.toLocaleLowerCase())) {
      return item;
    }
  }

  )
    .map((item) =>
      <tr>
        <td>{item.id}</td>
        <td>{item.EventName}</td>
        <td>{item.EventDate}</td>
        <td>{item['Event Income (Rs.)']}</td>
        <td>{item['Event Expense (Rs.)']}</td>
        <td><button type='submit' className="btn btn-info" >Edit</button> <button type='submit' className="btn btn-danger">Delete</button></td>
      </tr>
    )
    return (
        <Card>
          
          <CardHeader id="header"> <b>Income and Expense</b>
         <InputGroup>
            <input type="text" className='form-control' placeholder="Search.." onChange={(e) => { setQuery(e.target.value) }} />
            <button type="submit" className='btn btn-info'><i class="fa fa-search "></i></button></InputGroup>
          </CardHeader>
        <table class="table">
<thead id="thead">
<tr>
  <th scope="col">#</th>
  <th scope="col">Event Name</th>
  <th scope="col"> Event Date</th>
  <th scope="col"> Event Income (Rs.)</th>
  <th scope='col'>Event Expense (Rs.)</th>
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

export default Income