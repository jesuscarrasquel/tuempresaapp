// import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Llc from "../pages/Llc";
import Inc from "../pages/Inc";
import CuentaBank from "../pages/CuentaBank";
import Servicios from "../pages/Servicios";
import Blog from "../pages/Blog";
import Contacto from "../pages/Contacto";
import Formulario from "../pages/formulario/Formulario";
import Layout from "./Layout";
import "../assets/styles/App.css";

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/llc" component={Llc} />
            <Route exact path="/inc" component={Inc} />
            <Route exact path="/cuenta" component={CuentaBank} />
            <Route exact path="/servicios" component={Servicios} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contacto" component={Contacto} />
            <Route exact path="/formulario" component={Formulario} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
