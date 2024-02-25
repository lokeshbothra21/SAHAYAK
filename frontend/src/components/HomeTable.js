
import React, { Component } from 'react'
import img2 from"../images/blood.PNG";
export class HomeTable extends Component {
  render() {
    const bStyle={
        color: "#961e1b", fontWeight: "bold" ,textAlign:"center"
      }
    return (
      <div className=" text-center col-12">
          <div className=" col-12">
          <div className="row">
            <div className="col ">
                <img  src={img2} alt="blood" />
            </div>
            <div className="col">
            <table className="table table-hover table-dark table-bordered text-center"  >
                <tbody>
                    <tr>
                        <th colSpan='3' style={{ backgroundColor:"red" ,color:"white" }}  >Compatible Blood Type Donors</th>
                    </tr>
                    <tr>
                        <td ><b>Blood Type</b></td>
                        <td ><b>Donate Blood To</b></td>
                        <td ><b>Receive Blood From</b></td>
                    </tr>
                    <tr>
                        <td  style={bStyle}>A+</td>
                        <td >A+ AB+</td>
                        <td>A+ A- O+ O-</td>
                    </tr>
                    <tr>
                        <td style={bStyle}>O+</td>
                        <td>O+ A+ B+ AB+</td>
                        <td>O+ O-</td>
                    </tr>
                    <tr>
                        <td style={bStyle}>B+</td>
                        <td>B+ AB+</td>
                        <td>B+ B- O+ O-</td>
                    </tr>
                    <tr>
                        <td style={bStyle}>AB+</td>
                        <td>AB+</td>
                        <td>Everyone</td>
                    </tr>
                    <tr>
                        <td style={bStyle}>A-</td>
                        <td>A+ A- AB+ AB-</td>
                        <td>A- O-</td>
                    </tr>
                    <tr>
                        <td style={bStyle}>O-</td>
                        <td>Everyone</td>
                        <td>O-</td>
                    </tr>
                    <tr>
                        <td style={bStyle}>B-</td>
                        <td>B+ B- AB+ AB-</td>
                        <td>B- O-</td>
                    </tr>
                    <tr>
                        <td style={bStyle}>AB-</td>
                        <td>AB+ AB-</td>
                        <td>AB- A- B- O-</td>
                    </tr>
                </tbody>
                </table>
            </div>
           
            </div>
          </div>
      </div>
    )
  }
}

export default HomeTable