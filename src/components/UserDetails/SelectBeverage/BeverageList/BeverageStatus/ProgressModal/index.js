import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ProgressModal extends Component {
    constructor(props){
        super(props);
        this.state= {

        }
    }
    render(){
        // console.log('this.state.getorderListPerson', )
        return(
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className="modal-wrapper">
                <ModalHeader toggle={this.props.toggle}>Order Track</ModalHeader>
                <ModalBody>
                    Are you sure wants to move IN QUEUE to BEING MIXED state?
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => this.props.progressModal(this.props.selectedId)}>Yes</Button>
                </ModalFooter>
            </Modal>
        )
    }
}
export default ProgressModal;