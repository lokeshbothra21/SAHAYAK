
import React, { Component } from 'react'
import axios from 'axios'
import { Form,  Button} from 'react-bootstrap'
import '../components/css/common.css'
import commonService from '../service/common.service'
import bankService from '../service/bankService'
import { PaginationTable } from './admin/table/PaginationTable'
import stockService from '../service/stockService'

class BloodBankAvailability extends Component {
  constructor(props) {
    super(props)

    this.state = {
      MOCK_DATA:[],
      statesdata: [],
      districtsdata: [],
      citiesdata: [],
      stateId: '',
      isValidStatetId: '',
      districtId: '',
      isValidDistrictId: '',
      cityId: '',
      isValidCitytId: '',
      errors: {
      }
    }
    this.stateHandler = this.stateHandler.bind(this);
    this.districtHandler = this.districtHandler.bind(this);
    this.cityHandler = this.cityHandler.bind(this);


  }


  componentDidMount() {
    if (this.state.statesdata.length === 0) {
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
      if(stateId>0){
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
      if(districtId=== "-2"){

      }
      else{
        newErrors.districtId = ' Cannot be blank!'
        flag=false;

      }
      
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
      else if(districtId=== "-2"){

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
      if(cityId=== "-2"){

      }
      else{
        newErrors.cityId = ' Cannot be blank!'
      flag=false;

      }
      
    }
    else{
      if(cityId=== "-2"){

      }
      else if(cityId<0){
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

  
  findFormErrors = () => {
    const newErrors = {};
    const { stateId, districtId, cityId} = this.state
      console.log(this.state);
    
     if (stateId === '') {
      newErrors.stateId = ' Cannot be blank!'
     }
     

    if (districtId === '') {
      newErrors.districtId = ' Cannot be blank!'
    }
   

    if (cityId == '') {
      newErrors.cityId = ' Cannot be blank!'
    }
   alert(stateId+' '+districtId+' '+cityId);
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
      
      const  {  cityId, stateId, districtId} = this.state;
      console.log(stateId, districtId, cityId);
      
        if(stateId==='-2'){
          stockService.getAllBloodStock()
          .then((response) => {
              console.log("componentDidMount");
              console.log(response.data);
              this.setState({ MOCK_DATA: response.data });
              //console.log(this.state.statesdata);
          })
          .catch((error) => {
              console.log(error);
          });
    
        }
        else{
          if(districtId==='-2'){
            console.log("districtId==='-2'");
            stockService.getAllBloodStockByState(stateId)
            .then((response) => {
                console.log("componentDidMount");
                console.log(response.data);
                this.setState({ MOCK_DATA: response.data });
                //console.log(this.state.statesdata);
            })
            .catch((error) => {
                console.log(error);
            });
      
          }
          else{
            if(cityId==='-2'){
              stockService.getAllBloodStockByDistrict(districtId)
              .then((response) => {
                  console.log("componentDidMount");
                  console.log(response.data);
                  this.setState({ MOCK_DATA: response.data });
                  //console.log(this.state.statesdata);
              })
              .catch((error) => {
                  console.log(error);
              });
        
            }
            else{
              stockService.getAllBloodStockByCity(cityId)
              .then((response) => {
                  console.log("componentDidMount");
                  console.log(response.data);
                  this.setState({ MOCK_DATA: response.data });
                  //console.log(this.state.statesdata);
              })
              .catch((error) => {
                  console.log(error);
              });
              
            }
            
          }

        }

      

    }

    
        
        
     
      console.log("out");


  }








  render() {
    const {MOCK_DATA} =this.state

    const COLUMNS=[
    
      {
        Header:'Blood Bank Name',
        Footer:'Blood Bank Name',
        accessor:'bank',
        Cell: ({ cell }) => {
                  console.log(cell.value.bankName)
                  return cell.value.bankName
        } 
    },
      {
          Header:' A+',
          Footer:' A+',
          accessor:'apositive'
      },
      {
          Header:' A-',
          Footer:' A-',
          accessor:'anegative'
      },
      {
          Header:' B+',
          Footer:' B+',
          accessor:'bpositive'
      },
      {
          Header:' B-',
          Footer:' B-',
          accessor:'bnegative'
      },
      {
          Header:' AB+',
          Footer:' AB+',
          accessor:'abPositive'
      },
      {
          Header:' AB-',
          Footer:' AB-',
          accessor:'abNegative',
        
      },   
          ]


    const {
        isValidStateId,  isValidDistrictId,  isValidCitytId,
        statesdata, districtsdata, citiesdata, errors  } = this.state;
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


    let citiesList = citiesdata.length > 0
      && citiesdata.map((item, i) => {
        return (

          <option key={i} value={item.id}>{item.name}</option>
        )
      }, this);






    return (
      <div>
        <div className=" bg-dark text-white text-center mt-4">
        <div className="container bg-dark text-white text-center mt-4">
          <div className="row">
            <div className="col ">

            </div>
            <div className="col-10 m-3">
              <h1>Blood Availability</h1>
            </div>
            <div className="col ">

            </div>
          </div>
          <Form noValidate onSubmit={this.handleSubmit} autoComplete="off">
          <div className="row">
            <div className="col-md-3">
              <Form.Group className="m-2">
                <Form.Label>State</Form.Label>
                <Form.Select onChange={this.stateHandler} name="stateId" isValid={isValidStateId} isInvalid={!!errors.stateId} required>
                  <option value="-1" hidden >Select State</option>
                  <option value="-2">All</option>
                  {
                    statesList
                  }
                </Form.Select>
                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid"><b>{errors.stateId}</b></Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group className="m-2">
                <Form.Label>District</Form.Label>
                <Form.Select name="districtId" onChange={this.districtHandler} isValid={isValidDistrictId} isInvalid={!!errors.districtId} required>
                  <option value="-1" hidden >Select District</option>
                  <option value="-2">All</option>
                  {
                    districtsList
                  }
                </Form.Select>
                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid"><b>{errors.districtId}</b></Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group className="m-2">
                <Form.Label>City</Form.Label>
                <Form.Select name="cityId" onChange={this.cityHandler} isValid={isValidCitytId} isInvalid={!!errors.cityId} required>
                  <option value="-1" hidden >Select City</option>
                  <option value="-2">All</option>
                  {
                    citiesList
                  }
                </Form.Select>
                <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid"><b>{errors.cityId}</b></Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-3">
                <Form.Group className='m-2' controlId="formGridBloodGroup" >
                <Form.Label>Blood Group</Form.Label>
                  <Form.Select  name="bloodId">
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
          <div className="row">
                    <PaginationTable
                     MOCK_DATA={MOCK_DATA} 
                     COLUMNS={COLUMNS}/>
         </div>
        </div>
        

      </div>
    )
  }
}

export default BloodBankAvailability