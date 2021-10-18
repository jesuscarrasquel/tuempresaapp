import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Label } from "reactstrap";
import { sendEmail } from '../api/peticiones';
import "../assets/styles/formulario/formulario.css";
import "../assets/styles/formulario/formularioDesktop.css";

import passportIcon from '../assets/icons/icons8-passport-60.png';
import selfieIcon from '../assets/icons/icons8-selfie-60.png';
import paymentIcon from '../assets/icons/icons8-payment-64.png';
import alertIcon from '../assets/icons/exclamation-triangle-solid.svg';

import Logo from '../assets2/logo-sinfondo2.png';

const Formulario = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { firstName, secondName, lastName, email, firstCompanyName, secondCompanyName, thirdCompanyName, passport, plan, actividad, selfie, pagos } = data;
    const type = "formulario";
 
    const f = new FormData();
    f.append("firstName", firstName);
    f.append("secondName", secondName);
    f.append("lastName", lastName);
    f.append("email", email);
    f.append("firstCompanyName", firstCompanyName);
    f.append("secondCompanyName", secondCompanyName);
    f.append("thirdCompanyName", thirdCompanyName);
    f.append("plan", plan);
    f.append("actividad", actividad);
    f.append("pagos", pagos);

    for(const item in passport){
      f.append(`passport-${item}`, passport[item])
    }

    const pass_length = passport.length;
    f.append('cantidad_pass', pass_length);
    f.append("selfie", selfie[0]);
    f.append("type", type);  
    
    const boton = document.getElementById("boton-enviar");
    boton.disabled = true;

    setSuccessState(true)

    const res = await sendEmail(f);

    console.log(res)

  };

  const [state, setState] = useState({
    firstName: false,
    secondName: false,
    lastName: false,
    email: false,
    firstCompanyName: false,
    secondCompanyName: false,
    thirdCompanyName: false,
    rama: false,
  });

  const classes = {
    focusInputfirstName: state.firstName ? "form__label active" : "form__label",
    focusInputsecondName: state.secondName ? "form__label active" : "form__label",
    focusInputlastName: state.lastName ? "form__label active" : "form__label",
    focusInputCorreo: state.email ? "form__label active" : "form__label",
    focusInputfirstCompanyName: state.firstCompanyName ? "form__label active" : "form__label",
    focusInputsecondCompanyName: state.secondCompanyName ? "form__label active" : "form__label",
    focusInputthirdCompanyName: state.thirdCompanyName ? "form__label active" : "form__label",
    focusInputrama: state.rama ? "form__label active" : "form__label",

}

const handleInput = (e) => {

  if(e.target.value === "") {
    setState({
      ...state,
      [e.target.name]: false
    })
  }  
 
}

