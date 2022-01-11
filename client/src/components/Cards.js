import React from "react";
import { Row, Col } from "reactstrap";
import "../assets/styles/home/cards.css";

const Cards = () => {
  return (
    <div id="cards">
      <Row className="cards">
        <Col md="12" xs="12" className="card-container mt-4">
          {/* <Col md="4" xs="12" className="badge">
                            <a href="#planes">
                                <div className="front">
                                        <h2>Plan Básico</h2>
                                </div>
                                <div className="back">
                                        <h4>Cuenta online o en PR</h4>
                                </div>
                            </a>
                        </Col> */}

          <Col md="4" xs="12" className="badge">
            <a href="#planes">
              <div className="front">
                <h2>Plan Plus</h2>
              </div>
              <div className="back">
                <h4>Cuenta en banco tradicional en US con Zelle Jurídico</h4>
              </div>
            </a>
          </Col>

          <Col md="4" xs="12" className="badge">
            <a href="#planes">
              <div class="front">
                <h2>Plan Corporativo</h2>
              </div>
              <div className="back">
                <h4>2 cuentas en banco tradicional con Zelle Jurídico</h4>
              </div>
            </a>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;
