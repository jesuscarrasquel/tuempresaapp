import React, { Component } from 'react';
import NavbarIn from '../components/NavbarIn';

import Empresa from '../assets/img/Empresa-EEUU.png';

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

import Compania from '../assets/img/Compania.png';
import EmpresaUSA from '../assets/img/Empresa-USA.png';

// import aunhaymas1 from '../assets/img/aunhaymas1.svg';
import aunhaymas1 from '../assets2/equipo.svg';
// import aunhaymas2 from '../assets/img/aunhaymas2.svg';
import aunhaymas2 from '../assets2/imagen-pass.svg';

// import aunhaymas3 from '../assets/img/aunhaymas3.svg';
import aunhaymas3 from '../assets2/burocracia.svg';

// import aunhaymas4 from '../assets/img/aunhaymas4.svg';
import aunhaymas4 from '../assets2/anonimas.svg';

// import aunhaymas5 from '../assets/img/aunhaymas5.svg';
import aunhaymas5 from '../assets2/cuenta-11.svg';

// import aunhaymas6 from '../assets/img/aunhaymas6.svg';
import aunhaymas6 from '../assets2/cuenta-12.svg';

import Capitolio from '../assets2/usa.svg';
import Cronometro from '../assets2/imagen-14.svg';
import Pasaporte3puntos from '../assets2/imagen-pass.svg';

import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';

import './styles/Llc.css';
import './styles/Llcdesktop.css';


