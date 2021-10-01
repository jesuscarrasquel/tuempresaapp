import React, { Component } from 'react';
import './styles/Footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
    

    render() {
        return (
            <React.Fragment>

              
                    <div className="footer-container container-fluid" id="footer">

                        <div className="row">

                            <div className="col-12 col-md-4">

                                <h1 className="footer-logo">TuempresaUS</h1>

                            </div>

                            <div className="col-12 col-md-4">

                            <h2>SERVICIOS</h2>
                                <br/>

                            <Link to="/llc">
                                <h3>LLC</h3>
                            </Link>
                                <br/>

                            <Link to="/inc">
                                <h3>Inc.</h3>
                            </Link>

                                <br/>

                            <Link to="/cuenta">
                                <h3>Cuenta Bancaria</h3>
                            </Link>
                                <br/>

                            </div>

                     

                            <div className="col-12 col-md-4">

                                <h2>SOPORTE</h2>
                                <br/>

                                <Link to="/contacto">
                                <h3>Contacto</h3>
                                </Link>

                                <br/>


                            </div>



                        </div>

                        <hr/>

                        <div className="row">


                            <div className="col-12">

                                <p className="footer-color">TuempresaUS presta sus servicios como intermediario para la realización de trámites legales y bancarios en los Estados Unidos de América, para lo cual contrata servicios de terceros ubicados en el país, sin ser parte alguna de consorcios, entidades gubernamentales, entidades estatales, o alguna otra clase de entes que otorguen derechos de registrabilidad de empresas en Estados Unidos; así como tampoco posee alianzas, sociedad comercial o relación directa alguna con entidades bancarias del país.

                                TuempresaUS no provee ni pretende entregar ningún tipo de servicio, consejo o asesoría fiscal o legal a sus clientes y usuarios. Todo tipo de información publicada que se relacione con ello corresponde exclusivamente a información de conocimiento público.

                                © 2021 TuempresaUS - Todos los derechos reservados

                                .</p> 


                            </div>
                        </div>



                    </div>



             






            </React.Fragment>
        );
    }
}

export default Footer;