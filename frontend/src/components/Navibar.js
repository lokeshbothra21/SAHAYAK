
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap"
export const Navibar = () => {
   return (

      <div>

         <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
               <Navbar.Brand href="/">Sahayak</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link href="/">Home</Nav.Link>
                     <Nav.Link href="/about">About</Nav.Link>
                     <NavDropdown title="Looking for Blood" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/bloodAvailablitity">Blood Availability</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/bloodBankAvailablitity">Nearby Blood Bank</NavDropdown.Item>

                     </NavDropdown>
                     <NavDropdown title="Want to Donate" id="basic-nav-dropdown">

                        <NavDropdown.Item href="/donor/donorAppointment">Appointment for Blood Bank</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/faq">Sahayak FAQ</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/about">About Blood Donation</NavDropdown.Item>
                     </NavDropdown>

                     <NavDropdown title="Blood Bank" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/bank/register">Add Your Bloodbank</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/bank/CampSchedule">Blood Donation Camps</NavDropdown.Item>
                     </NavDropdown>
                  </Nav>
                  <Nav className="mr-auto">
                     <NavDropdown title="Login" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/donor/login">Donor</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/login">Blood Bank/Admin</NavDropdown.Item>
                        <NavDropdown.Divider />
                     </NavDropdown>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         {
            
         }

      </div>

   )
}