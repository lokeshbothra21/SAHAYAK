import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios'
import validator from 'validator'
import commonService from '../../service/common.service'
import bankService from '../../service/bankService';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Navigate } from "react-router-dom";
class Register extends Component {
  constructor(props) {
    super(props)



    this.state = {
      statesdata: [],
      districtsdata: [],
      citiesdata: [],
      bankName:'',
      isValidBBName: '',
      parentHospital:'',
      isValidPHName: '',
      shortName: '',
      isValidShortName: '',
      category: '',
      isValidCategory: '',
      licence: '',
      isValidLicence:'',
      personName : '',
      isValidCPName:'',
      email: '',
      isValidEmail: '',
      contact: '',
      isValidContact: '',
      stateId: '',
      isValidStatetId: '',
      districtId: '',
      isValidDistrictId: '',
      cityId: '',
      isValidCitytId: '',
      facility:'',
      isValidCompFacility:'',
      beds : '',
      isValidNoOfBeds:'',
      website:'',
      isValidWebsite:'',
      password: '',
      isValidPassword: '',
      confirmPassword: '',
      isValidConfirmPassword: '',
      address: '',
      isValidAddress: '',
      redirect:'',
      errors: {
      }
    };


    this.bankNameHandler=this.bankNameHandler.bind(this);
    this.parentHospitalNameHandler=this.parentHospitalNameHandler.bind(this);
    this.shortNameHandler=this.shortNameHandler.bind(this);
    this.categoryHandler=this.categoryHandler.bind(this);
    this.licenceHandler=this.licenceHandler.bind(this);
    this.personNameHandler=this.personNameHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emailHandler = this.emailHandler.bind(this);
    this.stateHandler = this.stateHandler.bind(this);
    this.districtHandler = this.districtHandler.bind(this);
    this.cityHandler = this.cityHandler.bind(this);
    this.compFacilityHandler=this.compFacilityHandler.bind(this);
    this.mobileHandler = this.mobileHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.confirmPasswordHandler = this.confirmPasswordHandler.bind(this);
    this.addressHandler=this.addressHandler.bind(this);
    this.bedsHandler=this.bedsHandler.bind(this);
    this.websiteHandler=this.websiteHandler.bind(this);
  }


