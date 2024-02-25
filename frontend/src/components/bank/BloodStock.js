import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios'
import validator from 'validator'
import './CampRegister.css'
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
import stockService from '../../service/stockService';
import { Navigate } from "react-router-dom";


import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


class BloodStock extends Component {
    constructor(props) {
        super(props)



        this.state = {
            apositive:sessionStorage.getItem("apositive"),
            isValidAP:'',
            anegative:sessionStorage.getItem("anegative"),
            isValidAN:'',
            bpositive:sessionStorage.getItem("bpositive"),
            isValidBP:'',
            bnegative:sessionStorage.getItem("bnegative"),
            isValidBN:'',
            abPositive:sessionStorage.getItem("abPositive"),
            isValidABP:'',
            abNegative:sessionStorage.getItem("abNegative"),
            isValidABN:'',
            opositive:sessionStorage.getItem("opositive"),
            isValidOP:'',
            onegative:sessionStorage.getItem("onegative"),
            isValidON:'',
            bank:[],
            redirect:'',
            errors: {
            },
            succ: {
            }
        };

        this.changeHandlerAP = this.changeHandlerAP.bind(this);
        this.changeHandlerAN = this.changeHandlerAN.bind(this);
        this.changeHandlerBP = this.changeHandlerBP.bind(this);
        this.changeHandlerABP = this.changeHandlerABP.bind(this);
        this.changeHandlerOP = this.changeHandlerOP.bind(this);
        this.changeHandlerBN = this.changeHandlerBN.bind(this);
        this.changeHandlerABN = this.changeHandlerABN.bind(this);
        this.changeHandlerON = this.changeHandlerON.bind(this);
        
    }

    changeHandlerAP = event => {
        console.log(event.target.value + 'changeHandler' + event.target.name);
        this.setState({ apositive: event.target.value});



    };



    changeHandlerAN = event => {
        console.log(event.target.value + 'changeHandler' + event.target.name);
        this.setState({ anegative: event.target.value});
      

    };

    changeHandlerBP = event => {
        console.log(event.target.value + 'changeHandler' + event.target.name);
        this.setState({ bpositive: event.target.value});
  

    };


    changeHandlerBN = event => {
        console.log(event.target.value + 'changeHandler' + event.target.name);
        this.setState({ bnegative: event.target.value});


    };

    changeHandlerABP = event => {
        console.log(event.target.value + 'changeHandler' + event.target.name);
        this.setState({ abPositive: event.target.value});

    };

    changeHandlerABN = event => {
        console.log(event.target.value + 'changeHandler' + event.target.name);
        this.setState({ abNegative: event.target.value});
  

    };


    changeHandlerOP = event => {
        console.log(event.target.value + 'changeHandler' + event.target.name);
        this.setState({ opositive: event.target.value});


    };


    changeHandlerON = event => {
        console.log(event.target.value + 'changeHandler' + event.target.name);
        this.setState({ onegative: event.target.value });

    };



   
    handleSubmit = (event) => {

       const { apositive,
        anegative,
        bpositive,
        bnegative,
        abPositive,
        abNegative,
        opositive,
        onegative}= this.state;
        //let data={}
        const email=sessionStorage.getItem("loginUserEmail")
        
        //console.log(data);
        stockService.getByEmail(email)
        .then(response=>{
        console.log("componentDidMount");
        console.log(response.data.bank);
        ///id=response.data.bank.id;
         this.setState({bank:response.data.bank})
        // console.log(this.state.districtsdata);
         const data={
            "id":response.data.id,
            "bank":response.data.bank,
            "abPositive": abPositive,
            "abNegative": abNegative,
            "onegative": onegative,
            "anegative": anegative ,
            "bpositive": bpositive,
            "bnegative": bnegative,
            "apositive": apositive,
            "opositive": opositive,
            
        } 
        console.log(data)
            stockService.updateStock(data)
            .then(response=>{
                console.log(response.data);
                toast.success("Update Successfully");
                    
                this.setState({ redirect: "/bank/bankHome" });
            })
            .catch(error=>{
                console.log(error);
            })
        })
        .catch(error=>{
            console.log(error);
        })
        
        event.preventDefault();
    }

