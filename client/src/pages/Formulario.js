import React from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Label } from "reactstrap";
import { sendEmail } from '../api/peticiones';
import "../assets/styles/formulario/formulario.css";
import "../assets/styles/formulario/formularioDesktop.css";

import Logo from '../assets2/logo-sinfondo2.png';

const Formulario = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { firstname, secondname, lastname, email, nombre1, nombre2, nombre3, passport, rama, selfie } = data;
    const type = "register";
 
    const f = new FormData();
    f.append("firstname", firstname);
    f.append("secondname", secondname);
    f.append("lastname", lastname);
    f.append("email", email);
    f.append("nombre1", nombre1);
    f.append("nombre2", nombre2);
    f.append("nombre3", nombre3);
    f.append("rama", rama);

    for(const item in passport){
      f.append(`passport-${item}`, passport[item])
    }

    const pass_length = passport.length;
    f.append('cantidad_pass', pass_length);
    f.append("selfie", selfie[0]);
    f.append("type", type);  
    
    const boton = document.getElementById("boton-enviar");
    boton.disabled = true;

    const res_email= await sendEmail(f);
    console.log(res_email, data);

  };

  return (
    <div id="formulario">

      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="header-formulario">

        <div className="company-name">
          <span>Tu Empresa US</span>
          <img src={Logo} alt="Tu empresa US Logo" className="logo" />
        </div>

        <div className="title">
          <h1>Requerimientos para la solicitud de apertura de empresa en los Estados Unidos</h1>

          <hr />
        </div>

      </div>

        <Row className="contenido-formulario">
          <Col xs="12" md="12">
              <Row>
                <Col md="12" className="mb-4">
                  <h2 htmlFor="">
                   Información personal
                  </h2>
                  
                  <hr />
                </Col>
              </Row>
          

          <Row className="mb-4 input-form">
 
              <Row className="mb-4">
                <Col md="3" xs="12">
                  <input
                    {...register("firstname", { required: true })}
                    type="text"
                    placeholder="Primer nombre*"
                  />

                   {errors.firstname && <span className="danger">Este campo es requerido</span>}
                </Col>
                <Col md="3" xs="12">
                  <input
                    {...register("secondname", { required: true })}
                    type="text"
                    placeholder="Segundo nombre*"
                  />

                   {errors.secondname && <span className="danger">Este campo es requerido</span>}
                </Col>
                <Col md="3" xs="12">
                  <input
                    {...register("lastname", { required: true })}
                    type="text"
                    placeholder="Apellidos*"
                  />

                   {errors.lastname && <span className="danger">Este campo es requerido</span>}
                </Col>
                <Col md="3" xs="12">
                  <input
                    {...register("email", { required: true })}
                    type="text"
                    placeholder="Correo electrónico*"
                  />

                   {errors.email && <span className="danger">Este campo es requerido</span>}
                </Col>
              </Row>
              <Row>
              </Row>
            </Row>

            <Row className="mb-4 input-form">
              <Row>
                <Col md="12" xs="12" className="mb-4">
                  <Label htmlFor="">
                    Foto del pasaporte de los solicitantes. (Adjuntar archivo)
                  </Label>
                </Col>
              </Row>
              <Row>
                <Col md="12" xs="12">
                  <input
                    {...register("passport", { required: true })}
                    type="file"
                    multiple
                    accept="image/png, .jpeg, .jpg, image/gif"
                  />

                   {errors.passport && <span className="danger">Este campo es requerido</span>}
                </Col>
              </Row>
              <Row>
              </Row>
            </Row>

            <Row className="mb-4 input-form">
              <Row>
                <Col md="12" xs="12" className="mb-4">
                  <Label htmlFor="">
                    Foto selfie con pasaporte en mano del solicitante. (Adjuntar
                    archivo)
                  </Label>
                </Col>
              </Row>
              <Row>
                <Col md="12" xs="12">
                  <input
                    {...register("selfie", { required: true })}
                    type="file"
                    accept="image/png, .jpeg, .jpg, image/gif"
                  />
                  <br />
                  {errors.selfie && <span className="danger">Este campo es requerido</span>}
                </Col>
              </Row>
            </Row>

            <Row className="input-form">
              <Row className="mb-4">
                <Col md="12" xs="12">
                  <Label htmlFor="">
                    Proporcionar 3 opciones de nombre para la empresa y el ramo
                    de actividad de la misma. (Colocar solo 3 opciones)
                  </Label>
                </Col>
              </Row>
              <Row className="mb-2">
                {/* <Col md="2">
                  <Label>Primer nombre</Label>
                </Col> */}
                <Col md="3" xs="12">
                  <input {...register("nombre1", { required: true })} type="text" placeholder="1º nombre"/>
                  <br />
                  {errors.nombre1 && <span className="danger">Este campo es requerido</span>}
                </Col>
                <Col md="3" xs="12">
                  <input {...register("nombre2", { required: true })} type="text" placeholder="2º nombre" />
                  <br />
                  {errors.nombre2 && <span className="danger">Este campo es requerido</span>}
                </Col>
                <Col md="3" xs="12">
                  <input {...register("nombre3", { required: true })} type="text" placeholder="3º nombre" />
                  <br />
                  {errors.nombre3 && <span className="danger">Este campo es requerido</span>}
                </Col>
                <Col md="3" xs="12">
                  <input {...register("rama", { required: true })} type="text" placeholder="Ramo de la actividad" />
                  <br />
                  {errors.rama && <span className="danger">Este campo es requerido</span>}
                </Col>
              </Row>
              
            </Row>

            <Row>
                <Col>
                    <p>
                    Nuestros métodos de pago son: Wire Transfer, Zelle, Criptomonedas, Paypal o efectivo en la ciudad de Caracas.
                    <br /> <br />

                    Una vez confirmemos la identidad puede proceder a realizar el pago.

                    <br />  <br />

                    Para iniciar el trámite debe abonar el 50% del plan seleccionado, el restante lo debe dar al finalizar el trámite. 

                    <br />  <br />
                  
                    Una vez confirmado el abono el trámite iniciará, tiene una duración normalmente de 10 a 15 días hábiles. 

                    <br /> <br />
                    </p>
               
                </Col>
            </Row>

            <Row>
              <Col md="12">
                <input type="submit" class="btn btn-dark" id="boton-enviar" />
              </Col>
            </Row>

          </Col>
        </Row>
      </form>
    </div>
  );
};

export default Formulario;
