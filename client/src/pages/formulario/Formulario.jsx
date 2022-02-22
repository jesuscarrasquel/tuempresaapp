import "./formulario.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { Upload } from "@mui/icons-material";
export default function Formulario() {
  const [successSent, setSuccessSent] = useState(false);
  return (
    <div className="formulario">
      <Formik
        initialValues={{
          username: "",
          lastName: "",
          email: "",
          passport: "",
          selfie: "",
          firstCompanyName: "",
          secondCompanyName: "",
          thirdCompanyName: "",
          plan: "",
          actividad: "",
          metodoPago: "",
        }}
        validate={(values) => {
          let error = {};
          //   Validacion nombre
          if (!values.username) {
            error.username = "Por favor ingresa un nombre";
          }
          //   Validacion apellido
          if (!values.lastName) {
            error.lastName = "Por favor ingresa tus apellidos";
          }
          //   Validacion correo
          if (!values.email) {
            error.email = "Por favor ingresa un correo";
          }
          //   Validacion pasaporte
          if (!values.passport) {
            error.passport = "Por favor ingresa tu pasaporte";
          }

          //   Validacion correo
          if (!values.selfie) {
            error.selfie = "Por favor ingresa una foto tipo selfie";
          }
          //   Validacion correo
          if (!values.firstCompanyName) {
            error.firstCompanyName =
              "Por favor ingresa un nombre para tu empresa";
          }
          //   Validacion correo
          if (!values.secondCompanyName) {
            error.secondCompanyName =
              "Por favor ingresa un nombre para tu empresa";
          }
          //   Validacion correo
          if (!values.thirdCompanyName) {
            error.thirdCompanyName =
              "Por favor ingresa un nombre para tu empresa";
          }
          //   Validacion correo
          if (!values.plan) {
            error.plan = "Por favor selecciona una opción";
          }
          //   Validacion correo
          if (!values.actividad) {
            error.actividad = "Por favor selecciona una opción";
          }
          //   Validacion selfie
          if (!values.metodoPago) {
            error.metodoPago = "Por favor selecciona una opción";
          }

          return error;
        }}
        onSubmit={(values, { resetForm }) => {
          // dispatch(loginUserAction(values))
          console.log("valores enviado");
          resetForm();
          setSuccessSent(true);
        }}
      >
        {({ errors }) => (
          <Form>
            <div className="header__formulario">
              <h2>
                Requerimientos para la solicitud de apertura de empresa en los
                Estados Unidos
              </h2>
            </div>
            <div className="wrapper__formulario">
              <div className="basic__info">
                <div className="formulario__input">
                  <label htmlFor="">Primer Nombre</label>
                  <Field
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Escribe tu nombre aquí..."
                  />
                  <ErrorMessage
                    name="username"
                    component={() => (
                      <div className="error">{errors.username}</div>
                    )}
                  />
                </div>
                <div className="formulario__input">
                  <label htmlFor="">Apellidos</label>
                  <Field
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Escribe tu apellido aquí..."
                  />
                  <ErrorMessage
                    name="lastName"
                    component={() => (
                      <div className="error">{errors.lastName}</div>
                    )}
                  />
                </div>
                <div className="formulario__input">
                  <label htmlFor="">Correo electrónico</label>
                  <Field
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Escribe tu correo aquí..."
                  />
                  <ErrorMessage
                    name="email"
                    component={() => (
                      <div className="error">{errors.email}</div>
                    )}
                  />
                </div>
              </div>
              <div className="file__container">
                <div className="formulario__file">
                  <span>Fotos del pasaporte de los solicitantes.</span>
                  <label htmlFor="passport">
                    <Upload className="iconFile" />
                  </label>
                  <input type="file" name="passport" id="passport" multiple />
                  <ErrorMessage
                    name="passport"
                    component={() => (
                      <div className="error">{errors.passport}</div>
                    )}
                  />
                </div>
                <div className="formulario__file">
                  <span>
                    Foto tipo selfie de los socitantes mostrando el pasaporte.
                  </span>

                  <label htmlFor="selfie">
                    <Upload className="iconFile" />
                  </label>
                  <input type="file" name="selfie" id="selfie" multiple />
                  <ErrorMessage
                    name="selfie"
                    component={() => (
                      <div className="error">{errors.selfie}</div>
                    )}
                  />
                </div>
              </div>
              <div className="companyname__container">
                <div className="title__company">
                  <h3>Proporcionar 3 opciones de nombre para la empresa.</h3>
                </div>
                <div className="content__company">
                  <div className="formulario__input">
                    <label htmlFor="">1st Nombre</label>
                    <Field
                      type="text"
                      name="firstCompanyName"
                      id="firstCompanyName"
                      placeholder="Escribe aquí..."
                    />
                    <ErrorMessage
                      name="firstCompanyName"
                      component={() => (
                        <div className="error">{errors.firstCompanyName}</div>
                      )}
                    />
                  </div>
                  <div className="formulario__input">
                    <label htmlFor="">2nd Nombre</label>
                    <Field
                      type="text"
                      name="secondCompanyName"
                      id="secondCompanyName"
                      placeholder="Escribe aquí..."
                    />
                    <ErrorMessage
                      name="secondCompanyName"
                      component={() => (
                        <div className="error">{errors.secondCompanyName}</div>
                      )}
                    />
                  </div>
                  <div className="formulario__input">
                    <label htmlFor="">3rd Nombre</label>
                    <Field
                      type="text"
                      name="thirdCompanyName"
                      id="thirdCompanyName"
                      placeholder="Escribe aquí..."
                    />
                    <ErrorMessage
                      name="thirdCompanyName"
                      component={() => (
                        <div className="error">{errors.thirdCompanyName}</div>
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="select__container">
                <div className="formulario__input">
                  <label htmlFor="">Selecciona un plan</label>
                  <Field name="plan" as="select">
                    <option value="Seleccionar">Seleccionar</option>
                    <option value="Plus">Plus</option>
                    <option value="Corporativo">Corporativo</option>
                  </Field>
                  <ErrorMessage
                    name="plan"
                    component={() => <div className="error">{errors.plan}</div>}
                  />
                </div>
                <div className="formulario__input">
                  <label htmlFor="">
                    ¿Realizará actividad econoómica en los Estados Unidos?
                  </label>
                  <Field name="actividad" as="select">
                    <option value="Seleccionar">Seleccionar</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                    <option value="No estoy seguro">No estoy seguro</option>
                  </Field>
                  <ErrorMessage
                    name="actividad"
                    component={() => (
                      <div className="error">{errors.actividad}</div>
                    )}
                  />
                </div>
                <div className="formulario__input">
                  <label htmlFor="">Selecciona un método de pago</label>
                  <Field name="metodoPago" as="select">
                    <option value="Seleccionar">Seleccionar</option>
                    <option value="WireTransfer">WireTransfer</option>
                    <option value="Zelle">Zelle</option>
                    <option value="Criptomoneda">Criptomoneda</option>
                    <option value="Paypal">Paypal</option>
                    <option value="Otro">Otro</option>
                  </Field>
                  <ErrorMessage
                    name="metodoPago"
                    component={() => (
                      <div className="error">{errors.metodoPago}</div>
                    )}
                  />
                </div>
              </div>
              <div className="button__formulario__container">
                <button>Enviar</button>
              </div>
              {successSent && (
                <p className="exito">
                  Tu formulario ha sido enviado exitosamente.
                </p>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
