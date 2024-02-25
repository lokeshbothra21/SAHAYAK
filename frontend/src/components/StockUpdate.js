
import React, { Component } from 'react'
import axios from 'axios'
import { Form, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
class StockUpdate extends Component {
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
                <div className="container bg-dark text-white text-center mt-4">
                    <div className="row">
                        <div className="col ">

                        </div>
                        <div className="col-10 m-3">
                            <h1>Blood Stock</h1>
                        </div>
                        <div className="col ">

                        </div>
                    </div>
                    <div className="row">
                        <Table striped bordered hover variant="dark" className='mb-3'>
                            <thead>
                                <tr>
                                    <th>A+</th>
                                    <th>A-</th>
                                    <th>B+</th>
                                    <th>B-</th>
                                    <th>AB+</th>
                                    <th>AB-</th>
                                    <th>O+</th>
                                    <th>O-</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td contentEditable={true} suppressContentEditableWarning={true}>10</td>
                                    <td contentEditable={true} suppressContentEditableWarning={true}>10</td>
                                    <td contentEditable={true} suppressContentEditableWarning={true}>10</td>
                                    <td contentEditable={true} suppressContentEditableWarning={true}>10</td>
                                    <td contentEditable={true} suppressContentEditableWarning={true}>10</td>
                                    <td contentEditable={true} suppressContentEditableWarning={true}>10</td>
                                    <td contentEditable={true} suppressContentEditableWarning={true}>10</td>
                                    <td contentEditable={true} suppressContentEditableWarning={true}>10</td>
                                </tr>
                            </tbody>
                        </Table>
                        <div className="row">
                            <div className="col ">

                            </div>
                            <div className="col m-4">
                                <Link to="/bank/bloodStock">
                                    <Button variant="success" type="submit" >Save </Button>
                                </Link>
                            </div>
                            <div className="col ">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StockUpdate