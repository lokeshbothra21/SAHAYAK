import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Table } from "react-bootstrap";
import "../css/common.css";
import donorService from "../../service/donorService";
import { Link, Navigate } from "react-router-dom";
import { render } from "@testing-library/react";

class DonorHome extends Component {
    constructor(props){
        super(props);
        this.state = {
            donordata: [],
            loginUserEmail:'',
            email:'',
            redirect:'',
            data:[],
            donor:'',
            city:'',
            
        };
    }
    componentDidMount() {
        const email=sessionStorage.getItem("loginUserEmail")
        this.setState({
            loginUserEmail: email,
            
        })
        donorService.getByEmail(email)
        .then((response) => {
            console.log("componentDidMount");
            console.log(response.data);
            this.setState({data:response.data,
            // donor:response.data.donor,
            // city:response.data.donor.city

            }) })
            .catch((error) => {
                console.log(error);
            });

    }

    render(){
        const {data,donor,city}=this.state;
        //const {email} =this.state.data.donor;
        console.log(data);
        return (
            <div>
                <div className="container bg-dark text-white text-center mt-4 col-12">
                    <div className="row">
                        <div className="col "></div>
                        <div className="col-10 m-3">
                            <h1>Welcome Donor</h1>
                        </div>
                        <div className="col "></div>
                    </div>
                    <div className="row">
                        <Table striped bordered hover variant="dark" className="mb-3">
                            <thead>
                                <tr>
                                    
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Birth Date</th>
                                    <th>Gender</th>
                                    <th>Mobile</th>
                                   
                                </tr>
                            </thead>
                             
                            
                            
                             <tbody>
                             
                                <tr>
                                <td>{data.firstName}</td>
                                    <td>{data.lastName}</td>
                                    <td>{data.email}</td>
                                    <td>{data.birthDate}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.mobile}</td>
                                    
                                   
                                   
                                </tr>
                                
                            </tbody> 
                        </Table>
                    </div>
                    
                    
                </div>
                
                <div className="col-md-12 text-center">
                <Link to="/donor/donorAppointment">
                <Button className="m-4" variant="primary">Donor Appointment</Button>
              </Link>
                <Link to="/">
                <Button className="m-4"variant="danger" type="submit">
                        Logout
                    </Button>
                    </Link>
                    </div>
            </div>
        );
       
    }
}
    
    


export default DonorHome;
