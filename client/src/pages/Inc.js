import React, { Component } from 'react';
import NavbarIn from '../components/NavbarIn';

import Empresa from '../assets/img/INC-1.svg';
// import pasaporte1 from '../assets/img/pasaporte1.svg';
import pasaporte1 from '../assets2/online.svg';

// import pasaporte2 from '../assets/img/pasaporte2.svg';
import pasaporte2 from '../assets2/imagen-2.svg';

// import pasaporte3 from '../assets/img/pasaporte3.svg';
import pasaporte3 from '../assets2/city-map.svg';

// import pasaporte4 from '../assets/img/pasaporte4.svg';
import pasaporte4 from '../assets2/bandera-imagen.svg';

// import alcancia from '../assets/img/alcancia.svg';
import alcancia from '../assets2/sinaporte.svg';

// import pasaporte6 from '../assets/img/pasaporte6.svg';
import pasaporte6 from '../assets2/miembro.svg';
import Compania from '../assets/img/INC-2.svg';
import EmpresaUSA from '../assets/img/Empresa-USA.png';

// import aunhaymas1 from '../assets/img/aunhaymas1.svg';
import aunhaymas1 from '../assets2/dividendos.svg';
// import aunhaymas2 from '../assets/img/aunhaymas2.svg';
import aunhaymas2 from '../assets2/visae2.svg';

// import aunhaymas3 from '../assets/img/aunhaymas3.svg';
import aunhaymas3 from '../assets2/cuenta-10.svg';

// import aunhaymas4 from '../assets/img/aunhaymas4.svg';
import aunhaymas4 from '../assets2/deducciones.svg';

// import aunhaymas5 from '../assets/img/aunhaymas5.svg';
import aunhaymas5 from '../assets2/cuenta-11.svg';

// import aunhaymas6 from '../assets/img/aunhaymas6.svg';
import aunhaymas6 from '../assets2/cuenta-12.svg';

import Capitolio from '../assets2/usa.svg';
import Cronometro from '../assets2/imagen-14.svg';
import Pasaporte3puntos from '../assets2/imagen-pass.svg';

// import aunhaymas1 from '../assets/img/aunhaymas1.svg';
// import aunhaymas2 from '../assets/img/aunhaymas2.svg';
// import aunhaymas3 from '../assets/img/aunhaymas3.svg';
// import aunhaymas4 from '../assets/img/aunhaymas4.svg';
// import aunhaymas5 from '../assets/img/aunhaymas5.svg';
// import aunhaymas6 from '../assets/img/aunhaymas6.svg';

// import Capitolio from '../assets/img/capitolio.svg';
// import Cronometro from '../assets/img/cronometro.svg';
// import Pasaporte3puntos from '../assets/img/pasaporte3puntos.svg';

import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';

import './styles/Inc.css';
import './styles/Incdesktop.css';


