import React, { Component } from 'react';
import './styles/Home.css';
import './styles/Homedesktop.css';
import Navbar from '../components/Navbar';
import Success from '../components/success';
import Imagen_1 from '../assets/img/home-1.svg';
import Building from '../assets2/building3.svg';
import Cronometro from '../assets2/imagen-14.svg';
import PASAPORTE from '../assets2/imagen-pass.svg';
import mundo from '../assets2/mundo.svg';
import home2 from '../assets/img/home-2.svg';
import libertad2 from '../assets2/usa.svg';
import casaatenas from '../assets2/bank-account.svg';
import carrito from '../assets2/marketplace.svg';
import visa1 from '../assets2/gateway.svg';
import home3 from '../assets/img/home-3.svg';
import dinero from '../assets2/office.svg';
import portafolio from '../assets2/customer.svg';
import dinero2 from '../assets2/team.svg';
import edificiomorado from '../assets2/office2.svg';
import selfiemorado from '../assets2/imagen-pass.svg';
import banderamorada from '../assets2/receive-mail.svg';
import casatarjeta from '../assets/img/casa-tarjeta.svg';
import logoportada from '../assets2/portada-logo3.png';
import { sendEmail } from '../api/peticiones';
import * as cons from '../api/constants';
import logoWhatsapp from '../assets/icons/logo-whatsapp.svg';

