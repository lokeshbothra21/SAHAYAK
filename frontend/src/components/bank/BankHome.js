import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Table } from "react-bootstrap";
import "../css/common.css";
import commonService from "../../service/common.service";
import { Link, Navigate } from "react-router-dom";
import stockService from "../../service/stockService";

class BankHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bankdata: [],
            loginUserEmail:'',
            loginUserRole:'',
            redirect:'',
            data:'',
            bank:'',
            city:'',
            apositive:sessionStorage.getItem("apositive"),
        };
       // this.stateHandler = this.stateHandler.bind(this);
    }

    componentDidMount() {
        // const email=window.localStorage.getItem("loginUserEmail")

        // const role=window.localStorage.getItem("loginUserRole")
        const email=sessionStorage.getItem("loginUserEmail")
        const role=sessionStorage.getItem("loginUserRole")
        console.log(email+""+role)
        if(role!=='BANK'){
                this.setState({
                    redirect: "/" 
                })
            }
        this.setState({
            loginUserEmail: email,
            loginUserRole: role,
        })

        stockService.getByEmail(email)
        .then((response) => {
            console.log("componentDidMount");
            console.log(response.data);
            this.setState({data:response.data,
            bank:response.data.bank,
            city:response.data.bank.city

            })
            sessionStorage.setItem("apositive",response.data.apositive)
            sessionStorage.setItem("anegative",response.data.anegative)
            sessionStorage.setItem("bpositive",response.data.bpositive)
            sessionStorage.setItem("bnegative",response.data.bnegative)
            sessionStorage.setItem("abPositive",response.data.abPositive)
            sessionStorage.setItem("abNegative",response.data.abNegative)
            sessionStorage.setItem("opositive",response.data.opositive)
            sessionStorage.setItem("onegative",response.data.onegative)
        })
        .catch((error) => {
            console.log(error);
        });
        console.log("out");
        const {data, apositive}=this.state;
        console.log(data);
        console.log("update");
        sessionStorage.setItem("apositive",apositive)
    }

    updateHandler=()=>{
        const {data}=this.state;
        console.log(data);
        console.log("update");
        sessionStorage.setItem("apositive",data.apositive)
        sessionStorage.setItem("anegative",data.anegative)
        sessionStorage.setItem("bpositive",data.bpositive)
        sessionStorage.setItem("bnegative",data.bnegative)
        sessionStorage.setItem("abPositive",data.abPositive)
        sessionStorage.setItem("abNegative",data.abNegative)
        sessionStorage.setItem("opositive",data.opositive)
        sessionStorage.setItem("onegative",data.onegative)
        this.setState({
            redirect: "/bank/updateStock" 
        })
        
    }

   

    render() {
        const {data,bank,city}=this.state;
        //const {email} =this.state.data.bank;
        console.log(city);
        if (this.state.redirect) {
            return  <Navigate to={this.state.redirect} />
          }  
        return (
            <div>
                <div className="container bg-dark text-white text-center mt-4 col-12">
                    <div className="row">
                        <div className="col "></div>
                        <div className="col-10 m-3">
                            <h1>Welcome Blood Bank</h1>
                        </div>
                        <div className="col "></div>
                    </div>
                    <div className="row">
                        <Table striped bordered hover variant="dark" className="mb-3">
                            <thead>
                                <tr>
                                    <th>Bank Name</th>
                                    <th>Parent Hospital Name</th>
                                    <th>Short Name</th>
                                    <th>Category</th>
                                    <th>Licence No.</th>
                                    <th>City</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{bank.bankName}</td>
                                    <td>{bank.parentHospital}</td>
                                    <td>{bank.shortName}</td>
                                    <td>{bank.category}</td>
                                    <td>{bank.licence}</td>
                                    <td>{city.name}</td>
                                    <td>{bank.address}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
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
                                    <td >{data.apositive}</td>
                                    <td>{data.anegative}</td>
                                    <td>{data.bpositive}</td>
                                    <td>{data.bnegative}</td>
                                    <td>{data.abPositive}</td>
                                    <td>{data.abNegative}</td>
                                    <td>{data.opositive}</td>
                                    <td>{data.onegative}</td>
                                </tr>
                            </tbody>
                        </Table>
                        </div>
                </div>
                <Form>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div /*className="col m-4"*/ class="col-md-12 text-center">
                        <Link to="/bank/bloodStock">
                        <   Button  variant="btn btn-outline-primary">Update Bank Stock Details{" "}</Button>
                        </Link>
                     
                        </div>
                      
                        <div className="col-md-3"></div>
                    </div>
                </Form>
               
                <div class="col-md-12 text-center">
                <Link to="/">
                <Button className="m-4"variant="primary" type="submit">
                        Logout
                    </Button>
                    </Link>
                    </div>
            </div>
        );
    }
}

export default BankHome;
