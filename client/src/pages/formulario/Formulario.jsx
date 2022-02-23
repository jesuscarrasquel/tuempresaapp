import "./formulario.css";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { useState } from "react";
import { Upload, DoneOutline, Clear, DeleteOutline } from "@mui/icons-material";
import { sendEmail } from "../../api/peticiones";
import Thumb from "../../components/Thumb";
// import Logo from "../assets2/logo-sinfondo2.png";
import Logo from "../../assets2/logo-sinfondo2.png";
export default function Formulario() {
  const [successSent, setSuccessSent] = useState(false);
  const onSubmit = async (data) => {
    const {
      firstName,
      lastName,
      email,
      firstCompanyName,
      secondCompanyName,
      thirdCompanyName,
      passport,
      plan,
      actividad,
      selfie,
      pagos,
    } = data;
    const type = "formulario";

    console.log(data, "data");
    const f = new FormData();
    let arrSocios = data.partners;
    let cantidadSocios = arrSocios.length;
    for (let i = 0; i < arrSocios.length; i++) {
      console.log(arrSocios[i].firstName);
      f.append("firstName" + i, arrSocios[i].firstName);
      f.append("lastName" + i, arrSocios[i].lastName);
      f.append("email" + i, arrSocios[i].email);
      f.append("passport" + i, arrSocios[i].passport);
      f.append("selfie" + i, arrSocios[i].selfie);
    }

    f.append("cantidadSocios", cantidadSocios);

    f.append("firstCompanyName", firstCompanyName);
    f.append("secondCompanyName", secondCompanyName);
    f.append("thirdCompanyName", thirdCompanyName);
    f.append("plan", plan);
    f.append("actividad", actividad);
    f.append("pagos", pagos);

    const res = await sendEmail(f);

    console.log(res);
  };
  return (
    <div className="formulario">
      <Formik
        initialValues={{
          partners: [
            {
              firstName: "",
              lastName: "",
              email: "",
              passport: undefined,
              selfie: undefined,
            },
          ],

          firstCompanyName: "",
          secondCompanyName: "",
          thirdCompanyName: "",
          plan: "",
          actividad: "",
          pagos: "",
        }}
        validate={(values) => {
          let error = {};
          console.log(values);
          //   Validacion nombre
          for (let i = 0; i < values.partners; i++) {
            if (!values.partners[i].firstName) {
              error.partners.firstName = "Por favor ingresa un nombre";
            }
            //   Validacion apellido
            // if (!values.partners[i].lastName) {
            //   error.lastName = "Por favor ingresa tus apellidos";
            // }
            // //   Validacion correo
            // if (!values.partners[i].email) {
            //   error.email = "Por favor ingresa un correo";
            // }
            // //   Validacion pasaporte
            // if (!values.partners[i].passport) {
            //   error.passport = "Por favor ingresa tu pasaporte";
            // }

            // //   Validacion correo
            // if (!values.partners[i].selfie) {
            //   error.selfie = "Por favor ingresa una foto tipo selfie";
            // }
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
          if (!values.pagos) {
            error.pagos = "Por favor selecciona una opción";
          }

          return error;
        }}
        onSubmit={(values, { resetForm }) => {
          // dispatch(loginUserAction(values))
          onSubmit(values);
          resetForm();
          setSuccessSent(true);
          setTimeout(() => setSuccessSent(false), 5000);
        }}
      >
        {({ errors, isSubmitting, values, setFieldValue }) => (
          <Form>
            <div className="header__formulario">
              <div className="company-name">
                <span>Tu Empresa US</span>
                <img src={Logo} alt="Tu empresa US Logo" className="logo" />
              </div>
              <h2>
                Requerimientos para la solicitud de apertura de empresa en los
                Estados Unidos
              </h2>
            </div>
            <div className="wrapper__formulario">
              <FieldArray name="partners">
                {({ insert, remove, push }) => (
                  <div>
                    {values.partners.length > 0 &&
                      values.partners.map((partner, index) => (
                        <div key={index} className="array__info">
                          <div className="basic__info">
                            <div className="formulario__input">
                              <label htmlFor={`partners.${index}.firstName`}>
                                Primer Nombre
                              </label>
                              <Field
                                type="text"
                                name={`partners.${index}.firstName`}
                                id={`partners.${index}.firstName`}
                                placeholder="Escribe tu nombre aquí..."
                              />
                              <ErrorMessage
                                name={`partners.${index}.firstName`}
                                component={() => (
                                  <div className="error">
                                    {errors.partners.firstName}
                                  </div>
                                )}
                              />
                            </div>
                            <div className="formulario__input">
                              <label htmlFor="">Apellidos</label>
                              <Field
                                type="text"
                                name={`partners.${index}.lastName`}
                                id={`partners.${index}.lastName`}
                                placeholder="Escribe tu apellido aquí..."
                              />
                              <ErrorMessage
                                name={`partners.${index}.lastName`}
                                component={() => (
                                  <div className="error">
                                    {errors.partners.index.lastName}
                                  </div>
                                )}
                              />
                            </div>
                            <div className="formulario__input">
                              <label htmlFor="">Correo electrónico</label>
                              <Field
                                type="text"
                                name={`partners.${index}.email`}
                                id={`partners.${index}.email`}
                                placeholder="Escribe tu correo aquí..."
                              />
                              <ErrorMessage
                                name={`partners.${index}.email`}
                                component={() => (
                                  <div className="error">
                                    {errors.partners.index.email}
                                  </div>
                                )}
                              />
                            </div>
                          </div>
                          <div className="file__container">
                            <div className="formulario__file">
                              <span>Fotos del pasaporte.</span>
                              <label htmlFor={`partners.${index}.passport`}>
                                <Upload className="iconFile" />
                              </label>
                              <input
                                type="file"
                                name={`partners.${index}.passport`}
                                id={`partners.${index}.passport`}
                                onChange={(event) => {
                                  setFieldValue(
                                    `partners.${index}.passport`,
                                    event.currentTarget.files[0]
                                  );
                                }}
                              />
                              <Thumb file={values.partners[index].passport} />
                              <ErrorMessage
                                name={`partners.${index}.passport`}
                                component={() => (
                                  <div className="error">
                                    {errors.partners.passport}
                                  </div>
                                )}
                              />
                            </div>
                            <div className="formulario__file">
                              <span>
                                Foto tipo selfie del solicitante mostrando el
                                pasaporte.
                              </span>

                              <label htmlFor={`partners.${index}.selfie`}>
                                <Upload className="iconFile" />
                              </label>
                              <input
                                type="file"
                                name={`partners.${index}.selfie`}
                                id={`partners.${index}.selfie`}
                                onChange={(event) => {
                                  setFieldValue(
                                    `partners.${index}.selfie`,
                                    event.currentTarget.files[0]
                                  );
                                }}
                              />
                              <Thumb file={values.partners[index].selfie} />
                              <ErrorMessage
                                name={`partners.${index}.selfie`}
                                component={() => (
                                  <div className="error">
                                    {errors.partners.index.selfie}
                                  </div>
                                )}
                              />
                            </div>
                            <div className="delete__container">
                              <button
                                type="button"
                                className="deleteButton"
                                onClick={() => remove(index)}
                              >
                                <DeleteOutline className="deleteIcon" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    <div className="button__formulario__container">
                      <button
                        type="button"
                        className="secondary"
                        onClick={() =>
                          push({
                            firstName: "",
                            lastName: "",
                            email: "",
                            passport: undefined,
                            selfie: undefined,
                          })
                        }
                      >
                        Agrega un socio
                      </button>
                    </div>
                  </div>
                )}
              </FieldArray>

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
                  <Field name="pagos" as="select">
                    <option value="Seleccionar">Seleccionar</option>
                    <option value="WireTransfer">WireTransfer</option>
                    <option value="Zelle">Zelle</option>
                    <option value="Criptomoneda">Criptomoneda</option>
                    <option value="Paypal">Paypal</option>
                    <option value="Otro">Otro</option>
                  </Field>
                  <ErrorMessage
                    name="pagos"
                    component={() => (
                      <div className="error">{errors.pagos}</div>
                    )}
                  />
                </div>
              </div>
              <div className="button__formulario__container">
                <button disabled={isSubmitting} type="submit">
                  Enviar
                </button>
              </div>
              {successSent && (
                <div className="success__div">
                  <DoneOutline className="iconSuccess" />
                  <span className="exito">
                    Tu formulario ha sido enviado exitosamente.
                  </span>
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