class Llc extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: 0, cards: [
            {id:1,
            ques: "¿Puedo abrir una LLC desde mi país?",
            ans: "Claro, si quieres crear una empresa Limited Liability Company en Estados Unidos, es decir, abrir una LLC, puedes hacerlo desde cualquier país. Una compañía de responsabilidad limitada LLC en USA es un tipo de empresa que es posible abrir desde cualquier lugar del mundo. Esto quiere decir que no necesitas viajar."
            },
            {id:2,
            ques:"¿Es necesario viajar a Estados Unidos?",
            ans:"No, la tramitación y posterior administración de una empresa Limited Liability Company LLC se puede realizar a través de Internet desde cualquier país."},
            {id:3,
            ques:"¿Cuáles son los requisitos?",
            ans:"Solo necesitas ser mayor de 18 años y una fotografía de tu pasaporte, nada más. Lo mismo aplica para cada miembro de la sociedad en caso de tener más de uno. Puedes abrir una LLC, u otro tipo de empresa en Estados Unidos desde cualquier lugar y sin un número de teléfono. Tampoco necesitas trabajadores por cuenta propia a nombre de tu LLC o tener socios para tus negocios online o físicos. Eso sí, los servicios de un agente registrado son requeridos para que al abrir una empresa esta tenga un domicilio fiscal dentro del estado de formación (no se trata de una oficina virtual). Al crear la empresa deberás elegir un estado, aunque no existirá la obligación de prestar servicios allí, pues puedes atender a tus clientes en cualquier lugar del mundo."},
            {id:4,
            ques:"¿Cuánto demora la gestión?",
            ans:"La gestión de una Sociedad de Responsabilidad Limitada tarda entre 10 y 20 días hábiles, período tras el cual te entregaremos la documentación de tu empresa. Esta es, Artículos de Organización (Articles of Organization), Acuerdo Operativo (Operating Agreement) y EIN."},
            {id:5,
            ques:"¿Existe retraso a causa de la pandemia mundial?",
            ans:"No. Seguimos operando de manera rápida en los plazos de entrega indicados."},
            {id:6,
            ques:"¿Cómo recibiré la documentación?",
            ans:"En formato digital a través de nuestra plataforma en línea."},
            {id:7,
            ques:"¿Es necesario renovar la LLC cada año?",
            ans:"Sí, para que tu empresa pueda seguir operando será necesario que cada año realices un reporte anual y pagues los impuestos estatales que correspondan, junto con la contratación de los servicios de un agente registrador. Si necesitas ayuda con la renovación contáctanos."},
            {id:8,
            ques:"¿Puedo abrir una cuenta bancaria en Estados Unidos con una LLC?",
            ans:"Sí, puedes abrir cuentas de empresa. Si quieres hacerlo sin viajar puedes solicitar la apertura de cuenta de negocio en Estados Unidos."},
            {id:10,
            ques:"¿Cómo pagan impuestos en Estados Unidos las LLC?",
            ans:"Como persona física, si creas una empresa en Estados Unidos ten en cuenta presentar una declaración y pagar los impuestos allí para cumplir con tus obligaciones fiscales al constituir una LLC. En Estados Unidos ventajas y desventajas de constituir una empresa de responsabilidad limitada que no esté sujeta a doble tributación como las corporaciones (Corporation) puede ser muy significativo, ya que pagan impuestos de manera diferente. Los ingresos obtenidos por la LLC Limited Liability Company se incluyen en la declaracion de renta personal. Puedes pagar impuestos por cuenta propia sin ningún problema (puedes hacerlo de forma gratuita en la web oficial del gobierno a nombre de tu LLC vía pago electrónico). De todas formas, al abrir la empresa también puedes consultar otros servicios con un CPA o puedes contratar un asesor fiscal para pagar tus impuestos en Estados Unidos si lo consideras mejor opción para cumplir con las obligaciones del ámbito legal. En estados Unidos es necesario un CPA solo si no sabes hacer por tu cuenta cada formulario. Además también al abrir una empresa en Estados Unidos, específicamente una compañía de responsabilidad limitada LLC, deberás elegir la cantidad de miembros. Si tiene un solo dueño (Single member Limited Liability Company) pagarás impuestos en Estados Unidos sin necesitar un Individual Taxpayer Identification Number (ITIN) o visado de negocios. Si tiene dos o más miembros, el tratamiento fiscal que recibe por parte del IRS es el de una sociedad anónima de United States. Ello porque un LLC no tiene figura propia y paga impuesto como otras empresas de Estados Unidos. A su vez, todos los socios necesitarán número de identificación individual ITIN para declarar. De hecho, si eres residente en España, como residente español puede darse el caso de que al crear la LLC no tengas que ser autónomo en España. Esto depende del tipo de empresas, el lugar del mundo en que vendas, y otros factores más. Por otro lado, si tu país tiene un sistema impositivo territorial, puede no ser necesario pagar impuestos allí por las ganancias de Limited Liability Companies. Las empresas de Estados Unidos representan una ganancia del extranjero, de otros países, por lo que no tributarían localmente al tratarse de un paraíso fiscal. Por último, como información general, es importante destacar que no siempre habrá que pagar impuestos en USA, sino solo declarar. Ello oicurrirá si no hay presencia física en el país, mediante un establecimiento o agente dependiente. Eso sí, como LLC también es posible vender productos físicos y que no represente nexo físico con el país, como al vender en Amazon FBA."}
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
                                <h1>CREA TU LLC EN <br/> ESTADOS UNIDOS</h1>
                            
                        
                            </div>

                            <div className="description-container-llc
                            ">
                                <p>Emprende un negocio de alcance global formando una LLC en EEUU. Recibirás la documentación digital rápidamente y tu empresa estará lista para iniciar su actividad legalmente en el país.</p>
                            </div>

                            <div className="description-2-container-llc">
                                <p>En 10-20 días hábiles | 50 estados para elegir</p>
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
                                    <h2>MÚLTIPLES VENTAJAS DEL MERCADO AMERICANO</h2>
                            </div>

                            <img src={Compania} alt="" className="compania"/>
                        </div>

                        <div className="col-12 col-md-6 container-multiples">

                            <ul>
                                <li>
                                    <h2>Protege tu patrimonio personal</h2>
                                    <p>Al ser una sociedad de responsabilidad limitada, una LLC evitará la exposición de tus activos personales frente a posibles problemas que deriven de tu negocio, tales como demandas o quiebra.</p>
                                    <br/>
                                </li>
                                <li>
                                    <h2>Optimiza el pago de impuestos</h2>
                                    <p>Al ser entidades de libre paso en términos tributarios (Pass Through Taxation), deberás realizar las declaración de impuestos a nivel personal, lo cual tiene significativas ventajas:</p>

                                        <ul>
                                            <li>Sin declaraciones fiscales en EEUU para extranjeros no residentes que no sean ETBUS.</li>
                                            <li>Libre de impuestos en países con sistema tributario territorial.</li>
                                            <li>Sin exigencia de reportes contables.</li>
                                        </ul>
                                    <br/>
                                </li>
                                <li>
                                    <h2>Accede a marketplaces y pasarelas de pago</h2>
                                    <p>Registrar una LLC en USA te permitirá expandir tus mercados y posibilidades al darte acceso a plataformas como Amazon o Stripe que tienen restricciones de uso para residentes de ciertos países.</p>
                                    <br/>
                                </li>
                                <li>
                                    <h2>Abre una cuenta bancaria comercial en Estados Unidos</h2>
                                    <p>Tener una LLC te brinda la oportunidad de obtener una cuenta de empresa en la banca estadounidense, facilitándote la recepción de pagos y el acceso a financiamiento más barato para tu negocio.</p>
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
                                <p>Asigna las utilidades de cada miembro según la proporción que quieras</p>
                            </div>
                            <div className="container-mas col-md-3">

                                <div className="container-imagen-ventajas-21">

                                    <img src={aunhaymas2} alt=""/>

                                </div>
                                <p>Aplica a una Visa Inversionista E-2 para vivir en EEUU indefinidamente mientras tu LLC siga vigente</p>
                            </div>
                            <div className="container-mas col-md-3">

                                <div className="container-imagen-ventajas-21">

                                    <img src={aunhaymas3} alt=""/>

                                </div>
                                <p>Sin requisitos burocráticos como estatutos, juntas de directores o accionistas, y confección de minutas</p>
                            </div>
                            <div className="container-mas col-md-3">

                                <div className="container-imagen-ventajas-21">

                                    <img src={aunhaymas4} alt=""/>

                                </div>
                                <p>Resguarda tu privacidad con LLC anónimas en Delaware y Wyoming</p>
                            </div>
                            <div className="container-mas col-md-3">

                                <div className="container-imagen-ventajas-21">

                                    <img src={aunhaymas5} alt=""/>

                                </div>
                                <p>Compra bienes inmuebles dentro de Estados Unidos a nombre de tu empresa</p>
                            </div>
                            <div className="container-mas col-md-3">

                                <div className="container-imagen-ventajas-21">

                                    <img src={aunhaymas6} alt=""/>

                                </div>

                                <p>Protección EV SSL
                                para la página web de tu compañía</p>
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
                                <h2>REGISTRA TU LLC EN USA</h2>

                            </div>

                        </div>

                        <div className="col-12 col-md-4">
                            <div className="title-container-51-llc">
                                <h2>SERVICIOS INCLUIDOS</h2>
                                <ul>
                                    <li>Agente registrador primer año</li>
                                    <li>Preparación de documentos</li>
                                    <li>Notarización de pasaporte</li>
                                    <li>Pago de cargos estatales</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="title-container-51-llc">
                                <h2>US$ 499</h2>
                                <ul>
                                    <li>Artículos de organización</li>
                                    <li>Acuerdo de operación</li>
                                    <li>EIN</li>
                                    <li>Cuenta bancaria comercial</li>
                                </ul>
                                    
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="title-container-51-llc">
                                <h2>US$ 899</h2>
                                <ul>
                                    <li>Artículos de organización</li>
                                    <li>Acuerdo de operación</li>
                                    <li>EIN</li>
                                    <li>Cuenta bancaria comercial</li>
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

                            <p>Recibe los documentos de tu LLC en 10-20 días hábiles y los de tu cuenta de banco en 5 días hábiles tras hacer la solicitud.</p>
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

export default Llc;