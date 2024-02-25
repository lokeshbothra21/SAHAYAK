
import React, { Component } from 'react'
import axios from 'axios'
import { Form, Button, Table } from 'react-bootstrap'
import '../css/common.css'
class CampSchedule extends Component {
    constructor(props) {
        super(props)

        this.state = {
            statesdata: [],
            districtsdata: []
        }
        this.stateHandler = this.stateHandler.bind(this)


    }


    componentDidMount() {
        if (this.state.statesdata.length === 0) {
            axios.get('http://localhost:9090/commondata/statesAndDistrict')
                .then(response => {
                    console.log("componentDidMount");
                    console.log(response.data);
                    this.setState({ statesdata: response.data })
                    console.log(this.state.statesdata);
                })
                .catch(error => {
                    console.log(error);
                })
        }
        console.log('out')

    }

    stateHandler(e) {
        console.log(e.target.value);
        if (e.target.value >= 0) {
            this.setState({ districtsdata: this.state.statesdata[e.target.value - 1].districts });
            console.log(this.state.districtsdata);
        }
        else {
            this.setState({ districtsdata: [] });
        }

    }


    render() {

        const { statesdata, districtsdata } = this.state;
        console.log(districtsdata);
        let statesList = statesdata.length > 0
            && statesdata.map((item, i) => {
                return (

                    <option key={i} value={item.id}>{item.name}</option>
                )
            }, this);

        let districtsList = districtsdata.length > 0
            && districtsdata.map((item, i) => {
                return (

                    <option key={i} value={item.id}>{item.name}</option>
                )
            }, this);





        return (
            <div>
                <div className="container bg-dark text-white text-center ">
                    <div className="row">
                        <div className="col ">

                        </div>
                        <div className="col-12 m-3">
                            <h1>Camp Schedule</h1>
                        </div>
                        <div className="col ">

                        </div>
                    </div>
                    <Form>
                        <div className="row">
                            <div className="col-md-4">
                                <Form.Group className="m-3">
                                    <Form.Select onChange={this.stateHandler} name="stateId">
                                        <option value="-1">Select State</option>
                                        <option value="-2">All</option>
                                        {
                                            statesList
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className="col-md-4">
                                <Form.Group className="m-3">
                                    <Form.Select name="districtId">
                                        <option value="-1">Select District</option>
                                        <option value="-2">All</option>
                                        {
                                            districtsList
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className="col-md-4">
                                <Form.Group className='m-3' controlId="formGridBloodGroup" >
                                    <Form.Select className="col-8" name="bloodId">
                                        <option value="-1">Select Blood Group</option>
                                        <option value="-2">All</option>
                                        <option value="A+ve">A +ve</option>
                                        <option value="A-ve">A -ve</option>
                                        <option value="B+ve">B +ve</option>
                                        <option value="B-ve">B -ve</option>
                                        <option value="AB+ve">AB +ve</option>
                                        <option value="AB-ve">AB -ve</option>
                                        <option value="O+ve">O +ve</option>
                                        <option value="O-ve">O -ve</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col ">

                            </div>
                            <div className="col mb-3">
                                <Button variant="primary" type="submit" >Search </Button>
                            </div>
                            <div className="col ">

                            </div>
                        </div>
                    </Form>
                </div>
                <div className="container bg-dark text-white text-center">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>S. No.</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Camp Name</th>
                                <th>Address</th>
                                <th>State</th>
                                <th>District</th>
                                <th>Contact</th>
                                <th>Email</th>
                                <th>Conducted By</th>
                                <th>Organized By</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>2022-09-12</td>
                                <td>10:00 am To 03:00 PM</td>
                                <td>Kehar Blood Camp</td>
                                <td>Kasoli</td>
                                <td>Himachal Pradesh</td>
                                <td>Solan</td>
                                <td>9513578460</td>
                                <td>xyz@123.com</td>
                                <td>Kartik</td>
                                <td>Katwal Tech</td>
                            </tr> 
                             <tr>
                                <td>2</td>
                                <td>2022-09-22</td>
                                <td>10:00 am To 03:00 PM</td>
                                <td>Bhagat Singh Camp</td>
                                <td>Jalori Gate</td>
                                <td>Rajasthan</td>
                                <td>Jodhpur</td>
                                <td>8559813490</td>
                                <td>xyz@123.com</td>
                                <td>Jinesh</td>
                                <td>Joshi Tech</td>
                            </tr>                       
                        </tbody>
                    </Table>
                </div>

            </div>
        )
    }
}

export default CampSchedule