import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            success: false,
            form: {
                nombre: '',
                email: '',
                telefono: '',
                mensaje: '',

            }
         };
    }

    register = async (e) => {
        e.preventDefault()
        const { nombre, email, telefono, mensaje } = this.state.form;
        const type = "register";
        // console.log(this.state.form.flexRadioDefault2)
     

        const f = new FormData();
        f.append("nombre", nombre);
        f.append("email", email);
        f.append("telefono", telefono);
        f.append("mensaje", mensaje);

        f.append("type", type);

        const boton = document.getElementById("login_b");
        boton.disabled = true;

        this.setState({
            success: true
        })
        
        
        const res_email= await sendEmail(f);
        console.log(res_email);
        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("mensaje").value = "";

        this.setState({
            success: true
        })

    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }


    render() {
        return (
            <React.Fragment>

                <Navbar/>
               <div className="container-fluid main " id="Home">

                <div className="container-icon-ws">

                    <a href="https://wa.link/w15z64" className="btn-wsp" target="_blank">
                        <img src={logoWhatsapp} alt="logo-ws" className="logo-ws"/>
                    </a>
                </div>

               

                   <div className="row animate__animated animate__fadeIn">
                       <div className="col-12 col-md-8 contenedor-title">
                           <h1><span className="title-parte-1">CREA TU EMPRESA EN</span> 
           
                           <br/>
                           <span className="title-parte-2">ESTADOS UNIDOS</span></h1>
                       </div>
                       <div className="col-12 col-md-4">

                            {/* <img src={logoportada} alt=""/> */}
                       </div>
                   </div>

                   <div className="row animate__animated animate__fadeIn">

                        <div className="col-12 col-md-12 contenedor-imagen-portada">

                            {/* <img src={Imagen_1} alt="" className="imagen-portada"/> */}
                            
                        </div>

                    </div>

                    <div className="row animate__animated animate__fadeIn">
                        <div className="col-10 col-md-12 contenedor-subtitle-portada">
                            <h2 className="subtitle-portada">

                            Desde cualquier parte del  mundo sin tener que viajar.
                            
                            </h2>
                        </div>
                    </div>

                    
                    <div className="col-12 col-md-7">

                        <div className="container-textos">

                        
                            <div className="cuadros-container" >

                                <a href="#planes" className="cuadros-enlace" >
                                    <div className="cuadros">


                                        <div className="building-description">
                                                <h2>Plan Básico</h2>
                                                {/* <h3>Sociedad</h3> */}

                                                <h4>Cuenta online o en PR</h4>

                                        </div>

                                        <div className="building-image">
                                            {/* <img src= {Building} alt="" className="imagen-building"/> */}

                                        </div>

                                    </div>

                                </a>

                                <a href="#planes" className="cuadros-enlace" >
                                    <div className="cuadros">


                                        <div className="building-description">
                                                <h2>Plan Plus</h2>
                                                {/* <h3>Sociedad</h3> */}

                                                <h4>Cuenta en banco tradicional en US con Zelle Jurídico</h4>

                                        </div>

                                        <div className="building-image">
                                            {/* <img src= {Building} alt="" className="imagen-building"/> */}

                                        </div>

                                    </div>

                                </a>

                                <a href="#planes" className="cuadros-enlace" >

                                    <div className="cuadros">

                                        <div className="building-description">
                                            <h2>Plan Corporativo</h2>
                                            {/* <h3>Incorporación</h3> */}
                                            <h4>2 cuentas en banco tradicional con Zelle Jurídico</h4>

                                        </div>

                                        <div className="building-image">
                                            
                                        </div>
                                    </div>
                                    
                                </a>

                            </div>                    

   
                        </div>

                    </div>


                   
               </div>

                <div className="container second-container">

                    <div className="row">

                       <div className="col-12 col-md-4 contenedor-ventajas">

                            <img src={Cronometro} alt="Tiempo record de entrega" className="imagen-ventajas"/>

                            <h2 className="encabezado">EN 10-20  DÍAS HÁBILES</h2>

                            <p className="description">Adquiere los certificados de tu empresa en un lapso de 10 a 20 días hábiles.</p>

                       </div>

                       <div className="col-12 col-md-4 contenedor-ventajas">
                            <img src={PASAPORTE} alt="Solo necesitas pasaporte" className="imagen-ventajas"/>

                            <h2 className="encabezado">SOLO CON TU PASAPORTE</h2>

                            <p className="description">Nuestro único requerimiento para iniciar el trámite es una fotografía de tu pasaporte. 
                            </p>

                       </div>

                       <div className="col-12 col-md-4 contenedor-ventajas">

                            <img src={mundo} alt="Desde cualquier parte del mundo" className="imagen-ventajas"/>

                            <h2 className="encabezado">DESDE CUALQUIER PAÍS</h2>

                            <p className="description">Ya que este proceso es a distancia no es necesario que estés en USA para empezar la apertura de tu empresa.</p>                           
                           
                       </div>

                </div>

                    <div className="row contenedor-ventajas-2">

                        <div className="col-12 col-md-6">

                            <img src={home2} alt="Crea tu empresa"/>

                        </div>

                        <div className="col-12 col-md-6">
                            <h1 className="title-second">FORMA PARTE DEL MERCADO MÁS IMPORTANTE DEL MUNDO</h1>

                            <div className="contenedor-ventajas-21">

                                    <div className="container-imagen-ventajas-22">

                                        <img src={libertad2} alt="estatua de la libertad" className="small-img"/>
                                    </div>


                                        <h2 className="description">Lleva tu propuesta de valor a todas partes de Estados Unidos</h2>
        
                            </div>

                            <p className="details">¿Quieres posicionarte en el mercado estadounidense? Empieza a abrirte campo en los 50 estados americanos y explota todo tu potencial con tu empresa local. </p>

                            <div className="contenedor-ventajas-21">

                                <div className="container-imagen-ventajas-22">
                                    <img src={casaatenas} alt="Cuenta bancaria en EEUU" className="small-img"/>

                                </div>

                                <h2 className="description">Facilita el envío y recepción de pagos en USD con una cuenta bancaria en EEUU</h2>
                            </div>

                            <p className="details">Tendrás el beneficio de apertura directa con un banco americano más una tarjeta debito VISA sin costo de regularidad, esto te ayudará a concretar negocios de una manera más eficiente con clientes y proveedores.</p>  

                        </div>

                    </div>
                        {/* Otro contenedor hermano */}


                </div>

                <div className="container-fluid">


                    <div className="row ventajas-emprende">

                        <div className="col-12 col-md-6">
                            <h1 className="title-second">EMPRENDE UN NEGOCIO DIGITAL DE ALCANCE GLOBAL</h1>
                                                

                            <div className="contenedor-ventajas-21">

                                        <div className="container-imagen-ventajas-22">
                                            <img src={carrito} alt="estatua de la libertad" className="small-img"/>

                                        </div>


                                        {/* <h2 className="description">Comienza a vender en marketplaces internacionales</h2> */}
        
                                        <p className="details">Sin restricciones para vender en páginas como Amazon, al abrir tu empresa en Estados Unidos podrás registrarte y vender en cualquier marketplace internacional sin ninguna limitación.</p>
                            </div>


                            <div className="contenedor-ventajas-21">

                                <div className="container-imagen-ventajas-22">

                                    <img src={visa1} alt="Cuenta bancaria en EEUU" className="small-img"/>
                                </div>

                                <p className="details">Con una LLC o Inc. podrás acceder a cualquier pasarela de pago como Stripe sin ningún problema. Aumenta tus ventas recibiendo pagos desde cualquier parte del mundo. </p>  

                            </div>


                        </div>


                        <div className="col-12 col-md-6">

                        <img src={home3} alt="Crea tu empresa"/>

                        </div>


                    </div>


                    <div className="row ventajas-mas"> 
                    {/* Tercer contenedor hermano */}

                    <div className="col-12">
                            <h1 className="title-second">Y AÚN HAY MÁS</h1>

                    </div>

                            <div className="contenedor-ventajas-21-main col-12">


                                <div className="contenedor-ventajas-21 contendor-aun-mas">

                                            <div className="container-imagen-ventajas-22">
                                                <img src={dinero} alt="estatua de la libertad" className="small-img"/>

                                            </div>


                                            {/* <h2 className="description">Emprende sin arriesgar tu patrimonio personal</h2> */}
            
                                    <p className="details">¿Problemas al contratar servicios en empresas americanas? Obtén una identificación fiscal del país. Al registrar una empresa en Estados Unidos obtendrás un EIN que podrás usar para identificar tu entidad comercial.</p>
                                </div>



                            </div>


                            <div className="contenedor-ventajas-21-main col-12">

                                <div className="contenedor-ventajas-21 contendor-aun-mas">

                                    <div className="container-imagen-ventajas-22">
                                        <img src={portafolio} alt="Cuenta bancaria en EEUU" className="small-img"/>

                                    </div>

                                    {/* <h2 className="description">Trabaja con proveedores y empresas estadounidenses</h2> */}

                                <p className="details">Al registrar una LLC o Inc. quedas eximido de cualquier responsabilidad jurídica y tu patrimonio personal permanece resguardado.

                                </p>  
                                </div>



                            </div>
                                            

                        <div className="contenedor-ventajas-21-main col-12">

                            <div className="contenedor-ventajas-21 contendor-aun-mas">

                                    <div className="container-imagen-ventajas-22">
                                        <img src={dinero2} alt="Cuenta bancaria en EEUU" className="small-img"/>

                                    </div>

                                
                                <p className="details">Define formalmente derechos y deberes para cada parte de tu empresa escogiendo la estructura que más se adapte a tu proyecto: LLC o Inc.</p>  
                            </div>

                        </div>

                    </div>

                    <div className="row ventajas-iconos">

                        <div className="col-12">

                            <h1 className="title-second">EL PROCESO A SEGUIR</h1>

                        </div>

                    <div className="col-12 col-md-4 contenedor-ventajas">


                        <img src={edificiomorado} alt="Tiempo record de entrega" className="imagen-ventajas"/>


                        <h3 className="description">Regístrate indicándonos las
                                características de la LLC o Inc. que
                                quieres formar</h3>

                    </div>

                    <div className="col-12 col-md-4 contenedor-ventajas">


                        <img src={selfiemorado} alt="Tiempo record de entrega" className="imagen-ventajas"/>


                        <h3 className="description">Envíanos una fotografía del
                        pasaporte vigente de cada
                        propietario</h3>

                    </div>

                    <div className="col-12 col-md-4 contenedor-ventajas">


                        <img src={banderamorada} alt="Tiempo record de entrega" className="imagen-ventajas"/>


                        <h3 className="description">Recibe digitalmente la documentación
                        de tu empresa mediante nuestra
                        plataforma en 10-20 días hábiles</h3>

                    </div>


                </div>

  

                    <div className="row type-plans" id="planes">
                        <div className="title-type-company">
                            <h1>TIPO DE EMPRESA</h1>
                        
                        </div>

                        <div className="col-10 col-md-3 type-container" id="planes-1">
                            <h2>PLAN BÁSICO</h2>
                            <p className="subtitle-type">Registro empresa.</p><br />
                            <p className="subtitle-type">Asignación de dirección.</p>
                            <p className="subtitle-type">Número telefónico en EEUU.</p>
                            <p className="subtitle-type">Obtención EIN.</p>
                            <p className="subtitle-type">Banco online.</p>

                            <p><span className="symbol-type">US$</span><span className="price-type">800</span></p>

                            <div className="container-mas-informacion">
                                <a href="/llc">MÁS INFORMACION</a>

                            </div>
                        </div>



                        <div className="col-10 col-md-3 type-container" id="planes-2">

                            <h2>PLAN PLUS</h2>
                            <h3>CON GERENTE</h3>
                            <p className="subtitle-type">Registro empresa.</p><br />
                            <p className="subtitle-type">Asignación de dirección.</p>
                            <p className="subtitle-type">Número telefónico en EEUU.</p>
                            <p className="subtitle-type">Obtención EIN.</p>
                            <p className="subtitle-type">Gestión cuenta bancaria en Estados Unidos (con Zelle). </p>

                            <p><span className="symbol-type">US$</span><span className="price-type">2,500</span></p>

                            <div className="container-mas-informacion">
                            <a href="/llc">MÁS INFORMACION</a>

                            </div>
                        </div>

                        <div className="col-10 col-md-3 type-container" id="planes-3">
                            <h2>PLAN CORPORATIVO</h2>
                            <h3>CON GERENTE</h3>
                            <p className="subtitle-type">Registro empresa.</p><br />
                            <p className="subtitle-type">Asignación de dirección.</p>
                            <p className="subtitle-type">Número telefónico en EEUU.</p>
                            <p className="subtitle-type">Obtención EIN.</p>
                            <p className="subtitle-type">Gestión de apertura de cuenta bancaria en Estados Unidos en dos bancos.</p>

                            <p><span className="symbol-type">US$</span><span className="price-type">3,400</span></p>

                            <div className="container-mas-informacion2">
                            <a href="/cuenta">MÁS INFORMACION</a>

                            </div>
                        </div>

                    </div>
                 
                
                 </div>

                 <div className="contaienr-fluid">

                    <div className="row contenedor-azul">

                        <div className="col-12 col-md-4 container-image">
                            <img src= {casatarjeta} alt=""/>
                        </div>

                        <div className="col-12 col-md-8 texto-container-azul">
                            <h1>ABRE UNA CUENTA BANCARIA EN ESTADOS UNIDOS</h1>

                            <h3>Tarjeta de débito VISA | Número de cuenta y ruta | Acceso a banca digital</h3>



                            <button>MÁS INFORMACIÓN</button>
                        </div>

                    </div>
{/* 
                    <div className="row contacto-container">

                        <div className="col-12">
                            <div className="title-container">
                                
                            <h1>¿ALGUNA DUDA?</h1>

                            </div>  
                            <div className="col-12 subtitle-container">  

                            <h3>Contáctanos</h3>

                            </div>  

                            <div className="col-12 formulario"> 

                            <form method="post">

                            {this.state.success ? <Success/> : ""}

                                <div className="form-group">
                                    
                                    <input type="text" className="form-group" id="nombre" name="nombre" placeholder="Nombre" onChange={this.handleChange} value={this.state.form.nombre}/>

                                </div>

                                <div className="form-group">

                                    <input type="text"  className="form-group" id="email" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.form.email}/>

                                </div>

                                <div className="form-group">

                                    <input type="text"  className="form-group" id="telefono" name="telefono" placeholder="Número de teléfono" onChange={this.handleChange} value={this.state.form.telefono}/>

                                </div>
                                
                                <div className="form-group">
                                <textarea name="mensaje" id="mensaje" cols="30" rows="10"  className="form-group" placeholder="Mensaje" onChange={this.handleChange} value={this.state.form.mensaje}></textarea>

                                </div>

                                <div className="enviar-container">

                                    <button type="submit" name="login_b" id="login_b" onClick={ this.register }>ENVIAR</button>

                                </div>
                              
                            </form>
                            
                            
                            </div>
                        </div>

                        
                    </div>
                 
                  */}
                 
                 </div>


            </React.Fragment>
        );
    }
}

export default Home;