import React, { Component } from 'react';

class success extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <React.Fragment>
                <div class="alert alert-success text-center" role="alert">
                <h2>¡Su mensaje ha sido enviado exitósamente! <br/> Pronto nos estaremos comunicando contigo para brindarte todo el apoyo que necesitas.</h2>
                </div>
            </React.Fragment>
        );
    }
}

export default success;