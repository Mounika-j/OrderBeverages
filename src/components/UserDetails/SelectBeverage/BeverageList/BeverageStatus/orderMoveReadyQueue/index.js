import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ReadyProgressModal extends Component {
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
                    Are you sure wants to move BEING MIXED to READY state?
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => this.props.orderReadyItem(this.props.selectedReadyId)}>Yes</Button>
                </ModalFooter>
            </Modal>
        )
    }
}
export default ReadyProgressModal;