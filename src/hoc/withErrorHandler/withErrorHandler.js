import React, { Component } from "react";
import Modal from "../../components/Helper/Modal"
import Aux from "../Aux"

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state={
        error=null
    }

    componentDidMount(){

        axios.interceptors.request.use(req=>{
            this.setState({error:null});
        }
        );

       axios.interceptors.response.use(
            null,
            (error) => {
            console.log("error rs-> " + error);
             this.setState({error:error});
            }
        );
    }

    render() {
      return (
      <Aux>
        <Modal
        show={this.state.error}
        modalId="modalError"
        headerText="Error"
        closeButtonText="Close"
        successButtonText="Ok">
        <p>{this.state.error}</p>
        </Modal>
        <WrappedComponent {...this.props}/>
    </Aux>
    )
    }
  };
};