  bankNameHandler= event => {
    console.log(event.target.value + 'changeHandler' + event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
      errors: [],
      isValidBBName: ''
    });
    const newErrors = {};
    const parentHospital = event.target.value;
    this.bankNameValidation(newErrors, parentHospital)
  };


  bankNameValidation = (newErrors, bankName) => {
    let flag = true;

    if (bankName === '') {
      newErrors.bankName = ' Cannot be blank!'
      flag = false;
    }
    else {
      if (!(bankName.length >= 3 && bankName.length < 50)) {
        newErrors.bankName = 'Length must be between 3 and 50 character !'
        flag = false;
      }
      if (!(/^[A-Za-z]/.test(bankName))) {
        newErrors.bankName = ' Must start with a letter !'
        flag = false;
      }

    }
    if (flag) {
      this.setState({
        isValidBBName: true
      })
    }
    else {
      this.setState({
        errors: newErrors
      })
    }
  }



  parentHospitalNameHandler= event => {
    console.log(event.target.value + 'changeHandler' + event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
      errors: [],
      isValidPHName: ''
    });
    const newErrors = {};
    const parentHospital = event.target.value;
    this.parentHospitalValidation(newErrors,parentHospital)
  };

  parentHospitalValidation = (newErrors, parentHospital) => {
    let flag = true;

    if (parentHospital === '') {
      newErrors.parentHospital = ' Cannot be blank!'
      flag = false;
    }
    else {
      if (!(parentHospital.length >= 3 && parentHospital.length < 50)) {
        newErrors.parentHospital = 'Length must be between 3 and 50 character !'
        flag = false;
      }
      if (!(/^[A-Za-z]/.test(parentHospital))) {
        newErrors.parentHospital = ' Must start with a letter !'
        flag = false;
      }

    }
    if (flag) {
      this.setState({
        isValidPHName: true
      })
    }
    else {
      this.setState({
        errors: newErrors
      })
    }
  }


  shortNameHandler= event => {
    console.log(event.target.value + 'changeHandler' + event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
      errors: [],
      isValidShortName: ''
    });
    const newErrors = {};
    const shortName = event.target.value;
    this.shortNameValidation(newErrors,shortName)
  };

  shortNameValidation = (newErrors, shortName) => {
    let flag = true;

    if (shortName === '') {
      newErrors.shortName = ' Cannot be blank!'
      flag = false;
    }
    else {
      if (!(shortName.length >= 3 && shortName.length < 15)) {
        newErrors.shortName = 'Length must be between 3 and 15 character !'
        flag = false;
      }
      if (!(/^[A-Za-z]/.test(shortName))) {
        newErrors.shortName = ' Must start with a letter !'
        flag = false;
      }

    }
    if (flag) {
      this.setState({
        isValidShortName: true
      })
    }
    else {
      this.setState({
        errors: newErrors
      })
    }
  }

  categoryHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      errors: [],
      isValidCategory: ''
    });
    const newErrors = {};
    console.log(event.target.value);
    const category = event.target.value;
    
    this.categoryValidation(newErrors, category)

  }

  categoryValidation = (newErrors, category) => {
    let flag = true;
    if (category === '') {
      newErrors.category = ' Cannot be blank!'
      flag = false;
    }

    if (flag) {
      this.setState({
        isValidCategory: true
      })
    }
    else {
      this.setState({
        errors: newErrors
      })
    }
  }

  licenceHandler = event => {
    console.log(event.target.value + 'changeHandler' + event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
      errors: [],
      isValidLicence: ''
    });
    const newErrors = {};
    const licence = event.target.value;
    this.licenceValidation(newErrors, licence)
  };

  licenceValidation = (newErrors, licence) => {

    let flag = true;

    console.log(licence.length);
    if (licence === '') {
      newErrors.licence = ' Cannot be blank!'
      flag = false;
      if ((/^(?=.*[a-zA-Z]).*$/.test(licence))) {
        newErrors.licence = `cannot contain letter !`
        flag = false;
      }
    }
    else {

      if (!(licence > 1111111111 && licence < 9999999999)) {
        newErrors.licence = 'Invalid !'
        flag = false;
      }
      if (!(licence.length === 10)) {
        newErrors.licence = `length=${licence.length}, Length must be 10 digit !`
        flag = false;
      }
    }


    if (flag) {
      this.setState({
        isValidLicence: true
      })
    }
    else {
      this.setState({
        errors: newErrors
      })
    }
  }

  personNameHandler  = event => {
    console.log(event.target.value + 'changeHandler' + event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
      errors: [],
      isValidCPName: ''
    });
    const newErrors = {};
    const personName = event.target.value;
    
    this.personNameValidation(newErrors, personName)
  };

  personNameValidation = (newErrors, personName) => {
    let flag = true;

    if (personName === '') {
      newErrors.personName = ' Cannot be blank!'
      flag = false;
    }
    else {
      if (!(personName.length >= 3 && personName.length < 15)) {
        newErrors.personName = 'Length must be between 3 and 15 character !'
        flag = false;
      }
      if (!(/^[A-Za-z]/.test(personName))) {
        newErrors.personName = ' Must start with a letter !'
        flag = false;
      }

    }
    if (flag) {
      this.setState({
        isValidCPName: true
      })
    }
    else {
      this.setState({
        errors: newErrors
      })
    }
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


  mobileHandler = event => {
    console.log(event.target.value + 'changeHandler' + event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
      errors: [],
      isValidContact: ''
    });
    const newErrors = {};
    const mobile = event.target.value;
    this.mobileValidation(newErrors, mobile)
  };


  mobileValidation = (newErrors, mobile) => {

    let flag = true;

    console.log(mobile.length);
   
      if (mobile === '') {
       newErrors.contact = ' Cannot be blank!'
       flag = false;
       if (!(/^\d{10}$/.test(mobile))) {
        newErrors.contact = 'Invalid Number !'
        flag = false;
      
     }
    }
     else
      {
       if (!(mobile.length === 10)) {
          newErrors.contact = `length=${mobile.length}, Length must be 10 digit !`
          flag = false;
        }

    }
  
     
    


    if (flag) {
      this.setState({
        isValidContact: true
      })
    }
    else {
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
        errors: newErrors,
        isValidConfirmPassword:''
     })
     
    }
  }

  compFacilityHandler  = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      errors: [],
      isValidCompFacility :''
    });
    const newErrors = {};
    console.log(event.target.value);
    const facility = event.target.value;
    let flag = true;
    if (facility === '') {
      newErrors.facility = ' Cannot be blank!'
      flag = false;
    }

    if (flag) {
      this.setState({
        isValidCompFacility: true
      })
    }
    else {
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

  addressHandler  = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      errors: [],
      isValidAddress: ''
    });
    const newErrors = {};
    console.log(event.target.value);
    const address = event.target.value;

    let flag = true;
    if (address === '') {
      newErrors.address = ' Cannot be blank!'
      flag = false;
    }

     
    if(flag){
      this.setState({
        isValidAddress: true
     })
    }
    else{
      this.setState({
        errors: newErrors
     })
    }

  }


  websiteHandler  = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      errors: [],
      isValidWebsite: ''
    });
    const newErrors = {};
    console.log(event.target.value);
    const website = event.target.value;
    let flag = true;
    if (website === '') {
      newErrors.website = ' Cannot be blank!'
      flag = false;
    }

     
    if(flag){
      this.setState({
        isValidWebsite: true
     })
    }
    else{
      this.setState({
        errors: newErrors
     })
    }
    

  }

  bedsHandler= (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      errors: [],
      isValidNoOfBeds: ''
    });
    const newErrors = {};
    console.log(event.target.value);
    const beds = event.target.value;
    let flag = true;
    if (beds === '') {
      newErrors.beds = ' Cannot be blank!'
      flag = false;
    }

     
    if(flag){
      this.setState({
        isValidNoOfBeds: true
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
    const {bankName, parentHospital, shortName,  category, licence, personName, email, stateId, 
      districtId, cityId, facility, password, confirmPassword, contact, address, beds} = this.state
      console.log(this.state);
    this.bankNameValidation(newErrors, bankName)

     this.parentHospitalValidation(newErrors,parentHospital)

    this.shortNameValidation(newErrors,shortName)
      //console.log(category=== '');
    //this.categoryValidation(newErrors, category)
    if (category === '') {
      newErrors.category = ' Cannot be blank!'
    }

     this.personNameValidation(newErrors, personName)

     //this.licenceValidation(newErrors, licence)
     if (licence === '') {
      newErrors.licence = ' Cannot be blank!'
    }
    else{
      if (!(licence.length === 10)) {
        newErrors.licence = `length=${licence.length}, Length must be 10 digit !`
      }
     else{
       bankService.getVerifyLicence(licence)
     .then(response=>{
       console.log("componentDidMount");
      console.log(response);
      //this.setState({citiesdata:response.data})
      console.log(response.data);
      if(response.data){
        console.log("inside");
          newErrors.licence = 'Number Already Registered!'
          this.setState({
           isValidLicence: false
        })
        }
      })
      .catch(error=>{
         console.log(error);
      })

     }
    }



     if (email === '') {
       newErrors.email = ' Cannot be blank!'

     }
     else{
      if (!(validator.isEmail(email))) {
        newErrors.email = ' Invalid Email!'
      }
      else{
        bankService.getVerifyEmail(email)
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


     if (contact === '') {
      newErrors.contact = ' Cannot be blank!'
    }
    else{
      if (!(contact.length === 10)) {
        newErrors.contact = `length=${contact.length}, Length must be 10 digit !`
      }
     else{
       bankService.getVerifyMobile(contact)
     .then(response=>{
       console.log("componentDidMount");
      console.log(response);
      //this.setState({citiesdata:response.data})
      console.log(response.data);
      if(response.data){
        console.log("inside");
          newErrors.contact = 'Number Already Registered!'
          this.setState({
           isValidContact: false
        })
        }
      })
      .catch(error=>{
         console.log(error);
      })

     }
    }
       


      //this.mobileValidation(newErrors, contact)

     if (stateId === '') {
      newErrors.stateId = ' Cannot be blank!'
     }
     

    if (districtId === '') {
      newErrors.districtId = ' Cannot be blank!'
    }
   

    if (cityId == '') {
      newErrors.cityId = ' Cannot be blank!'
    }
    
    console.log(facility);
    if (facility === '') {
      newErrors.facility = ' Cannot be blank!'
    }

    if (beds === '') {
      newErrors.beds = ' Cannot be blank!'
    }
   
    

     this.passwordValidation(newErrors, password)

    this.confirmPasswordValidation(newErrors, confirmPassword)



    if (address === '') {
      newErrors.address = ' Cannot be blank!'
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
      //AddDonorDonor(firstName=null, lastName=null, birthDate=null, gender=null, email=null, stateId=0, districtId=0, cityId=0, mobile=0, password=null, confirmPassword=null)
      const  { bankName, parentHospital, shortName, category, licence, personName, email, contact, cityId,
        facility, beds, website, password, address} = this.state;
      console.log(cityId);
      const city={
        "id":cityId
      }
      const status='PENDING';
      const bank = { bankName, parentHospital, shortName, category, licence, personName, email, 
        contact, city, facility, beds, website, password, address,status }
      console.log(bank);
       axios.post('http://localhost:9090/bank/register', bank)
            .then(response=>{
             console.log("componentDidMount");
            console.log(response);
            
            //this.setState({citiesdata:response.data})
            console.log(response.data);
            toast.success("Register Successfully");
            this.setState({ redirect: "/login" });
            })
            .catch(error=>{
               console.log(error);
            })

    }
  }

  

  componentDidMount() {
    if (this.state.statesdata.length === 0) {

      //http://localhost:9090/commondata/cities/39
      //axios.get('http://localhost:9090/commondata/allstates')
      commonService.getAllStates()
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


  render() {


    const {
      isValidBBName,  isValidShortName, isValidPHName, isValidCategory, isValidLicence, isValidCompFacility, isValidNoOfBeds,
      isValidCPName,  isValidContact,  isValidEmail,  isValidStateId,  isValidDistrictId,  isValidCitytId,
       isValidPassword, isValidConfirmPassword, isValidWebsite,  isValidAddress, statesdata, districtsdata, citiesdata, errors  } = this.state;

    
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
            <h1>Blood Bank Registration</h1>
          </div>
          <div className="col ">
          </div>
        </div>
        <Form noValidate onSubmit={this.handleSubmit} autoComplete="off">
          <div className="row">
            
            <div className="col-md-6">
              <Form.Group className="m-2" controlId="formBasicBloodBank">
                <Form.Label>Blood Bank Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Blood Bank Name"
                  name='bankName' onChange={this.bankNameHandler}
                  isValid={isValidBBName} isInvalid={!!errors.bankName} required />
                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid"><b>{errors.bankName}</b></Form.Control.Feedback>
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group className="m-2" controlId="formBasicParentHospitalName">
                <Form.Label>Parent Hospital Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Parent Hospital" name="parentHospital"
                  onChange={this.parentHospitalNameHandler} isValid={isValidPHName} isInvalid={!!errors.parentHospital} required />
                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid"><b>{errors.parentHospital}</b></Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <Form.Group className="m-2" controlId="formBasicShortName">
                <Form.Label>Short Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Short Name"
                  name='shortName' onChange={this.shortNameHandler}
                  isValid={isValidShortName} isInvalid={!!errors.shortName} required />
                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid"><b>{errors.shortName}</b></Form.Control.Feedback>
              </Form.Group>
            </div>

            <div className="col-md-4 ">
              <Form.Group className='m-2' controlId="formGridCategory" >
                <Form.Label >Category</Form.Label>
                <Form.Select className="col" name="category" onChange={this.categoryHandler}
                  isValid={isValidCategory} isInvalid={!!errors.category}  required>
                  <option value="-1" hidden>Choose Value</option>
                  <option value="GOVT">Govt</option>
                  <option value="RED_CROSS">Red Cross</option>
                  <option value="CHARITABLE">Charitable/Vol</option>
                  <option value="PRIVATE">Private</option>

                </Form.Select>
                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid"><b>{errors.category}</b></Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-4 ">
              <Form.Group className="m-2" controlId="formBasicLicence">
                <Form.Label>Licence No.</Form.Label>
                <Form.Control type="number" placeholder="Enter Licence No." name="licence"
                  onChange={this.licenceHandler} isValid={isValidLicence} isInvalid={!!errors.licence} required />
                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid"><b>{errors.licence}</b></Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>
          <div className="row">
          <div className="col-md-4">
              <Form.Group className="m-2" controlId="formBasicPersonName">
                <Form.Label>Contact Person Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Contact Person Name"
                  name='personName' onChange={this.personNameHandler}
                  isValid={isValidCPName} isInvalid={!!errors.personName} required />
                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid"><b>{errors.personName}</b></Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-4 ">
              <Form.Group className="m-2" controlId="formBasicEmail">
                <Form.Label>E-Mail</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" name="email" onChange={this.emailHandler}
                  isValid={isValidEmail} isInvalid={!!errors.email} required />
                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid"><b>{errors.email}</b></Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-4 ">
              <Form.Group className="m-2" controlId="formBasicContact">
                <Form.Label>Contact No.</Form.Label>
                <Form.Control type="number" placeholder="Enter Contact Number" name="contact"
                  onChange={this.mobileHandler} isValid={isValidContact} isInvalid={!!errors.contact} required />
                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid"><b>{errors.contact}</b></Form.Control.Feedback>
              </Form.Group>
            </div> 
          </div>
          <div className="row">
            <div className="col-md-4">
              <Form.Group className="m-2">
                <Form.Label>State</Form.Label>
                <Form.Select onChange={this.stateHandler} name="stateId" isValid={isValidStateId} isInvalid={!!errors.stateId} required>
                  <option value="-1" hidden >Select State</option>
                  {
                    statesList
                  }
                </Form.Select>
                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid"><b>{errors.stateId}</b></Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group className="m-2">
                <Form.Label>District</Form.Label>
                <Form.Select name="districtId" onChange={this.districtHandler} isValid={isValidDistrictId} isInvalid={!!errors.districtId} required>
                  <option value="-1" hidden >Select District</option>
                  {
                    districtsList
                  }
                </Form.Select>
                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid"><b>{errors.districtId}</b></Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group className="m-2">
                <Form.Label>City</Form.Label>
                <Form.Select name="cityId" onChange={this.cityHandler} isValid={isValidCitytId} isInvalid={!!errors.cityId} required>
                  <option value="-1" hidden >Select City</option>
                  {
                    citiesList
                  }
                </Form.Select>
                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid"><b>{errors.cityId}</b></Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>
          <div className="row">
          <div className="col-md-4 ">
              <Form.Group className='m-2' controlId="formGridComponentFacility" >
                <Form.Label >Component Facility</Form.Label>
                <Form.Select className="col" name="facility" onChange={this.compFacilityHandler}
                  isValid={isValidCompFacility} isInvalid={!!errors.facility} required>
                  <option value="-1" hidden>Choose Value</option>
                  <option value="YES">Yes</option>
                  <option value="NO">No</option>
                </Form.Select>
                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid"><b>{errors.facility}</b></Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-4 ">
              <Form.Group className="m-2" controlId="formBasicMobile">
                <Form.Label>No of Bed Hospital</Form.Label>
                <Form.Control type="number" placeholder="Enter No of Beds" name="beds" onChange={this.bedsHandler}
                   isValid={isValidNoOfBeds} isInvalid={!!errors.beds} required />
                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid"><b>{errors.beds}</b></Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group className="m-2" controlId="formBasicFirstName">
                <Form.Label>Website</Form.Label>
                <Form.Control type="text" placeholder="Enter website"
                  name='website' onChange={this.websiteHandler}
                  isValid={isValidWebsite} isInvalid={!!errors.website} required />
                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid"><b>{errors.website}</b></Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>
          <div className="row">
            
            <div className="col-md-4">
              <Form.Group className="m-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="Password" placeholder="Enter Password" name="password"
                  onChange={this.passwordHandler} isValid={isValidPassword} isInvalid={!!errors.password} required />
                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid"><b>{errors.password}</b></Form.Control.Feedback>
              </Form.Group>

            </div>
            <div className="col-md-4 ">
              <Form.Group className="m-2" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="Password" placeholder="Enter Confirm Password" name="confirmPassword"
                  onChange={this.confirmPasswordHandler} isValid={isValidConfirmPassword} isInvalid={!!errors.confirmPassword} required />
                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid"><b>{errors.confirmPassword}</b></Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-4 ">
            <Form.Group className="m-2" controlId="exampleForm.ControlTextarea">
              <Form.Label>Address</Form.Label>
              <Form.Control type="textarea" rows={1.5} name="address"  placeholder="Enter  Address" 
              onChange={this.addressHandler} isValid={isValidAddress} isInvalid={!!errors.address} required/>
              <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
              <Form.Control.Feedback type="invalid"><b>{errors.address}</b></Form.Control.Feedback>
            </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col ">

            </div>
            <div className="col-md-8 m-2">
              <Button variant="primary" type="submit" >Register </Button>

              <Link to="/bank/login">
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

export default Register