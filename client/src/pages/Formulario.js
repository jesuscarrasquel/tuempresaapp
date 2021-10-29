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
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    const { firstName, lastName, email, firstCompanyName, secondCompanyName, thirdCompanyName, passport, plan, actividad, selfie, pagos } = data;
    const type = "formulario";
 
    console.log(data, "data")
    const f = new FormData();
    f.append("firstName", firstName);
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
    sociosState: [],
    firstName: false,
    lastName: false,
    email: false,
    firstCompanyName: false,
    secondCompanyName: false,
    thirdCompanyName: false,
  });

  const classes = {
    focusInputfirstName: state.firstName ? "form__label active" : "form__label",
    focusInputsecondName: state.secondName ? "form__label active" : "form__label",
    focusInputlastName: state.lastName ? "form__label active" : "form__label",
    focusInputCorreo: state.email ? "form__label active" : "form__label",
    focusInputfirstCompanyName: state.firstCompanyName ? "form__label active" : "form__label",
    focusInputsecondCompanyName: state.secondCompanyName ? "form__label active" : "form__label",
    focusInputthirdCompanyName: state.thirdCompanyName ? "form__label active" : "form__label",

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
const [socios, setSocios] = useState(2);

const agregarSocio = () => {
  setSocios(socios + 1 );
  const newPartnerFirstName = document.getElementById("newPartner__firstName") 
  const newPartnerSecondName = document.getElementById("newPartner__secondName") 
  const newPartnerEmail = document.getElementById("newPartner__email") 
  // const content = `<div className='form__div'> <input {${{...register('firstName', { required: true })}}} type='text' className='form__input' placeholder='' id='firstName' onBlur=${{handleInput}} onClick=${ () => setState({...state, firstName: true}) } /> <label for='firstName' className={${classes.focusInputfirstName}} onClick={${() => setState({...state, firstName: true})}}>Primer nombre*</label> <div className='validacion-contenedor'> {${errors.firstName && <span className='danger'>Este campo es requerido</span>}} </div> </div>`
  // newPartnerFirstName.innerHTML = content
  console.log(socios, "socios")

  // Primer Nombre

  const divFirstName = document.createElement("div")
  divFirstName.setAttribute("class", "form__div")

  const inputFirstName = document.createElement("input")
  inputFirstName.setAttribute("class", "form__input")
  inputFirstName.id = `firstName__${socios}`
  inputFirstName.name = `firstName__${socios}`
  
  const labelFirstName = document.createElement("label")
  labelFirstName.setAttribute("class", `${classes.focusInputfirstName}`)
  labelFirstName.setAttribute("for", `firstName__${socios}`)
  labelFirstName.textContent = "Primer Nombre"
  
  divFirstName.appendChild(inputFirstName)
  newPartnerFirstName.appendChild(divFirstName)
  divFirstName.appendChild(labelFirstName)

  // setState({
  //   ...state,
  //   sociosState: [...socios, ]
  // })

  // document.addEventListener('onblur', handleInput)

  // Segundo Nombre
  // const divSecondName = document.createElement("div")
  // divSecondName.setAttribute("class", "form__div")

  // const inputSecondName = document.createElement("input")
  // inputSecondName.setAttribute("class", "form__input")
  // inputSecondName.setAttribute("onblur", handleInput)
  // inputSecondName.id = "firstName__second"

  // const labelSecondName = document.createElement("label")
  // labelSecondName.setAttribute("class", `${classes.focusInputfirstName}`)
  // labelSecondName.setAttribute("for", `firstName__second`)
  // labelSecondName.textContent = "Segundo Nombre"

  // divSecondName.appendChild(inputSecondName)
  // newPartnerSecondName.appendChild(divSecondName)
  // divSecondName.appendChild(labelSecondName)

  // Correo
  // const divEmail = document.createElement("div")
  // divEmail.setAttribute("class", "form__div")

  // const inputEmail = document.createElement("input")
  // inputEmail.setAttribute("class", "form__input")
  // inputEmail.setAttribute("onblur", handleInput)
  // inputEmail.id = "firstName__second"

  // const labelEmail = document.createElement("label")
  // labelEmail.setAttribute("class", `${classes.focusInputfirstName}`)
  // labelEmail.setAttribute("for", `firstName__second`)
  // labelEmail.textContent = "Correo electrónico"

  // divEmail.appendChild(inputEmail)
  // newPartnerEmail.appendChild(divEmail)
  // divEmail.appendChild(labelEmail)


}

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
          
              </Row>

              {/* Agregar socio */}

                {/* <Row>
                    <Col md="3" xs="12">
                    
                      <div className="newPartner" id="newPartner__firstName"></div> 

                    </Col>
                    <Col md="3" xs="12">
                    
                      <div className="newPartner" id="newPartner__secondName"></div> 

                    </Col>
                    <Col md="3" xs="12">
                    
                      <div className="newPartner" id="newPartner__email"></div> 

                    </Col>
                </Row>

                <Row className="mb-4 input-form">

                  <Col md="3" xs="12">

                    <i class="fas fa-plus-circle" onClick={agregarSocio}></i>
                  
                  </Col>
            
                  <hr />
                </Row> */}

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
