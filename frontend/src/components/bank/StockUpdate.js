
import React, { Component } from 'react'
import axios from 'axios'
import { Form, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
class StockUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            statesdata: [],
            districtsdata: [],
            apositive:sessionStorage.getItem("apositive"),
            anegative:sessionStorage.getItem("anegative"),
            bpositive:sessionStorage.getItem("bpositive"),
            bnegative:sessionStorage.getItem("bnegative"),
            abPositive:sessionStorage.getItem("abPositive"),
            opositive:sessionStorage.getItem("opositive"),
            onegative:sessionStorage.getItem("onegative"),
        }
        this.updateHandler=this.updateHandler.bind(this)

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

    updateHandler=()=>{
        const {  apositive } = this.state;
        console.log(apositive);
    }



    render() {

        const { statesdata, districtsdata, apositive } = this.state;
        


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
                                    <td contentEditable={true} suppressContentEditableWarning={true}>{this.state.apositive}</td>
                                    <td contentEditable={true} suppressContentEditableWarning={true}>{this.state.anegative}</td>
                                    <td contentEditable={true} suppressContentEditableWarning={true}>{this.state.bpositive}</td>
                                    <td contentEditable={true} suppressContentEditableWarning={true}>{this.state.apositive}</td>
                                    <td contentEditable={true} suppressContentEditableWarning={true}>{this.state.apositive}</td>
                                    <td contentEditable={true} suppressContentEditableWarning={true}>{this.state.apositive}</td>
                                    <td contentEditable={true} suppressContentEditableWarning={true}>{this.state.apositive}</td>
                                    <td contentEditable={true} suppressContentEditableWarning={true}>{this.state.apositive}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <div className="row">
                            <div className="col ">

                            </div>
                            <div className="col m-4">
                                
                                    <Button variant="success"  onClick={this.updateHandler}>Save </Button>
                                
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