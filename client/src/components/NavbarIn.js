import React, { Component } from 'react';
import './styles/NavbarIn.css';
// import './styles/NavbarInlaptop.css';

import Logo from '../assets2/logo-sinfondo2.png';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

  class Example extends Component {

    state = {
      isOpen:  false,
    }

    toggle = () => this.setState({isOpen: !this.state.isOpen })

    
    mostrarScroll() {

      let navbar = document.querySelector(".navbar");
      let navbarBrand = document.querySelector(".navbar-brand");

      let tuTitle = document.querySelector(".tu-title");
      let empresaTitle = document.querySelector(".empresa-title");
      let usTitle = document.querySelector(".us-title");

      let llcEnlace = document.querySelector("#llc-enlace");
      let incEnlace = document.querySelector(".inc-enlace");
      let cuentaEnlace = document.querySelector(".cuenta-enlace");
      let contactoEnlace = document.querySelector(".contacto-enlace");

      let serviciosEnlace = document.querySelector(".servicios-enlace");
      
      let scrollTop = document.documentElement.scrollTop;

      const alturaNavbar = navbar.offsetTop;

      let x = window.matchMedia("(max-width: 600px)")

          if(alturaNavbar < scrollTop) {
              navbar.style.backgroundColor = "#ffffff";
              tuTitle.style.color = "#ffffff";
              empresaTitle.style.color = "#ffffff";
              usTitle.style.color = "#ffffff";
            

              tuTitle.style.color = "#808080";
              empresaTitle.style.color = "blue";
              usTitle.style.color = "#ff0000";

              // llcEnlace.style.color = "#000000";
              contactoEnlace.style.color = "#003df0";
              serviciosEnlace.style.color = "#003df0";

              
          } else {
            navbar.style.backgroundColor = "#ffffff";
            // navbarBrand.style.color = "#000000";
            tuTitle.style.color = "gray";
            empresaTitle.style.color = "blue";
            usTitle.style.color = "#ff0000";

            if(x.matches){
              contactoEnlace.style.color = "#003df0";
              serviciosEnlace.style.color = "#003df0";

            }else {
              contactoEnlace.style.color = "#003df0";
              serviciosEnlace.style.color = "#003df0";
            }


          }
        
    }

    componentDidMount() {

      // if(window.location.href = `${cons.url_client}`){

        window.addEventListener("scroll", this.mostrarScroll);
      
      // }


    }


    render() {
      return(

        <div>
        <Navbar light expand="md" className="navbarIn">
          {/* <NavbarBrand href="/">TuempresaUS</NavbarBrand> */}
          <NavbarBrand href="/">
            <div className="contendor-nombre-icono">

              <div className="icono">
                <img src={Logo} alt=""/>
              </div>
              <div className="company-name">

                <span className="tu-title">Tu  </span> 
                {/* <br/> */}
                <span className="empresa-title">Empresa  </span>
                {/* <br/> */}
                <span className="us-title">US</span> 

              </div>

            </div>
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="servicios-enlace">
                  Servicios
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/llc">
                  {/* <NavItem>
                    <NavLink href="/llc" className="llc-enlace">LLC</NavLink>
                  </NavItem> */}
                    LLC
                  </DropdownItem>
                  <DropdownItem href="/inc" className="inc-enlace"> 
                    INC
                  </DropdownItem>
                  {/* <DropdownItem divider /> */}
                  <DropdownItem href="/cuenta" className="cuenta-enlace">
                    Cuenta Bancaria
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* <NavItem>
                <NavLink href="/llc">Blog</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="/contacto" className="contacto-enlace">Contacto</NavLink>
              </NavItem>
  
            </Nav>
          </Collapse>
        </Navbar>
      </div>

      )
    }
  }
 

export default Example;