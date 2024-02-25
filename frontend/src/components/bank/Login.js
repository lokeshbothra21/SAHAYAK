import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios'
import validator from 'validator'
import commonService from '../../service/common.service';
import { useHistory } from "react-router-dom";
import { Navigate } from "react-router-dom";


import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AdminHome from '../admin/AdminHome';

class Login extends Component {
    constructor(props) {
        super(props)
    
    
    
        this.state = {
          
          email: '',
          isValidEmail: '',
          
          password: '',
          isValidPassword: '',
          redirect: null,
          errors: {
          }
        };
    
        //const history = useHistory();
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
      }

      emailHandler = (event) => {
        
        this.setState({
          [event.target.name]: event.target.value,
          errors: [],
          isValidEmail: ''
        });
        const newErrors = {};
        console.log(event.target.value);
        this.emailValidation(newErrors, event.target.value)
      }
    
      emailValidation = (newErrors, email) => {
        let flag = true;
        if (email === '') {
          newErrors.email = ' Cannot be blank!'
          flag = false;
        }
        else {
          if (!(validator.isEmail(email))) {
            newErrors.email = ' Invalid Email !'
            flag = false;
          }
        }
    
    
        if (flag) {
          this.setState({
            isValidEmail: true
          })
        }
        else {
          this.setState({
            errors: newErrors
          })
        }
      }

      passwordHandler= event => {
        this.setState({ 
          [event.target.name] : event.target.value ,
          errors:[],
          isValidPassword:''
        });
        const newErrors = {};
        const  password = event.target.value;
        this.passwordValidation(newErrors,password)
      };
    
      passwordValidation=(newErrors,password)=>{
        let flag=true;
      if ( password === '' ) {
        newErrors.password = ' Cannot be blank!'
        flag=false;
      }
 
        
        
        if(flag){
          this.setState({
            isValidPassword: true
         })
        }
        else{
          this.setState({
            errors: newErrors
         })
         
        }
      }
    


    findFormErrors = () => {
        const newErrors = {};
        const { email, password, } = this.state
          console.log(this.state);
          let flag=true;
         if (email === '') {
           newErrors.email = ' Cannot be blank!'
           flag=false;
         }
         else{
          if (!(validator.isEmail(email))) {
            newErrors.email = ' Invalid Email!'
            flag=false;
          }
          if(flag){
            commonService.getVerifyUserEmail(email)
          .then(response=>{
            console.log("componentDidMount");
           console.log(response);
           //this.setState({citiesdata:response.data})
           console.log(response.data);
           
           if(response.data){
            this.setState({
                isValidEmail: ''
             })
             console.log("inside");
               newErrors.email = 'Email Not Registered!'
               toast.error('Email Not Registered!')
               this.setState({
                isValidEmail: false
             })
             }
           })
           .catch(error=>{
              console.log(error);
           })
          }
         }
    
    
        if (password === '') {
          newErrors.password = ' Cannot be blank!'
        }
       
        
    
    
        console.log(newErrors);
        return newErrors
      }
    



    handleSubmit = (event) => {
        this.setState({
          errors: []
        })
        console.log(event);
        const newErrors = this.findFormErrors()
        event.preventDefault();
    
        console.log(newErrors);
        if (Object.keys(newErrors).length > 0) {
          // We got errors!
          event.preventDefault();
          this.setState({
            errors: newErrors
          })
        }
        else{
          event.preventDefault();
          //let history = useHistory();
          const  {  email,  password, } = this.state;
          console.log(email+" "+  password);
           commonService.getUserLogin(email,password)
                .then(response=>{
                 console.log("componentDidMount");
                console.log(response);
                if(response.data.role==='BANK'){
                    toast.success("Welcome Bank");
                    this.setState({ redirect: "/bank/bankHome" });
                    sessionStorage.setItem("loginUserEmail",response.data.email)
                    sessionStorage.setItem("loginUserRole",response.data.role)
                    // window.localStorage.setItem("loginUserEmail",response.data.email)
                    // window.localStorage.setItem("loginUserRole",response.data.role)
                }
                else if(response.data.role==='ADMIN'){
                    toast.success("Welcome ADMIN");
                    
                    this.setState({ redirect: "/admin/adminHome" });
                    sessionStorage.setItem("loginUserEmail",response.data.email)
                    sessionStorage.setItem("loginUserRole",response.data.role)
                    // window.localStorage.setItem("loginUserEmail",response.data.email)
                    // window.localStorage.setItem("loginUserRole",response.data.role)
                }
                else{
                  toast.error("Login Failed ... Try Again");
                }
                
                console.log(response.data);
                })
                .catch(error=>{
                   console.log(error);
                })
    
        }
      }





  render() {

    const {    isValidEmail,  isValidPassword, errors  } = this.state;
    //swal("Here's a message!");
    if (this.state.redirect) {
        return  <Navigate to={this.state.redirect} />
      }
    return (
      
        <div className="container">
        <div className="row">
            <div className="col">

            </div>
            <div className="p-3 m-2 bg-dark text-white col-5">
                <Form noValidate onSubmit={this.handleSubmit} autoComplete="off">
                    <h1>Login</h1><br />
                    <Form.Group className="m-2" controlId="formBasicEmail">
                        <Form.Label>E-Mail</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" name="email" onChange={this.emailHandler}
                        isValid={isValidEmail} isInvalid={!!errors.email} required />
                        <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"><b>{errors.email}</b></Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="m-2" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="Password" placeholder="Enter Password" name="password"
                        onChange={this.passwordHandler} isValid={isValidPassword} isInvalid={!!errors.password} required />
                        <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"><b>{errors.password}</b></Form.Control.Feedback>
                    </Form.Group>

                    <Button className="m-4"variant="primary" type="submit">
                        Login
                    </Button>
                    
                    <Link to="/bank/register">
                        <Button className="m-4" variant="danger">Not Registered ?</Button>
                    </Link>
                </Form>
            </div>
            <div className="col">

            </div>
        </div>
    </div>
    )
  }
}

export default Login


