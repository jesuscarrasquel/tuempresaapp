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
            ques: "??Puedo abrir una Inc. desde mi pa??s?",
            ans: "S??, es posible abrir una Corporaci??n Tipo C desde cualquier pa??s del mundo."
            },
            {id:2,
            ques:"??Es necesario viajar a Estados Unidos?",
            ans:"No, tanto la tramitaci??n y gesti??n de la empresa se pueda hacer online desde cualquier pa??s."},
            {id:3,
            ques:"??Cu??les son los requisitos?",
            ans:"Tener al menos 18 a??os y una fotograf??a de tu pasaporte. Lo mismo aplica para cada accionista de la corporaci??n en caso de que tenga m??s de uno."},
            {id:4,
            ques:"??Cu??nto demora la gesti??n?",
            ans:"La gesti??n de una Sociedad de Responsabilidad Limitada tarda entre 10 y 20 d??as h??biles, per??odo tras el cual te entregaremos la documentaci??n de tu empresa. Esta es, Art??culos de Organizaci??n (Articles of Organization), Acuerdo Operativo (Operating Agreement) y EIN."},
            {id:5,
            ques:"??Existe retraso a causa de la pandemia mundial?",
            ans:"No. Seguimos operando de manera r??pida en los plazos de entrega indicados."},
            {id:6,
            ques:"??C??mo puedo informarme del avance en el proceso?",
            ans:"Una vez registrada la compa????a podr??s verla en la base de datos estatal online de la jurisdicci??n en que se haya constituido. Sin embargo, desde que se inicia el proceso hasta que se finaliza, no disponemos de ning??n documento por parte de la secretar??a estatal en que se d?? cuenta del inicio o grado de avance. Eso s??, si en alguna instancia la secretar??a estatal hace alguna observaci??n, como pedir que se cambie el nombre porque lo considera similar a otro, te avisaremos para que el proceso pueda seguir adelante. Adicionalmente, tambi??n es posible que en ocasiones ya veas que aparezca la empresa registrada en la base de datos estatal, pero que no te hayamos hecho entrega a??n de su documentaci??n. Esto se debe a que en ese momento estar?? en tr??mite el EIN, ya que hacemos la entrega de toda la documentci??n junta."},
            {id:7,
            ques:"??C??mo recibir?? la documentaci??n?",
            ans:"En formato digital a trav??s de nuestra plataforma en l??nea o v??a email."},
            {id:8,
            ques:"??Puedo abrir una Cuenta Bancaria en Estados Unidos con una Inc.?",
            ans:"S??, y si quieres hacerlo sin viajar puedes solicitar nuestro servicio de asesor??a para la apertura de Cuenta Bancaria en EEUU sin viajar."},
            
            
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
                                <p>Da forma a tu idea de negocio constituyendo una Corporaci??n Tipo C en EEUU y destaca por sobre otros negocios. Recibe r??pidamente la documentaci??n para empezar a operar ya.</p>
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

                            <p>Tramitaci??n 100% online, sin ir f??sicamente a EEUU</p>
                            
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

                            <p>Sin direcci??n o tel??fono estadounidense</p>

                        </div>
                        <div className="col-12 col-md-4">

                            <div className="container-imagen-ventajas-21">

                                <img src={pasaporte4} alt=""/>

                            </div>

                            <p>Sea cual sea tu nacionalidad o pa??s de residencia</p>

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
                                    <h2>M??LTIPLES VENTAJAS DEL MERCADO AMERICANO</h2>
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
                                    <p>Tu responsabilidad y la de cada due??o se limita exclusivamente al porcentaje de acciones que posean, evitando poner en riesgo el patrimonio personal ante eventualidades del negocio.</p>
                                    <br/>
                                </li>
                                <li>
                                    <h2>Llama la atenci??n de inversionistas</h2>
                                    <p>Podr??s emitir acciones de diferentes clases lo cual te permitir?? especificar claramente los t??rminos de un acuerdo en cuanto a derechos y obligaciones. Adem??s, el alto grado de formalidad y trazabilidad favorece la organizaci??n:</p>

                                        <ul>
                                         
                                            <li>Estatutos sociales, juntas de directorio y accionistas, minutas, resoluciones.</li>
                                        </ul>
                                    <br/>
                                </li>
                                <li>
                                    <h2>Reg??strate en marketplaces y pasarelas de pago sin restricciones</h2>
                                    <p>Si con una empresa de tu pa??s no puedes registrarte en p??ginas como Amazon, Stripe u otras, con una Inc. no tendr??s problemas para hacerlo y expandir as?? tu negocio globalmente.</p>
                                    <br/>
                                </li>
                                <li>
                                    <h2>Abre una cuenta bancaria comercial en Estados Unidos</h2>
                                    <p>Flexibiliza el manejo de tu dinero abriendo una cuenta bancaria de negocio en Estados Unidos. Obtendr??s una Tarjeta de D??bito VISA Internacional y otros beneficios que impedir??n trabas en tus negocios.</p>
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
                                <h2>Y A??N HAY M??S</h2>
                            </div>

                        </div>

                        <div className="col-12 col-md-8 container-mas-main">


                           
                            <div className="container-mas col-md-3">

                                <div className="container-imagen-ventajas-21">

                                    <img src={aunhaymas1} alt=""/>

                                </div>
                                <p>Acumula utilidades a fin de a??o sin la obligaci??n de repartir dividendos</p>
                            </div>
                            <div className="container-mas col-md-3">

                                <div className="container-imagen-ventajas-21">

                                    <img src={aunhaymas2} alt=""/>

                                </div>
                                <p>Inicia los tr??mites para vivir en EEUU aplicando a una Visa Inversionista E-2</p>
                            </div>
                            <div className="container-mas col-md-3">

                                <div className="container-imagen-ventajas-21">

                                    <img src={aunhaymas3} alt=""/>

                                </div>
                                <p>Incorpora a tu negocio cuantos accionistas quieras, no hay l??mite</p>
                            </div>
                            <div className="container-mas col-md-3">

                                <div className="container-imagen-ventajas-21">

                                    <img src={aunhaymas4} alt=""/>

                                </div>
                                <p>Obt??n deducciones tributarias en funci??n de tu actividad corporativa</p>
                            </div>
                            <div className="container-mas col-md-3">

                                <div className="container-imagen-ventajas-21">

                                    <img src={aunhaymas5} alt=""/>

                                </div>
                                <p>Arrienda y adquiere propiedades en EEUU a nombre de tu compa????a</p>
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
                                    <li>Agente registrador primer a??o</li>
                                    <li>Preparaci??n de documentos</li>
                                    <li>Pago de cargos estatales</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="title-container-51-llc">
                                <h2>US$ 599</h2>
                                <ul>
                                    <li>Art??culos de organizaci??n</li>
                                    <li>Estatutos sociales</li>
                                    <li>EIN</li>
                                    <li>Certificado emisi??n acciones</li>
                                    {/* <li>Asesor??a Cuenta Bancaria USA</li> 
                                </ul>
                                    
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="title-container-51-llc">
                                <h2>US$ 999</h2>
                                <ul>
                                    <li>Art??culos de incorporaci??n</li>
                                    <li>Estatutos sociales</li>
                                    <li>EIN</li>
                                    <li>Certificado emisi??n acciones</li>
                                    <li>Asesor??a Cuenta Bancaria USA</li>
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

                            <p>El plazo de registro de la compa????a est?? sujeto a los procesos internos de la secretar??a estatal e IRS.</p>
                        </div>
                        <div className="col-12 contenedor-iconos-vertical">

                            <div className="container-imagen-ventajas-21">

                                <img src={Pasaporte3puntos} alt=""/>

                            </div>
                            <p>El ??nico requisito es una fotograf??a del pasaporte de cada miembro.</p>
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
                                <h2>??A??N CON DUDAS?</h2>
                                <button>CONT??CTANOS</button>


                            </div>
                        </div>
                    </div> */}
                </div>
            </React.Fragment>
            
        );
    }
}

export default Inc;