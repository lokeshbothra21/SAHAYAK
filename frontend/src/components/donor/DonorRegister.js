import React, { Component } from 'react'
import { Form, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios'
import commonService from '../../service/common.service';
import donorService from '../../service/donorService';
import validator from 'validator';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Navigate } from "react-router-dom";
class DonorRegister extends Component {
    constructor(props) {
        super(props)


        
        this.state = {
           statesdata: [],
           districtsdata: [],
           citiesdata: [],
           firstName : '',
           isValidFirstName : '',
            lastName : '',
            isValidLastName : '',
            birthDate: '',
            isValidBirthDate : '',
            gender:'',
            isValidGender:'',
            email:'',
            isValidEmail:'',
            stateId:'',
            isValidStatetId:'', 
            districtId:'',
             isValidDistrictId:'', 
             cityId:'',
             isValidCitytId:'',
            mobile:'',
            isValidMoblie:'',
            password:'',
            isValidPassword:'',
            confirmPassword:'',
            isValidConfirmPassword:'',
          errors:{
            },
          succ:{ 
            }
        };
        
        this.handleSubmit=this.handleSubmit.bind(this);
        this.nameHandler=this.nameHandler.bind(this);
        this.lastNameHandler=this.lastNameHandler.bind(this);
        this.birthDateHandler=this.birthDateHandler.bind(this);
        this.genderHandler=this.genderHandler.bind(this);
        this.emailHandler=this.emailHandler.bind(this);
        this.stateHandler=this.stateHandler.bind(this);
        this.districtHandler=this.districtHandler.bind(this);
        this.cityHandler=this.cityHandler.bind(this);
        this.mobileHandler=this.mobileHandler.bind(this);
        this.passwordHandler=this.passwordHandler.bind(this);
        this.confirmPasswordHandler=this.confirmPasswordHandler.bind(this);
      }

      

      nameHandler = event => {
        this.setState({ 
          [event.target.name] : event.target.value ,
          errors:[],
          isValidFirstName:''
        });
        const newErrors = {};
        const  firstName = event.target.value;
        this.firstNameValidation(newErrors,firstName)
      };

      firstNameValidation=(newErrors,firstName)=>{
        let flag=true;
        
        if ( firstName === '' ) {
          newErrors.firstName = ' Cannot be blank!'
          flag=false;
        }
        else{
          if ( !(firstName.length>=3 &&  firstName.length<15) ) {
            newErrors.firstName = 'Length must be between 3 and 15 character !'
            flag=false;
          }
          if (  !(/^[A-Za-z]/.test(firstName)) ) {
            newErrors.firstName = ' Must start with a letter !'
            flag=false;
          }

        }
        if(flag){
          this.setState({
            isValidFirstName: true
         })
        }
        else{
          this.setState({
            errors: newErrors
         })
        }
      }



      lastNameHandler = event => {
        this.setState({ 
          [event.target.name] : event.target.value ,
          errors:[],
          isValidLastName:''
        });
        const newErrors = {};
        const  lastName = event.target.value;
        
        this.lastNameValidation(newErrors,lastName)
      };
      
      lastNameValidation=(newErrors, lastName)=>{
        let flag=true;
      if ( lastName === '' ) {
        newErrors.lastName = ' Cannot be blank!'
        flag=false;
      }
      else{
        if ( !(lastName.length>=3 &&  lastName.length<15) ) {
          newErrors.lastName = 'Length must be between 3 and 15 character !'
          flag=false;
        }
        if (  !(/^[A-Za-z]/.test(lastName)) ) {
          newErrors.lastName = ' Must start with a letter !'
          flag=false;
        }

      }
      if(flag){
        this.setState({
          isValidLastName: true
       })
      }
      else{
        this.setState({
          errors: newErrors
       })
      }
      
      } 
      
      
      birthDateHandler= (event) => {
        this.setState({ 
          [event.target.name] : event.target.value ,
          errors:[],
          isValidBirthDate:''
        });
        const newErrors = {};
        const  dateString = event.target.value;
        this.birthDateValidation(newErrors,dateString)
       
      }