const [successState, setSuccessState] = useState(false);

  return (
    <div id="formulario">

      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="header-formulario">

        <div className="company-name">
          <span>Tu Empresa US</span>
          <img src={Logo} alt="Tu empresa US Logo" className="logo" />
        </div>

        <div className="title">
          <div>
            <h1>Requerimientos para la solicitud de apertura de empresa en los Estados Unidos</h1>

          </div>

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
                  <div className="form__div">
                    <input
                      {...register("firstName", { required: true })}
                      type="text"
                      className="form__input"
                      placeholder=""
                      id="firstName"
                      onBlur={handleInput}
                      onClick={() => setState({...state, firstName: true})}
                    />
                    <label for="firstName" className={classes.focusInputfirstName} onClick={() => setState({...state, firstName: true})}>Primer nombre*</label>

                    <div className="validacion-contenedor">
                      {errors.firstName && <span className="danger">Este campo es requerido</span>}
                    </div>


                  </div>
                </Col>
                <Col md="3" xs="12">
                  <div className="form__div">

                  <input
                    {...register("secondName", { required: true })}
                    type="text"
                    className="form__input"
                    placeholder=""
                    id="secondName"
                    onBlur={handleInput}
                    onClick={() => setState({...state, secondName: true})}
                  />
                    <label for="secondName" className={classes.focusInputsecondName} onClick={() => setState({...state, secondName: true})}>Segundo nombre*</label>

                    <div className="validacion-contenedor">
                      {errors.secondName && <span className="danger">Este campo es requerido</span>}
                      
                    </div>
                  </div>
                </Col>
                <Col md="3" xs="12">

                  <div className="form__div">

                    <input
                      {...register("lastName", { required: true })}
                      type="text"
                      className="form__input"
                      placeholder=""
                      id="lastName"
                      onBlur={handleInput}
                      onClick={() => setState({...state, lastName: true})}
                    />
                    <label for="lastName" className={classes.focusInputlastName} onClick={() => setState({...state, lastName: true})}>Apellidos*</label>                  
                    <div className="validacion-contenedor">
                      
                      {errors.lastName && <span className="danger">Este campo es requerido</span>}
                    </div>
                  </div>
                </Col>
                    
              
              </Row>

              <Row className="mb-4 input-form">

                <Col md="3" xs="12">

                  <div className="form__div">

                    <input
                      {...register("email", { required: true })}
                      type="text"
                      className="form__input"
                      placeholder=""
                      id="email"
                      onBlur={handleInput}
                      onClick={() => setState({...state, email: true})}
                    />
                    <label for="email" onClick={() => setState({...state, email: true})} className={classes.focusInputCorreo}>Correo electrónico*</label>

                    <div className="validacion-contenedor">

                      {errors.email && <span className="danger">Este campo es requerido</span>}
                      
                      </div>

                  </div>
                </Col>
                
                <hr />
              </Row>

              <Row>
              </Row>
            </Row>

              <Row className="mb-4 input-form">
          
                <Row className="align-items-center mb-2">
                  <Col md="1" xs="12" className="iconos-archivos">
                      <img src={passportIcon} alt="Pasaporte Icono" />
                    </Col>
                  <Col md="5" xs="12" className="mb-4 ml-4">
                    <Label htmlFor="">
                      Foto del pasaporte de los solicitantes.
                    </Label>
                  </Col>
                  <Col md="2" xs="12">
                    <input
                      {...register("passport", { required: true })}
                      type="file"
                      multiple
                      accept="image/png, .jpeg, .jpg, image/gif"
                    />

                      <div className="validacion-contenedor-file">

                        {errors.passport && <span className="danger">Este campo es requerido</span>}
                        
                        </div>
                  </Col>
                </Row>
           
                <Row>
                </Row>
            </Row>

              <Row className="mb-4 input-form">
              
                <Row className="align-items-center">
                  <Col md="1" xs="12" className="iconos-archivos">
                    <img src={selfieIcon} alt="Selfie Icono" />
                  </Col>
                  <Col md="5" xs="12" className="mb-4 ml-4">
                    <Label htmlFor="">
                      Foto tipo selfie del solicitante mostrando el pasaporte.
                    </Label>
                  </Col>
                  <Col md="2" xs="12" className="mb-5">
                    <input
                      {...register("selfie", { required: true })}
                      type="file"
                      accept="image/png, .jpeg, .jpg, image/gif"
                    />
                    <br />
                    <div className="validacion-contenedor-file">
                    {errors.selfie && <span className="danger">Este campo es requerido</span>}

                      </div>
                  </Col>
                </Row>

                <hr />
            </Row>

              <Row className="mb-4 input-form">
                <Row className="mb-4">
                  <Col md="12" xs="12">
                    <Label htmlFor="">
                      Proporcionar 3 opciones de nombre para la empresa.
                    </Label>
                  </Col>
                </Row>
                <Row className="mb-1">
      
                  <Col md="3" xs="12">
                    <div className="form__div">
                      <input {...register("firstCompanyName", { required: true })} 
                      type="text" 
                      className="form__input"
                      placeholder="" 
                      id="fistCompanyName"
                      onBlur={handleInput}
                      onClick={() => setState({...state, firstCompanyName: true})}
                      />
                      <label className={classes.focusInputfirstCompanyName} for="fistCompanyName" onClick={() => setState({...state, firstCompanyName: true})}>1º nombre*</label>
                      <br />

                      <div className="validacion-contenedor">

                      {errors.firstCompanyName && <span className="danger">Este campo es requerido</span>}
                      </div>

                    </div>
                  </Col>
                  <Col md="3" xs="12">

                    <div className="form__div">

                      <input {...register("secondCompanyName", { required: true })} 
                      type="text"
                      className="form__input"
                      placeholder=""
                      id="secondCompanyName"
                      onBlur={handleInput}
                      onClick={() => setState({...state, secondCompanyName: true})}
                      />

                      <label className={classes.focusInputsecondCompanyName} onClick={() => setState({...state, secondCompanyName: true})} for="secondCompanyName">2º nombre*</label>
                      <br />

                      <div className="validacion-contenedor">
                        
                      {errors.secondCompanyName && <span className="danger">Este campo es requerido</span>}
                        </div>

                    </div>
                  </Col>
                  <Col md="3" xs="12">
                    <div className="form__div">

                      <input {...register("thirdCompanyName", { required: true })} 
                      type="text" 
                      className="form__input"
                      placeholder=""
                      id="thirdCompanyName"
                      onBlur={handleInput}
                      onClick={() => setState({...state, thirdCompanyName: true})}
                      />

                      <label className={classes.focusInputthirdCompanyName} for="thirdCompanyName" onClick={() => setState({...state, thirdCompanyName: true})}>3º nombre*</label>
                      <br />

                      <div className="validacion-contenedor">
                        
                      {errors.thirdCompanyName && <span className="danger">Este campo es requerido</span>}
                        </div>

                    </div>
                  </Col>
         
                </Row>

              
            </Row>

              <Row className="mb-4 input-form">

                  <Col md="5" xs="12">
                    <Label htmlFor="">
                      Selecciona un plan:
                    </Label>
                  </Col>

                  <Col md="3" xs="12" className="mb-5">
                  <div className="form__div">

                    <select {...register("plan", { required: true, pattern: { value: /[^seleccionar]/ } })} className="form__input">
                      <option value="seleccionar">Seleccionar</option>
                      <option value="Basico">Básico</option>
                      <option value="Plus">Plus</option>
                      <option value="Corporativo">Corporativo</option>
                    </select>
                    <div className="validacion-contenedor">

                    {errors.plan && <span className="danger">Este campo es requerido</span>}
                    </div>

                  </div>

                    {/* <div className="form__div">

                      <input {...register("rama", { required: true })} 
                      type="text" 
                      className="form__input"
                      placeholder=""
                      id="rama"
                      onBlur={handleInput}
                      onClick={() => setState({...state, rama: true})}
                      />
                      <label className={classes.focusInputrama} for="rama" onClick={() => setState({...state, rama: true})}>Ramo de la actividad*</label>
                      <br />

                      <div className="validacion-contenedor">
                        
                      {errors.rama && <span className="danger">Este campo es requerido</span>}
                        </div>
                    </div> */}
                  </Col>
                

              </Row>

              
              <Row className="mb-4 input-form">

                  <Col md="5" xs="12">
                    <Label htmlFor="">
                      ¿Realizará actividad económica en los Estados Unidos?
                    </Label>
                  </Col>

                  <Col md="3" xs="12" className="mb-5">
                  <div className="form__div">

                    <select {...register("actividad", { required: true, pattern: { value: /[^seleccionar]/ } })} className="form__input">
                      <option value="seleccionar">Seleccionar</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                      <option value="No estoy seguro">No estoy seguro</option>
                    </select>
                    <div className="validacion-contenedor">

                    {errors.actividad && <span className="danger">Este campo es requerido</span>}
                    </div>

                  </div>

                  </Col>
                
              </Row>

              

              <Row className="mb-4 mt-4 input-form">
                <Row className="mb-4 align-items-center">
                  <Col xs="12" md="1">
                    <img src={paymentIcon} alt="Pago icono" />
                  </Col>
                  <Col md="5" xs="12">
                    <Label htmlFor="">
                      Selecciona un método de pago:
                    </Label>
                  </Col>
                  <Col xs="12" md="3">
                    <div className="form__div">

                      <select {...register("pagos", { required: true, pattern: { value: /[^seleccionar]/ } })} className="form__input">
                        <option value="seleccionar">Seleccionar</option>
                        <option value="Wiretransfer">Wire Transfer</option>
                        <option value="Zelle">Zelle</option>
                        <option value="Criptomonedas">Criptomonedas</option>
                        <option value="Paypal">Paypal</option>
                        <option value="other">Otro</option>
                      </select>
                      <div className="validacion-contenedor">

                      {errors.pagos && <span className="danger">Este campo es requerido</span>}
                      </div>

                    </div>
                  </Col>
                </Row>
         
              </Row>

              <Row>
                <Col className="alert-container">
                  <div className="alert-container-icon">

                    <img src={alertIcon} alt="alert-icon" className="alert-icon"/>
                  </div>
                  <div className="alert-nota">

                      <p className="nota">
                        En un lapso no mayor a 24 horas será contactado por un ejecutivo de TuEmpresa.US para guiarle en los siguientes pasos.
                      </p>
                  </div>
               
                </Col>
              </Row>

              <Row>
              <Col md="12">
                <input type="submit" class="btn btn-primary boton-enviar" id="boton-enviar" value="Enviar" />
              </Col>
            </Row>

            {
              successState && (
                <Row className='mt-4'>
                <Col className="success-container">
                  <div className="alert-container-icon">

                    <img src={alertIcon} alt="alert-icon" className="alert-icon"/>
                  </div>
                  <div className="alert-nota">

                      <p className="nota">
                        Su Información se ha enviado exitosamente.
                      </p>
                  </div>
               
                </Col>
              </Row>
              )
            }

          </Col>
        </Row>
      </form>
    </div>
  );
};

export default Formulario;
