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
    const { firstname, secondname, lastname, email, nombre1, nombre2, nombre3, passport, rama, selfie, pagos } = data;
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

    const res_email= await sendEmail(f);
    console.log(res_email, data);

  };

  const [ firstName, setfirstName ] = useState(false)
  const [ secondName, setSecondName ] = useState(false)
  const [ lastName, setThirdName ] = useState(false)
  const [ firstCompanyName, setFirstCompanyName ] = useState(false)
  const [ secondCompanyName, setSecondCompanyName ] = useState(false)
  const [ thirdCompanyName, setThirdCompanyName ] = useState(false)
  const [ rama, setRama ] = useState(false)
  
  const classes = {
    focusInputFirstName: firstName ? "form__label active" : "form__label",
    focusInputSecondName: secondName ? "form__label active" : "form__label",
    focusInputLastName: lastName ? "form__label active" : "form__label",
    focusInputfirstCompanyName: firstCompanyName ? "form__label active" : "form__label",
    focusInputsecondCompanyName: secondCompanyName ? "form__label active" : "form__label",
    focusInputthirdCompanyName: thirdCompanyName ? "form__label active" : "form__label",
    focusInputrama: rama ? "form__label active" : "form__label",

}

// const handleInput = () => {
//   setFocusState(!focusState)
// }

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
                      {...register("firstname", { required: true })}
                      type="text"
                      className="form__input"
                      placeholder=""
                      id="firstname"
                      onBlur={() => setfirstName(!firstName)}
                      // onClick={() => setfirstName(!firstName)}
                    />
                    <label for="firstname" className={classes.focusInputFirstName} onClick={() => setfirstName(!firstName)}>Primer nombre*</label>

                    <div className="validacion-contenedor">
                      {errors.firstname && <span className="danger">Este campo es requerido</span>}
                    </div>


                  </div>
                </Col>
                <Col md="3" xs="12">
                  <div className="form__div">

                  <input
                    {...register("secondname", { required: true })}
                    type="text"
                    className="form__input"
                    placeholder=""
                    id="secondname"
                    onBlur={() => setSecondName(!secondName)}

                  />
                    <label for="secondname" className={classes.focusInputSecondName} onClick={() => setSecondName(!secondName)}>Segundo nombre*</label>

                    <div className="validacion-contenedor">
                      {errors.secondname && <span className="danger">Este campo es requerido</span>}
                      
                    </div>
                  </div>
                </Col>
                <Col md="3" xs="12">

                  <div className="form__div">

                    <input
                      {...register("lastname", { required: true })}
                      type="text"
                      className="form__input"
                      placeholder=""
                      id="lastname"
                      onBlur={() => setThirdName(!lastName)}
                    />
                    <label for="lastname" className={classes.focusInputLastName} onClick={() => setThirdName(!lastName)}>Apellidos*</label>                  
                    <div className="validacion-contenedor">
                      
                      {errors.lastname && <span className="danger">Este campo es requerido</span>}
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
                    />
                    <label for="" className="form__label">Correo electrónico*</label>

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
                {/* <Row>
                  <Col md="12" xs="12">
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
                </Row> */}
                <Row>
                </Row>
            </Row>

              <Row className="mb-4 input-form">
                {/* <Row>
                  <Col md="3" className="iconos-archivos">
                    <img src={selfieIcon} alt="Selfie Icono" />
                  </Col>
                </Row> */}
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
                {/* <Row>
                  <Col md="12" xs="12" className="mb-5">
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
                </Row> */}

                <hr />
            </Row>

              <Row className="mb-4 input-form">
                <Row className="mb-4">
                  <Col md="12" xs="12">
                    <Label htmlFor="">
                      Proporcionar 3 opciones de nombre para la empresa y el ramo
                      de actividad de la misma. (Colocar solo 3 opciones)
                    </Label>
                  </Col>
                </Row>
                <Row className="mb-1">
      
                  <Col md="3" xs="12">
                    <div className="form__div">
                      <input {...register("nombre1", { required: true })} 
                      type="text" 
                      className="form__input"
                      placeholder="" 
                      id="fistCompanyName"
                      onBlur={() => setFirstCompanyName(!firstCompanyName)}
                      />
                      <label className="form__label" for="fistCompanyName" onClick={() => setFirstCompanyName(!firstCompanyName)}>1º nombre*</label>
                      <br />

                      <div className="validacion-contenedor">

                      {errors.nombre1 && <span className="danger">Este campo es requerido</span>}
                      </div>

                    </div>
                  </Col>
                  <Col md="3" xs="12">

                    <div className="form__div">

                      <input {...register("nombre2", { required: true })} 
                      type="text"
                      className="form__input"
                      placeholder=""
                      id="secondCompanyName"
                      onBlur={() => setSecondCompanyName(!secondCompanyName)}
                      />

                      <label className="form__label" onClick={() => setSecondCompanyName(!secondCompanyName)} for="secondCompanyName">2º nombre*</label>
                      <br />

                      <div className="validacion-contenedor">
                        
                      {errors.nombre2 && <span className="danger">Este campo es requerido</span>}
                        </div>

                    </div>
                  </Col>
                  <Col md="3" xs="12">
                    <div className="form__div">

                      <input {...register("nombre3", { required: true })} 
                      type="text" 
                      className="form__input"
                      placeholder=""
                      id="thirdCompanyName"
                      onBlur={() => setThirdCompanyName(!thirdCompanyName)}
                      />

                      <label className="form__label" for="thirdCompanyName" onClick={() => setThirdCompanyName(!thirdCompanyName)}>3º nombre*</label>
                      <br />

                      <div className="validacion-contenedor">
                        
                      {errors.nombre3 && <span className="danger">Este campo es requerido</span>}
                        </div>

                    </div>
                  </Col>
                  {/* <Col md="3" xs="12">

                    <div className="form__div">

                      <input {...register("rama", { required: true })} 
                      type="text" 
                      className="form__input"
                      placeholder="" />
                      <div className="form__label">Ramo de la actividad*</div>
                      <br />

                      <div className="validacion-contenedor">
                        
                      {errors.rama && <span className="danger">Este campo es requerido</span>}
                        </div>
                    </div>
                  </Col> */}
                </Row>

              
            </Row>

              <Row className="mb-4 input-form">

                  <Col md="3" xs="12" className="mb-5">

                    <div className="form__div">

                      <input {...register("rama", { required: true })} 
                      type="text" 
                      className="form__input"
                      placeholder=""
                      id="rama"
                      onBlur={() => setRama(!rama)}
                      />
                      <label className="form__label" for="rama" onClick={() => setRama(!rama)}>Ramo de la actividad*</label>
                      <br />

                      <div className="validacion-contenedor">
                        
                      {errors.rama && <span className="danger">Este campo es requerido</span>}
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

                      <select {...register("pagos", { required: true, pattern: { value: /!seleccionar/ } })} className="form__input">
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
                {/* <Row>
                  <Col xs="12" md="3">
                    <div className="form__div">

                      <select {...register("pagos", { required: true, pattern: { value: /!seleccionar/ } })} className="form__input">
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
                </Row> */}
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

          </Col>
        </Row>
      </form>
    </div>
  );
};

export default Formulario;