class Inc extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: 0, cards: [
            {id:1,
            ques: "¿Puedo abrir una Inc. desde mi país?",
            ans: "Sí, es posible abrir una Corporación Tipo C desde cualquier país del mundo."
            },
            {id:2,
            ques:"¿Es necesario viajar a Estados Unidos?",
            ans:"No, tanto la tramitación y gestión de la empresa se pueda hacer online desde cualquier país."},
            {id:3,
            ques:"¿Cuáles son los requisitos?",
            ans:"Tener al menos 18 años y una fotografía de tu pasaporte. Lo mismo aplica para cada accionista de la corporación en caso de que tenga más de uno."},
            {id:4,
            ques:"¿Cuánto demora la gestión?",
            ans:"La gestión de una Sociedad de Responsabilidad Limitada tarda entre 10 y 20 días hábiles, período tras el cual te entregaremos la documentación de tu empresa. Esta es, Artículos de Organización (Articles of Organization), Acuerdo Operativo (Operating Agreement) y EIN."},
            {id:5,
            ques:"¿Existe retraso a causa de la pandemia mundial?",
            ans:"No. Seguimos operando de manera rápida en los plazos de entrega indicados."},
            {id:6,
            ques:"¿Cómo puedo informarme del avance en el proceso?",
            ans:"Una vez registrada la compañía podrás verla en la base de datos estatal online de la jurisdicción en que se haya constituido. Sin embargo, desde que se inicia el proceso hasta que se finaliza, no disponemos de ningún documento por parte de la secretaría estatal en que se dé cuenta del inicio o grado de avance. Eso sí, si en alguna instancia la secretaría estatal hace alguna observación, como pedir que se cambie el nombre porque lo considera similar a otro, te avisaremos para que el proceso pueda seguir adelante. Adicionalmente, también es posible que en ocasiones ya veas que aparezca la empresa registrada en la base de datos estatal, pero que no te hayamos hecho entrega aún de su documentación. Esto se debe a que en ese momento estará en trámite el EIN, ya que hacemos la entrega de toda la documentción junta."},
            {id:7,
            ques:"¿Cómo recibiré la documentación?",
            ans:"En formato digital a través de nuestra plataforma en línea o vía email."},
            {id:8,
            ques:"¿Puedo abrir una Cuenta Bancaria en Estados Unidos con una Inc.?",
            ans:"Sí, y si quieres hacerlo sin viajar puedes solicitar nuestro servicio de asesoría para la apertura de Cuenta Bancaria en EEUU sin viajar."},
            
            
            ] };
      }


    toggle(e) {
    let event = e.target.dataset.event;
    this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
    }


    render() {

        const {cards, collapse} = this.state;

        return (
            <React.Fragment>

                <NavbarIn/>

                <div className="contianer-fluid primer-container-llc">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="title-container-1-llc">
                                <h1>CREA TU INC. EN <br/> ESTADOS UNIDOS</h1>
                            
                        
                            </div>

                            <div className="description-container-llc
                            ">
                                <p>Da forma a tu idea de negocio constituyendo una Corporación Tipo C en EEUU y destaca por sobre otros negocios. Recibe rápidamente la documentación para empezar a operar ya.</p>
                            </div>

                            <div className="description-2-container-llc">
                                <p>| 50 estados para elegir</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">

                            <img src={Empresa} alt="" className="empresa-imagen"/>
                        </div>
                    </div>

                    <div className="row container-2-llc-main">
                        <div className="col-12 title-container-2-llc">

                    
                            <h2>SOLO NECESITAS UN PASAPORTE</h2>

                        </div>

                        <div className="col-12 col-md-4">

                            <div className="container-imagen-ventajas-21">

                                <img src={pasaporte1} alt=""/>

                            </div>

                            <p>Tramitación 100% online, sin ir físicamente a EEUU</p>
                            
                        </div>


                        <div className="col-12 col-md-4">

                            <div className="container-imagen-ventajas-21">

                                <img src={pasaporte2} alt=""/>

                            </div>


                            <p>Sin necesidad de SSN o ITIN</p>


                        </div>
                        <div className="col-12 col-md-4">

                            <div className="container-imagen-ventajas-21">

                                <img src={pasaporte3} alt=""/>

                            </div>

                            <p>Sin dirección o teléfono estadounidense</p>

                        </div>
                        <div className="col-12 col-md-4">

                            <div className="container-imagen-ventajas-21">

                                <img src={pasaporte4} alt=""/>

                            </div>

                            <p>Sea cual sea tu nacionalidad o país de residencia</p>

                        </div>
                        <div className="col-12 col-md-4">

                            <div className="container-imagen-ventajas-21">

                                <img src={alcancia} alt=""/>

                            </div>


                            <p>Sin aportes de capital inicial</p>

                        </div>
                        <div className="col-12 col-md-4">

                            <div className="container-imagen-ventajas-21">

                                <img src={pasaporte6} alt=""/>

                            </div>


                            <p>A partir de un solo miembro</p>

                        </div>
                    </div>


                    <div className="row container-multiples-main">

                        <hr/>

                        {/* <div className="col-12">
                            <div className="title-container-2-llc">
                                    <h2>MÚLTIPLES VENTAJAS DEL MERCADO AMERICANO</h2>
                            </div>
                        </div>
 */}


                        <div className="col-12 col-md-6">

                        <div className="title-container-2-llc">
                                    <h2>GRAN ATRACTIVO DE MERCADO EN EEUU</h2>
                            </div>

                            <img src={Compania} alt="" className="compania"/>
                        </div>

                        <div className="col-12 col-md-6 container-multiples">

                            <ul>
                                <li>
                                    <h2>Asume riesgos sin exponer tu patrimonio personal</h2>
                                    <p>Tu responsabilidad y la de cada dueño se limita exclusivamente al porcentaje de acciones que posean, evitando poner en riesgo el patrimonio personal ante eventualidades del negocio.</p>
                                    <br/>
                                </li>
                                <li>
                                    <h2>Llama la atención de inversionistas</h2>
                                    <p>Podrás emitir acciones de diferentes clases lo cual te permitirá especificar claramente los términos de un acuerdo en cuanto a derechos y obligaciones. Además, el alto grado de formalidad y trazabilidad favorece la organización:</p>

                                        <ul>
                                         
                                            <li>Estatutos sociales, juntas de directorio y accionistas, minutas, resoluciones.</li>
                                        </ul>
                                    <br/>
                                </li>
                                <li>
                                    <h2>Regístrate en marketplaces y pasarelas de pago sin restricciones</h2>
                                    <p>Si con una empresa de tu país no puedes registrarte en páginas como Amazon, Stripe u otras, con una Inc. no tendrás problemas para hacerlo y expandir así tu negocio globalmente.</p>
                                    <br/>
                                </li>
                                <li>
                                    <h2>Abre una cuenta bancaria comercial en Estados Unidos</h2>
                                    <p>Flexibiliza el manejo de tu dinero abriendo una cuenta bancaria de negocio en Estados Unidos. Obtendrás una Tarjeta de Débito VISA Internacional y otros beneficios que impedirán trabas en tus negocios.</p>
                                    <br/>
                                </li>
                            </ul>
                              
                        </div>

                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="title-container-2-llc">
                                <h2>Y AÚN HAY MÁS</h2>
                            </div>

                        </div>

                        <div className="col-12 col-md-8 container-mas-main">


                           
                            <div className="container-mas col-md-3">

                                <div className="container-imagen-ventajas-21">

                                    <img src={aunhaymas1} alt=""/>

                                </div>
                                <p>Acumula utilidades a fin de año sin la obligación de repartir dividendos</p>
                            </div>
                            <div className="container-mas col-md-3">

                                <div className="container-imagen-ventajas-21">

                                    <img src={aunhaymas2} alt=""/>

                                </div>
                                <p>Inicia los trámites para vivir en EEUU aplicando a una Visa Inversionista E-2</p>
                            </div>
                            <div className="container-mas col-md-3">

                                <div className="container-imagen-ventajas-21">

                                    <img src={aunhaymas3} alt=""/>

                                </div>
                                <p>Incorpora a tu negocio cuantos accionistas quieras, no hay límite</p>
                            </div>
                            <div className="container-mas col-md-3">

                                <div className="container-imagen-ventajas-21">

                                    <img src={aunhaymas4} alt=""/>

                                </div>
                                <p>Obtén deducciones tributarias en función de tu actividad corporativa</p>
                            </div>
                            <div className="container-mas col-md-3">

                                <div className="container-imagen-ventajas-21">

                                    <img src={aunhaymas5} alt=""/>

                                </div>
                                <p>Arrienda y adquiere propiedades en EEUU a nombre de tu compañía</p>
                            </div>
                            <div className="container-mas col-md-3">

                                <div className="container-imagen-ventajas-21">

                                    <img src={aunhaymas6} alt=""/>

                                </div>

                                <p>Protege tu sitio web con un certificado EV SSL</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 empresa-imagen2-container">
                            <img src={EmpresaUSA} alt="" className="empresa-imagen2"/>
                        </div>
                    </div>
{/* 


                    <div className="row container-2-llc-main">
                        <div className="col-12">
                            <div className="title-container-2-llc">
                                <h2>REGISTRA TU INC EN ESTADOS UNIDOS</h2>

                            </div>

                        </div>

                        <div className="col-12 col-md-4">
                            <div className="title-container-51-llc">
                                <h2>SERVICIOS INCLUIDOS</h2>
                                <ul>
                                    <li>Agente registrador primer año</li>
                                    <li>Preparación de documentos</li>
                                    <li>Pago de cargos estatales</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="title-container-51-llc">
                                <h2>US$ 599</h2>
                                <ul>
                                    <li>Artículos de organización</li>
                                    <li>Estatutos sociales</li>
                                    <li>EIN</li>
                                    <li>Certificado emisión acciones</li>
                                    {/* <li>Asesoría Cuenta Bancaria USA</li> 
                                </ul>
                                    
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="title-container-51-llc">
                                <h2>US$ 999</h2>
                                <ul>
                                    <li>Artículos de incorporación</li>
                                    <li>Estatutos sociales</li>
                                    <li>EIN</li>
                                    <li>Certificado emisión acciones</li>
                                    <li>Asesoría Cuenta Bancaria USA</li>
                                </ul>   
                            </div>
                        </div>
                    </div>




 */}


                    <div className="row contenedor-iconos-vertical-row">
                        <div className="col-12 contenedor-iconos-vertical">

                            <div className="container-imagen-ventajas-21">
                                <img src={Capitolio} alt=""/>

                            </div>
                            <p>Elige cualquiera de los 50 estados de USA para formar tu empresa.</p>
                        </div>
                        <div className="col-12 contenedor-iconos-vertical">

                            <div className="container-imagen-ventajas-21">

                                <img src={Cronometro} alt=""/>

                            </div>

                            <p>El plazo de registro de la compañía está sujeto a los procesos internos de la secretaría estatal e IRS.</p>
                        </div>
                        <div className="col-12 contenedor-iconos-vertical">

                            <div className="container-imagen-ventajas-21">

                                <img src={Pasaporte3puntos} alt=""/>

                            </div>
                            <p>El único requisito es una fotografía del pasaporte de cada miembro.</p>
                        </div>
                    </div>

                    <div className="row contenedor-preguntas">
                        <div className="col-12">
                                <div className="title-preguntas">

                                    <h2>PREGUNTAS FRECUENTES</h2>

                                </div>
                            <div className="title-container-22-llc">

                                {cards.map(index => {
                                return (
                                    <Card style={{ marginBottom: '1rem' }} key={index.id}>
                                    <CardHeader onClick={this.toggle} data-event={index.id}>{index.ques}</CardHeader>
                                    <Collapse isOpen={collapse === index.id}>
                                    <CardBody>{index.ans}</CardBody>
                                    </Collapse>
                                    </Card>
                                )
                                })}  



                               
                            </div>
                        </div>
                    </div>

   

                    {/* <div className="row">
                        <div className="col-12">
                            <div className="title-container-7-llc">
                                <h2>¿AÚN CON DUDAS?</h2>
                                <button>CONTÁCTANOS</button>


                            </div>
                        </div>
                    </div> */}
                </div>
            </React.Fragment>
            
        );
    }
}

export default Inc;