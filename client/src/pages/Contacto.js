import React, { Component } from 'react';
import './styles/Contacto.css';
import './styles/Contactodesktop.css';

import NavbarIn from '../components/NavbarIn';
import Success from '../components/success';

import { sendEmail } from '../api/peticiones';
import * as cons from '../api/constants';



class Contacto extends Component {
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
     
        const f = new FormData();
        f.append("nombre", nombre);
        f.append("email", email);
        f.append("telefono", telefono);
        f.append("mensaje", mensaje);
        f.append("type", type);

        // alert("Tu mensaje esta siendo enviado, no toques nada");

        const boton = document.getElementById("login_b");
        boton.disabled = true;

        // this.disabled = true;
        // console.log(this.disabled);

        this.setState({
            success: true
        })

        
        const res_email= await sendEmail(f);
        console.log(res_email);

        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("mensaje").value = "";

        // this.setState({
        //     success: true
        // })



     

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

                <NavbarIn/>

                <div className="container contenedor-contacto">

                    <div className="row row-contacto">

                        <div className="title-contacto-container col-12">
                            <h1>Contacto</h1>
                        </div>


                        <div className="description-container-contacto">
                            <p>
                            ¿Tienes dudas? No te preocupes. Envíanos un email, escríbenos por chat o háblanos a través de nuestras redes sociales y te ayudaremos a resolver todas las preguntas que tengas sobre el servicio que ofrecemos.
                            </p>
                        </div>

                        <div className="form-contacto">

                            {this.state.success ? <Success/> : ""}
                            <form method="post">
                                    <div   div className="form-group">
                                        
                                        {/* <label htmlFor="nombre">Nombre</label> */}
                                        <input type="text" className="form-group" id="nombre" name="nombre" placeholder="Nombre" onChange={this.handleChange} value={this.state.form.nombre}/>

                                    </div>

                                    <div className="form-group">

                                        {/* <label htmlFor="email">Email</label> */}
                                        <input type="text"  className="form-group" id="email" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.form.email}/>

                                    </div>

                                    <div className="form-group">

                                    {/* <label htmlFor="email">Email</label> */}
                                    <input type="text"  className="form-group" id="telefono" name="telefono" placeholder="Número de teléfono" onChange={this.handleChange} value={this.state.form.telefono}/>

                                    </div>
                                    
                                    <div className="form-group">
                                    {/* <label htmlFor="mensaje">Mensaje</label> */}
                                    <textarea name="mensaje" id="mensaje" cols="30" rows="10"  className="form-group" placeholder="Mensaje" onChange={this.handleChange} value={this.state.form.mensaje}></textarea>

                                    </div>
                                
                                    <button type="submit" name="login_b" id="login_b" onClick={ this.register }>ENVIAR</button>
                            </form>
                        </div>

                        
                    </div>
 
                </div>
            </React.Fragment>
        );
    }
}

export default Contacto;