    findFormErrors = () => {
        
    }

    componentDidMount() {
       

    }






    render() {


        const { isValidAP, errors, isValidBP, isValidBN, isValidABP, isValidABN, isValidAN, isValidOP, isValidON, } = this.state;
   

            if (this.state.redirect) {
                return  <Navigate to={this.state.redirect} />
              }
        return (
            
            <div className="container bg-dark text-white text-center col-10 font-weight-bold">
                <div className="row">
                    <div className="col ">
                    </div>
                    <div className="col-10 ">
                        <h1>Blood Stock</h1>
                    </div>
                    <div className="col ">
                    </div>
                </div>
                <Form noValidate onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-4">
                            <Form.Group className="m-2" controlId="formBasicCampName">
                                <Form.Label>A+</Form.Label>
                                <Form.Control type="number"
                                    name='campName' value={this.state.apositive} onChange={this.changeHandlerAP}
                                    isValid={isValidAP} isInvalid={!!errors.apositive} required />
                                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid"><b>{errors.apositive}</b></Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col-md-4">
                            <Form.Group className="m-2" controlId="formBasicCampName">
                                <Form.Label>A-</Form.Label>
                                <Form.Control type="text"
                                    name='campName'  value={this.state.anegative} onChange={this.changeHandlerAN}
                                    isValid={isValidAN} isInvalid={!!errors.anegative} required />
                                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid"><b>{errors.anegative}</b></Form.Control.Feedback>
                            </Form.Group>
                        </div> 
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-4">
                            <Form.Group className="m-2" controlId="formBasicCampName">
                                <Form.Label>B+</Form.Label>
                                <Form.Control type="text"
                                    name='campName' onChange={this.changeHandlerBP} value={this.state.bpositive}
                                    isValid={isValidBP} isInvalid={!!errors.bpositive} required />
                                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid"><b>{errors.bpositive}</b></Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col-md-4">
                            <Form.Group className="m-2" controlId="formBasicCampName">
                                <Form.Label>B-</Form.Label>
                                <Form.Control type="text"
                                    name='campName' onChange={this.changeHandlerBN} value={this.state.bnegative}
                                    isValid={isValidBN} isInvalid={!!errors.bnegative} required />
                                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid"><b>{errors.bnegative}</b></Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-4">
                            <Form.Group className="m-2" controlId="formBasicCampName">
                                <Form.Label>AB+</Form.Label>
                                <Form.Control type="text"
                                    name='campName' onChange={this.changeHandlerABP} value={this.state.abPositive}
                                    isValid={isValidABP} isInvalid={!!errors.abPositive} required />
                                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid"><b>{errors.abPositive}</b></Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col-md-4">
                            <Form.Group className="m-2" controlId="formBasicCampName">
                                <Form.Label>AB-</Form.Label>
                                <Form.Control type="text"
                                    name='campName' onChange={this.changeHandlerABN} value={this.state.abNegative}
                                    isValid={isValidABN} isInvalid={!!errors.abNegative} required />
                                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid"><b>{errors.abNegative}</b></Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-4">
                            <Form.Group className="m-2" controlId="formBasicCampName">
                                <Form.Label>O+</Form.Label>
                                <Form.Control type="text"
                                    name='campName' onChange={this.changeHandlerOP} value={this.state.opositive}
                                    isValid={isValidOP} isInvalid={!!errors.opositive} required />
                                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid"><b>{errors.opositive}</b></Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col-md-4">
                            <Form.Group className="m-2" controlId="formBasicCampName">
                                <Form.Label>O-</Form.Label>
                                <Form.Control type="text"
                                    name='campName' onChange={this.changeHandlerON} value={this.state.onegative}
                                    isValid={isValidON} isInvalid={!!errors.onegative} required />
                                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid"><b>{errors.onegative}</b></Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col"></div>
                    </div>

                    <div className="row">
                        <div className="col ">

                        </div>
                        <div className="col-md-8 m-4">
                            <Button variant="primary" type="submit" >Update</Button>
                        </div>
                        <div className="col ">

                        </div>
                    </div>
                </Form>




            </div>
        )
    }
}

export default BloodStock