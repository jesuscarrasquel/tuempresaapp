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
            ques: "??Puedo abrir una LLC desde mi pa??s?",
            ans: "Claro, si quieres crear una empresa Limited Liability Company en Estados Unidos, es decir, abrir una LLC, puedes hacerlo desde cualquier pa??s. Una compa????a de responsabilidad limitada LLC en USA es un tipo de empresa que es posible abrir desde cualquier lugar del mundo. Esto quiere decir que no necesitas viajar."
            },
            {id:2,
            ques:"??Es necesario viajar a Estados Unidos?",
            ans:"No, la tramitaci??n y posterior administraci??n de una empresa Limited Liability Company LLC se puede realizar a trav??s de Internet desde cualquier pa??s."},
            {id:3,
            ques:"??Cu??les son los requisitos?",
            ans:"Solo necesitas ser mayor de 18 a??os y una fotograf??a de tu pasaporte, nada m??s. Lo mismo aplica para cada miembro de la sociedad en caso de tener m??s de uno. Puedes abrir una LLC, u otro tipo de empresa en Estados Unidos desde cualquier lugar y sin un n??mero de tel??fono. Tampoco necesitas trabajadores por cuenta propia a nombre de tu LLC o tener socios para tus negocios online o f??sicos. Eso s??, los servicios de un agente registrado son requeridos para que al abrir una empresa esta tenga un domicilio fiscal dentro del estado de formaci??n (no se trata de una oficina virtual). Al crear la empresa deber??s elegir un estado, aunque no existir?? la obligaci??n de prestar servicios all??, pues puedes atender a tus clientes en cualquier lugar del mundo."},
            {id:4,
            ques:"??Cu??nto demora la gesti??n?",
            ans:"La gesti??n de una Sociedad de Responsabilidad Limitada tarda entre 10 y 20 d??as h??biles, per??odo tras el cual te entregaremos la documentaci??n de tu empresa. Esta es, Art??culos de Organizaci??n (Articles of Organization), Acuerdo Operativo (Operating Agreement) y EIN."},
            {id:5,
            ques:"??Existe retraso a causa de la pandemia mundial?",
            ans:"No. Seguimos operando de manera r??pida en los plazos de entrega indicados."},
            {id:6,
            ques:"??C??mo recibir?? la documentaci??n?",
            ans:"En formato digital a trav??s de nuestra plataforma en l??nea."},
            {id:7,
            ques:"??Es necesario renovar la LLC cada a??o?",
            ans:"S??, para que tu empresa pueda seguir operando ser?? necesario que cada a??o realices un reporte anual y pagues los impuestos estatales que correspondan, junto con la contrataci??n de los servicios de un agente registrador. Si necesitas ayuda con la renovaci??n cont??ctanos."},
            {id:8,
            ques:"??Puedo abrir una cuenta bancaria en Estados Unidos con una LLC?",
            ans:"S??, puedes abrir cuentas de empresa. Si quieres hacerlo sin viajar puedes solicitar la apertura de cuenta de negocio en Estados Unidos."},
            {id:10,
            ques:"??C??mo pagan impuestos en Estados Unidos las LLC?",
            ans:"Como persona f??sica, si creas una empresa en Estados Unidos ten en cuenta presentar una declaraci??n y pagar los impuestos all?? para cumplir con tus obligaciones fiscales al constituir una LLC. En Estados Unidos ventajas y desventajas de constituir una empresa de responsabilidad limitada que no est?? sujeta a doble tributaci??n como las corporaciones (Corporation) puede ser muy significativo, ya que pagan impuestos de manera diferente. Los ingresos obtenidos por la LLC Limited Liability Company se incluyen en la declaracion de renta personal. Puedes pagar impuestos por cuenta propia sin ning??n problema (puedes hacerlo de forma gratuita en la web oficial del gobierno a nombre de tu LLC v??a pago electr??nico). De todas formas, al abrir la empresa tambi??n puedes consultar otros servicios con un CPA o puedes contratar un asesor fiscal para pagar tus impuestos en Estados Unidos si lo consideras mejor opci??n para cumplir con las obligaciones del ??mbito legal. En estados Unidos es necesario un CPA solo si no sabes hacer por tu cuenta cada formulario. Adem??s tambi??n al abrir una empresa en Estados Unidos, espec??ficamente una compa????a de responsabilidad limitada LLC, deber??s elegir la cantidad de miembros. Si tiene un solo due??o (Single member Limited Liability Company) pagar??s impuestos en Estados Unidos sin necesitar un Individual Taxpayer Identification Number (ITIN) o visado de negocios. Si tiene dos o m??s miembros, el tratamiento fiscal que recibe por parte del IRS es el de una sociedad an??nima de United States. Ello porque un LLC no tiene figura propia y paga impuesto como otras empresas de Estados Unidos. A su vez, todos los socios necesitar??n n??mero de identificaci??n individual ITIN para declarar. De hecho, si eres residente en Espa??a, como residente espa??ol puede darse el caso de que al crear la LLC no tengas que ser aut??nomo en Espa??a. Esto depende del tipo de empresas, el lugar del mundo en que vendas, y otros factores m??s. Por otro lado, si tu pa??s tiene un sistema impositivo territorial, puede no ser necesario pagar impuestos all?? por las ganancias de Limited Liability Companies. Las empresas de Estados Unidos representan una ganancia del extranjero, de otros pa??ses, por lo que no tributar??an localmente al tratarse de un para??so fiscal. Por ??ltimo, como informaci??n general, es importante destacar que no siempre habr?? que pagar impuestos en USA, sino solo declarar. Ello oicurrir?? si no hay presencia f??sica en el pa??s, mediante un establecimiento o agente dependiente. Eso s??, como LLC tambi??n es posible vender productos f??sicos y que no represente nexo f??sico con el pa??s, como al vender en Amazon FBA."}
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
                                <p>Emprende un negocio de alcance global formando una LLC en EEUU. Recibir??s la documentaci??n digital r??pidamente y tu empresa estar?? lista para iniciar su actividad legalmente en el pa??s.</p>
                            </div>

                            <div className="description-2-container-llc">
                                <p>En 10-20 d??as h??biles | 50 estados para elegir</p>
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
                                    <h2>M??LTIPLES VENTAJAS DEL MERCADO AMERICANO</h2>
                            </div>

                            <img src={Compania} alt="" className="compania"/>
                        </div>

                        <div className="col-12 col-md-6 container-multiples">

                            <ul>
                                <li>
                                    <h2>Protege tu patrimonio personal</h2>
                                    <p>Al ser una sociedad de responsabilidad limitada, una LLC evitar?? la exposici??n de tus activos personales frente a posibles problemas que deriven de tu negocio, tales como demandas o quiebra.</p>
                                    <br/>
                                </li>
                                <li>
                                    <h2>Optimiza el pago de impuestos</h2>
                                    <p>Al ser entidades de libre paso en t??rminos tributarios (Pass Through Taxation), deber??s realizar las declaraci??n de impuestos a nivel personal, lo cual tiene significativas ventajas:</p>

                                        <ul>
                                            <li>Sin declaraciones fiscales en EEUU para extranjeros no residentes que no sean ETBUS.</li>
                                            <li>Libre de impuestos en pa??ses con sistema tributario territorial.</li>
                                            <li>Sin exigencia de reportes contables.</li>
                                        </ul>
                                    <br/>
                                </li>
                                <li>
                                    <h2>Accede a marketplaces y pasarelas de pago</h2>
                                    <p>Registrar una LLC en USA te permitir?? expandir tus mercados y posibilidades al darte acceso a plataformas como Amazon o Stripe que tienen restricciones de uso para residentes de ciertos pa??ses.</p>
                                    <br/>
                                </li>
                                <li>
                                    <h2>Abre una cuenta bancaria comercial en Estados Unidos</h2>
                                    <p>Tener una LLC te brinda la oportunidad de obtener una cuenta de empresa en la banca estadounidense, facilit??ndote la recepci??n de pagos y el acceso a financiamiento m??s barato para tu negocio.</p>
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
                                <p>Asigna las utilidades de cada miembro seg??n la proporci??n que quieras</p>
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
                                <p>Sin requisitos burocr??ticos como estatutos, juntas de directores o accionistas, y confecci??n de minutas</p>
                            </div>
                            <div className="container-mas col-md-3">

                                <div className="container-imagen-ventajas-21">

                                    <img src={aunhaymas4} alt=""/>

                                </div>
                                <p>Resguarda tu privacidad con LLC an??nimas en Delaware y Wyoming</p>
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

                                <p>Protecci??n EV SSL
                                para la p??gina web de tu compa????a</p>
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
                                    <li>Agente registrador primer a??o</li>
                                    <li>Preparaci??n de documentos</li>
                                    <li>Notarizaci??n de pasaporte</li>
                                    <li>Pago de cargos estatales</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="title-container-51-llc">
                                <h2>US$ 499</h2>
                                <ul>
                                    <li>Art??culos de organizaci??n</li>
                                    <li>Acuerdo de operaci??n</li>
                                    <li>EIN</li>
                                    <li>Cuenta bancaria comercial</li>
                                </ul>
                                    
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="title-container-51-llc">
                                <h2>US$ 899</h2>
                                <ul>
                                    <li>Art??culos de organizaci??n</li>
                                    <li>Acuerdo de operaci??n</li>
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

                            <p>Recibe los documentos de tu LLC en 10-20 d??as h??biles y los de tu cuenta de banco en 5 d??as h??biles tras hacer la solicitud.</p>
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

export default Llc;