
import Container from 'react-bootstrap/Container'
export const About = ()=>{
    return(

    <><div>

            <p style={{ color: "#961e1b", marginTop: "70px", marginLeft: "70px", textAlign: "left" }}>About Sahayak</p>
            <hr
                style={{
                    color: "black",
                    height: 5
                }} />
        </div>
        
        <Container style={{ backgroundColor: "lightgrey" }} className="info1">
        		<h1 style={{marginTop:"20px"}}>Sahayak: A Blood and Organ Management System</h1>
        
        </Container>
            
            <Container style={{ backgroundColor: "white" }} className="info1">
					<p className='para' style={{marginTop:"40px",textAlign:"justify"}} >
					Sahayak enforces Drug & Cosmetic Act, National blood policy standards and guidelines ensuring proper collection & donation, effective management 
					and monitoring the quality and quantity of the donated blood. Considering the national roll out, e-Sahayak has been developed with modular and scalable approach with
					For plasma and platelet donation you must have donated whole blood in past two years.</p>
         	</Container>

         <Container style={{ backgroundColor: "lightgray",textAlign:"justify" }} className="info1">
			<div className="row well">
				
				<div className="col-sm-12 col-md-5" >
                       <h4>
							<u>Objectives</u>
						</h4>
					
                    <ul >
						<li >Safe and Adequate Blood Supplies</li>
						<li >Reduced Turnaround Time</li>
						<li >Preventing Wastage of Blood</li>
						<li >Restrict Professional Donors</li>
						<li >Networking of Blood Banks</li>
						<li >Donor Repository</li>
					</ul>
				</div>

			<div className="col-sm-12 col-md-5" >
            		<h4><u>Salient Features</u></h4>
				<ul >
					<li style={{listStyleType:"disc"}}>Web Based Application</li>
					<li style={{listStyleType:"disc"}} >Aadhar Linkage</li>
					<li style={{listStyleType:"disc"}}>Decision Suppport</li>
					<li style={{listStyleType:"disc"}}>Enforces Guidelines</li>
					<li style={{listStyleType:"disc"}}>Dashboard</li>
					<li style={{listStyleType:"disc"}}>Statutory Reports</li>
				</ul>
			</div>
			
			</div>
            </Container>


            <Container style={{ backgroundColor: "white",textAlign:"justify" ,marginTop:"60px"}} className="info1">
			<p  style={{fontSize:"20px"}}>
				<b>Sahayak has six major components for management of the
					blood donation life cycle:</b>
			</p>
			<ul>
				<li >
					The bio metric Donor Management System for identifying, tracking
					and blocking donors based on donor's health, donation history etc.
				</li>
				<li >
					It provides features such as blood grouping, TTI screening,
					antibody screening, component preparation etc. as per the defined
					processes and rules.</li>
				<li >
					A centralized Blood Inventory Management System for keeping track
					of the blood stock across numerous blood banks.</li>
				<li >
					Bio-Medical Waste Management System for disposal of discarded blood
					and other waste generated during this process.</li>
				<li >
					Generation of rare blood group donor registries and the generation
					of regular repeat donors</li>
				
			</ul> 
			</Container>	
            </>
    )
}