import { CCardBody, CCardFooter } from '@coreui/react'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { useLocation } from 'react-router-dom'
import './Editpatient.css'


function EditPatient() {
    const location = useLocation()
    console.log(location);
    console.log(location.state.e.DOB);

    return (
        <>
        <form>
       <Card>
        <CardHeader>Update your Details</CardHeader>
        <CCardBody>
         <Row >
            <Col  md="6">
                <label>FirstName:</label>
                <input type="text" defaultValue={location.state.e.FirstName} className="form-control" />
            </Col>
            <Col  md="6">
                <label>LastName:</label>
                <input type="text" defaultValue={location.state.e.LastName} className="form-control" />
            </Col>
            </Row>
            <Row>
            <Col  md="6">
                <label>Date of Birth:</label>
                <input type="date"  defaultValue={location.state.e.DOB} className="form-control" />
            </Col>
            <Col  md="6">
                <label>Age:</label>
                <input type="number" defaultValue={location.state.e.Age} className="form-control" />
            </Col>
            </Row>
            <Row>
            <Col  md="6">
                <label>Needs:</label>
                <input type="text" defaultValue={location.state.e.Needs} className="form-control"/>
            </Col>
            <Col  md="6">
                <label>Problem:</label>
                <input type="text" defaultValue={location.state.e.Problem} className="form-control"/>
            </Col>
            </Row>
            <Row>
            <Col  md="6">
                <label>Days to be left:</label>
                <input type="number" defaultValue={location.state.e.Days} className="form-control"/>
            </Col>
            </Row>
            </CCardBody>
            <CCardFooter>
                <button className='btn btn-success'>Update</button>
            </CCardFooter>
       </Card>
       </form>
       </>
    )
}

export default EditPatient