      birthDateValidation=(newErrors,dateString)=>{
        let flag=true;
        if ( dateString === '' ) {
          newErrors.birthDate = ' Cannot be blank!'
          flag=false;
        }
        else{
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age--;
        }
        
        if ( !(age>18 &&  age<65) ) {
            newErrors.birthDate = 'Age must be between 18 and 65 !'
            flag=false;
        }
        }
        if(flag){
          this.setState({
            isValidBirthDate: true
         })
        }
        else{
          this.setState({
            errors: newErrors
         })
        }
      }

      genderHandler= (event) => {
        this.setState({ 
          [event.target.name] : event.target.value ,
          errors:[],
          isValidGender:''
        });
        const newErrors = {};
        const  gender = event.target.value;
        this.genderValidation(newErrors, gender)
        
      }

      genderValidation=(newErrors,gender)=>{
        let flag=true;
        if ( gender === '' ) {
          newErrors.gender = ' Cannot be blank!'
          flag=false;
        }
        
        if(flag){
          this.setState({
            isValidGender: true
         })
        }
        else{
          this.setState({
            errors: newErrors
         })
        }
      }

      emailHandler= (event) => {
        this.setState({ 
          [event.target.name] : event.target.value ,
          errors:[],
          isValidEmail:''
        });
        const newErrors = {};
        this.emailValidation(newErrors,event.target.value)
      }

      emailValidation=(newErrors,email)=>{
        let flag=true;
        
        if ( email === '' ) {
          newErrors.email = ' Cannot be blank!'
          flag=false;
        }
        else{
           if(!(validator.isEmail(email))){
            newErrors.email = ' Invalid Email !'
            flag=false;
          }
        }

        
        if(flag){
          this.setState({
            isValidEmail: true
         })
        }
        else{
          this.setState({
            errors: newErrors
         })
        }
      }

      stateHandler(e){
        const newErrors = {};
        this.setState({ 
          [e.target.name] : e.target.value ,
          errors:[],
          isValidStateId:'',
          districtsdata:[],
          districtId:'',
          citiesdata:[],
          cityId:'',
          isValidDistrictId:'',
          isValidCitytId:''
        });
        const stateId=e.target.value;
        this.stateValidation(newErrors,stateId)
        
        
        
      }
    
      stateValidation=(newErrors,stateId)=>{
        console.log(stateId);
        let flag=true;
        if ( stateId === '' ) {
          newErrors.stateId = ' Cannot be blank!'
          flag=false;
        }
        else{
          if(stateId>=0){
              //axios.get('http://localhost:9090/commondata/districts/'+stateId)
              commonService.getAllDistrictsByStateId(stateId)
              .then(response=>{
              console.log("componentDidMount");
              console.log(response.data);
              this.setState({districtsdata:response.data})
              console.log(this.state.districtsdata);
              })
              .catch(error=>{
                  console.log(error);
              })
          }
          else{
            newErrors.stateId = ' Cannot be blank!'
            flag=false;
          }
        }
        
        if(flag){
          this.setState({
            isValidStateId: true
         })
        }
        else{
          this.setState({
            errors: newErrors,
            districtId:'',
            citiesdata:[],
            cityId:'',
            isValidDistrictId:'',
            isValidCitytId:'',
            isValidStateId:''
         })
        }
      }

      districtHandler(e){
        this.setState({ 
          [e.target.name] : e.target.value ,
          errors:[],
          citiesdata:[],
          cityId:'',
          isValidDistrictId:'',
          isValidCitytId:''
        });
        const newErrors = {};
        const districtId=e.target.value;
        let flag=true;
        if ( districtId === '' ) {
          newErrors.districtId = ' Cannot be blank!'
          flag=false;
        }
        else{
          if(districtId>=0){
    
              //axios.get('http://localhost:9090/commondata/cities/'+districtId)
              commonService.getAllCitiesByDistricId(districtId)
              .then(response=>{
              this.setState({citiesdata:response.data})
              console.log(this.state.citiesdata);
              })
              .catch(error=>{
                  console.log(error);
              })
            
          }
          else{
            
            newErrors.districtId = ' Cannot be blank!'
            flag=false;
          }
        }
        
        if(flag){
          this.setState({
            isValidDistrictId: true
         })
        }
        else{
          this.setState({
            errors: newErrors,
            citiesdata:[],
            citytd:'',
            isValidCitytId:''
         })
        }
      }
    
      
    
    
      cityHandler(e){
        this.setState({ 
          [e.target.name] : e.target.value ,
          errors:[],
          isValidCitytId:''
        });
        const newErrors = {};
        const cityId=e.target.value;
        this.cityValidation(newErrors,cityId)
        //http://localhost:9090/commondata/cities/39
        
      }
    
      cityValidation=(newErrors,cityId)=>{
        let flag=true;
        if ( cityId === '' ) {
          newErrors.cityId = ' Cannot be blank!'
          flag=false;
        }
        else{
          if(cityId<0){
            newErrors.cityId = ' Cannot be blank!'
            flag=false;
          }
         
        }
        
        if(flag){
          this.setState({
            isValidCitytId: true
         })
        }
        else{
          this.setState({
            errors: newErrors
         })
        }
      }
    

      mobileHandler = event => {
        this.setState({ 
          [event.target.name] : event.target.value ,
          errors:[],
          isValidMoblie:''
        });
        const newErrors = {};
        const  mobile = event.target.value;
        this.mobileValidation(newErrors,mobile)
      };

      mobileValidation=(newErrors,mobile)=>{
       
        let flag=true;
      
        if ( mobile === '' ) {
          newErrors.mobile = ' Cannot be blank!'
          flag=false;
          if ( (/^(?=.*[a-zA-Z]).*$/.test(mobile)))  {
            newErrors.password = `cannot contain letter !`
            flag=false;
          }
      }
      else{
        
        if ( !(mobile>1111111111 && mobile<9999999999) ) {
          newErrors.mobile = 'Invalid Mobile !'
          flag=false;
        }
        if ( !(mobile.length===10) ) {
          newErrors.mobile = `length=${mobile.length}, Length must be 10 digit !`
          flag=false;
        }
  
      }
        
        
        if(flag){
          this.setState({
            isValidMoblie: true
         })
        }
        else{
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
      else{
        if ( !(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password)))  {
          newErrors.password = `Invalid Password !`
          flag=false;
        }
        if ( !(password.length >7 && password.length <15) ) {
          newErrors.password = `length=${password.length}, Length must be between 7 and 15 charcter !`
          flag=false;
        }
        if ( !(/^(?=.*[a-z]).*$/.test(password)))  {
          newErrors.password = `contain at least one lowercase letter !`
          flag=false;
        }
        if ( !(/^(?=.*[A-Z]).*$/.test(password)))  {
          newErrors.password = `contain at least one uppercase letter !`
          flag=false;
        }
        if ( !(/^(?=.*[0-9]).*$/.test(password)))  {
          newErrors.password = `contain at least one digit !`
          flag=false;
        }
        if ( !(/^(?=.*\W).*$/.test(password)))  {
          newErrors.password = `contain at least one special character !`
          flag=false;
        }
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

      confirmPasswordHandler= event => {
        this.setState({ 
          [event.target.name] : event.target.value ,
          errors:[],
          isValidPassword:'',
          isValidConfirmPassword:''
        });
        const newErrors = {};
        const  confirmPassword = event.target.value;
        this.confirmPasswordValidation(newErrors, confirmPassword )
      };

      confirmPasswordValidation=(newErrors, confirmPassword)=>{
        const { password} = this.state
        let flag=true;
        if ( confirmPassword === '' ) {
          newErrors.confirmPassword = ' Cannot be blank!'
          flag=false;
        }
        else
        if ( password === '' ) {
          newErrors.password = ' Cannot be blank!'
          flag=false;
        }
        else{
          if ( !(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password)))  {
            newErrors.password = `Invalid Password !`
            flag=false;
          }
          if(password !== confirmPassword){
            newErrors.confirmPassword = ' Passwords do not match!'
            flag=false;
          }
          
        }
        
        
        if(flag){
          this.setState({
            isValidPassword: true,
            isValidConfirmPassword: true
         })
        }
        else{
          this.setState({
            errors: newErrors
         })
        }
      }






      handleSubmit = (event) => {
        this.setState({
          errors: []
      })
        
        const newErrors=this.findFormErrors()
        //event.preventDefault();
        
        console.log(newErrors);
        console.log(this.state);
        if ( Object.keys(newErrors).length > 0 ) {
        // We got errors!
        event.preventDefault();
        this.setState({
            errors: newErrors
        })
      }
      else{
        event.preventDefault();
        //AddDonorDonor(firstName=null, lastName=null, birthDate=null, gender=null, email=null, stateId=0, districtId=0, cityId=0, mobile=0, password=null, confirmPassword=null)
        const  { firstName, lastName, birthDate, gender, email,  cityId, mobile, password } = this.state;
        console.log(cityId);
        const city={
          "id":cityId
        }
        const donor = { firstName, lastName, birthDate, gender, email, city, mobile, password }
        console.log(donor);
         axios.post('http://localhost:9090/donor/register', donor)
              .then(response=>{
               console.log("componentDidMount");
              console.log(response);
              //this.setState({citiesdata:response.data})
              console.log(response.data);
              toast.success("Register Successfully!!");
                this.setState({ redirect: '/donor/login' });
              })
              .catch(error=>{
                 console.log(error);
              })

      }
    }

      findFormErrors=()=>{
        const newErrors = {};
        
        const { firstName, lastName, birthDate, gender, email, stateId, districtId, cityId, mobile, password, confirmPassword } = this.state
        
        this.firstNameValidation(newErrors,firstName);
        
        this.lastNameValidation(newErrors,lastName)
        
        
  
        if ( birthDate === '' ) {
          newErrors.birthDate = ' Cannot be blank!'
        }
        else{
        const  dateString = birthDate;
        this.birthDateValidation(newErrors,dateString)
        }
        
        if ( gender === '' ) {
          newErrors.gender = ' Cannot be blank!'
        }
        else{
          this.genderValidation(newErrors,gender)
        }
        
        if (email === '') {
          newErrors.email = ' Cannot be blank!'
   
        }
        else{
         if (!(validator.isEmail(email))) {
           newErrors.email = ' Invalid Email!'
         }
         else{
           donorService.getVerifyEmail(email)
         .then(response=>{
           console.log("componentDidMount");
          console.log(response);
          //this.setState({citiesdata:response.data})
          console.log(response.data);
          if(response.data){
            console.log("inside");
              newErrors.email = 'Email Already Registered!'
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
   
        


        const vstateId=stateId;
        if ( vstateId === '' ) {
          newErrors.stateId = ' Cannot be blank!'
        }
        else{
         //this.stateValidation=(newErrors,vstateId)
        }
        const vdistrictId=districtId;
        if ( vdistrictId === '' ) {
          newErrors.districtId = ' Cannot be blank!'
        }
        else{
          //this.districtValidation(newErrors,vdistrictId)
        }
        const vcityId=cityId;
        if ( vcityId === '' ) {
          newErrors.cityId = ' Cannot be blank!'
        }
        else{
          //this.cityValidation=(newErrors,vcityId)
        }
       
        if (mobile === '') {
          newErrors.mobile = ' Cannot be blank!'
        }
        else{
          if (!(mobile.length === 10)) {
            newErrors.mobile = `length=${mobile.length}, Length must be 10 digit !`
          }
         else{
           //
           //axios.get(`http://localhost:9090/donor/verifymobile/${mobile}`)
           donorService.getVerifyMobile(mobile)
         .then(response=>{
           console.log("componentDidMount");
          console.log(response);
          //this.setState({citiesdata:response.data})
          console.log(response.data);
          if(response.data){
            console.log("inside");
              newErrors.mobile = 'Number Already Registered!'
              this.setState({
               isValidMoblie: false
            })
            }
          })
          .catch(error=>{
             console.log(error);
          })
    
         }
        }
       // this.mobileValidation(newErrors,mobile)
        
        this.passwordValidation(newErrors,password)

        this.confirmPasswordValidation(newErrors, confirmPassword)
        
        
        


        console.log(newErrors);
        return newErrors
    }
    
      componentDidMount(){
        if(this.state.statesdata.length=== 0){
          
          //http://localhost:9090/commondata/cities/39
          //axios.get('http://localhost:9090/commondata/statesAndDistrict')
          commonService.getAllStates()
          .then(response=>{
            console.log("componentDidMount");
            console.log(response.data);
            this.setState({statesdata:response.data})
            console.log(this.state.statesdata);
          })
          .catch(error=>{
              console.log(error);
          })
        }
        console.log('out')
          
        
      }
  
      render() {
        
        
        const {
           isValidFirstName,  isValidLastName , isValidBirthDate,  isValidGender ,
           isValidEmail, isValidStateId, isValidDistrictId, isValidCitytId,
           isValidMoblie, isValidPassword, isValidConfirmPassword, 
           statesdata, districtsdata, citiesdata, errors} =this.state;
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


    let citiesList = citiesdata.length > 0
      && citiesdata.map((item, i) => {
      return (
        
       <option key={i} value={item.id}>{item.name}</option>
      )
    }, this);

    if (this.state.redirect) {
      return  <Navigate to={this.state.redirect} />
    }

    return (

        <div className="container bg-dark text-white text-center col-11 font-weight-bold">
            <div className="row">
                <div className="col ">
                </div>
                <div className="col-10 ">
                    <h1>Donor Registration</h1>
                </div>
                <div className="col ">
                </div>
            </div>
            <Form noValidate onSubmit={this.handleSubmit}>
            <div className="row">
                <div className="col-md-6">
                <Form.Group className="m-2" controlId="formBasicFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter First Name" 
                  name='firstName' onChange={this.nameHandler}
                   isValid={ isValidFirstName } isInvalid={ !!errors.firstName } required/>
                   <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback> 
                   <Form.Control.Feedback type="invalid"><b>{ errors.firstName }</b></Form.Control.Feedback>
                </Form.Group>
                </div>

                <div className="col-md-6">
                <Form.Group className="m-2" controlId="formBasicLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Last Name" name="lastName" 
                  onChange={this.lastNameHandler}  isValid={ isValidLastName } isInvalid={ !!errors.lastName } required/>
                  <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback> 
                   <Form.Control.Feedback type="invalid"><b>{ errors.lastName }</b></Form.Control.Feedback>
                </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 ">
                <Form.Group className="m-2" controlId="formBasicBirthDate" name="birthDate" required>
                  <Form.Label>Enter Birth Date</Form.Label>
                  <Form.Control type="date"  name="birthDate" onChange={this.birthDateHandler} 
                   isValid={ isValidBirthDate } isInvalid={ !!errors.birthDate } />
                  <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback> 
                  <Form.Control.Feedback type="invalid"><b>{ errors.birthDate }</b></Form.Control.Feedback>
                </Form.Group>
                </div>
                <div className="col-md-4 ">
                <Form.Group className='m-2' controlId="formGridGender" >
                    <Form.Label >Gender</Form.Label>
                    <Form.Select className="col"  name="gender" onChange={this.genderHandler}
                      isValid={ isValidGender } isInvalid={ !!errors.gender } required>
                        <option value="-1"  hidden>Choose Value</option>
                        <option value="FEMALE">Female</option>
                        <option value="MALE">Male </option>
                        <option value="TRANSGENDER">Transgender</option>
                        
                    </Form.Select>
                    <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback> 
                    <Form.Control.Feedback type="invalid"><b>{ errors.gender }</b></Form.Control.Feedback>
                </Form.Group>
                </div>
                <div className="col-md-4 ">
                <Form.Group className="m-2" controlId="formBasicEmail">
                    <Form.Label>E-Mail</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" name="email" onChange={this.emailHandler}
                      isValid={ isValidEmail } isInvalid={ !!errors.email } required/>
                    <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback> 
                    <Form.Control.Feedback type="invalid"><b>{ errors.email }</b></Form.Control.Feedback>
                </Form.Group>
                </div>
            </div>
            <div className="row">
          <div className="col-md-4">
          <Form.Group className="m-2">
              <Form.Label>State</Form.Label>
              <Form.Select onChange={this.stateHandler} name="stateId" isValid={ isValidStateId } isInvalid={ !!errors.stateId } required>
              <option value="-1" hidden >Select State</option>
              {
                statesList
              }
              </Form.Select>
              <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback> 
              <Form.Control.Feedback type="invalid"><b>{ errors.stateId }</b></Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="m-2">
                  <Form.Label>District</Form.Label>
                  <Form.Select name="districtId" onChange={this.districtHandler} isValid={ isValidDistrictId } isInvalid={ !!errors.districtId } required>
                  <option value="-1" hidden >Select District</option>
                  {
                    districtsList
                  }
                  </Form.Select>
              <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback> 
              <Form.Control.Feedback type="invalid"><b>{ errors.districtId }</b></Form.Control.Feedback>
              </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="m-2">
                  <Form.Label>City</Form.Label>
                  <Form.Select name="cityId" onChange={this.cityHandler} isValid={ isValidCitytId } isInvalid={ !!errors.cityId } required>
                  <option value="-1" hidden >Select City</option>
                  {
                    citiesList
                  }
                  </Form.Select>
              <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback> 
              <Form.Control.Feedback type="invalid"><b>{ errors.cityId }</b></Form.Control.Feedback>
              </Form.Group>
          </div>
        </div>
        <div className="row">
                <div className="col-md-4 ">
                <Form.Group className="m-2" controlId="formBasicMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile Number" name="mobile"  
                    onChange={this.mobileHandler} isValid={ isValidMoblie } isInvalid={ !!errors.mobile } required/>
                    <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback> 
                    <Form.Control.Feedback type="invalid"><b>{ errors.mobile }</b></Form.Control.Feedback>
                </Form.Group>
                </div>
                <div className="col-md-4">
                <Form.Group className="m-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="Password" placeholder="Enter Password" name="password" 
                    onChange={this.passwordHandler} isValid={ isValidPassword } isInvalid={ !!errors.password } required/>
                    <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback> 
                    <Form.Control.Feedback type="invalid"><b>{ errors.password }</b></Form.Control.Feedback>
                </Form.Group>

                </div>
                <div className="col-md-4 ">
                <Form.Group className="m-2" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="Password" placeholder="Enter Confirm Password" name="confirmPassword" 
                    onChange={this.confirmPasswordHandler} isValid={ isValidConfirmPassword } isInvalid={ !!errors.confirmPassword } required/>
                    <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback> 
                    <Form.Control.Feedback type="invalid"><b>{ errors.confirmPassword }</b></Form.Control.Feedback>
                </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col ">
                        
                </div>
                <div className="col-md-8 m-2">
               
                    <Button variant="primary" type="submit" >Register </Button>
                 
                    <Link to="/donor/login">
                        <Button className="m-4" variant="danger">Already Registered ?</Button>
                    </Link> 
                </div>
                <div className="col ">
                     
                </div>
            </div>
            </Form>



        
    </div>
    )
  }
}

export default DonorRegister