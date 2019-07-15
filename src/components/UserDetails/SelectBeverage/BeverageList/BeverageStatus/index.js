import React, {Component} from 'react';
import ProgressModal from './ProgressModal';
import ReadyProgressModal from './orderMoveReadyQueue';

export default class BeverageStatus extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            readyModal: false,
            getorderList: this.props.orderDetailsDate,
            getReadyList: this.props.BeingMixedQueueItems,
            selectedObject: '',
            selectedReadyItem: ''
        }
       
    }
    orderMove = (id) => {
        this.setState({
            modal: !this.state.modal,
            selectedObject: id
        })
    }

    // collectOrder = (id) => {

    // }
    orderMoveReadyQueue = (id) => {
        this.setState({
            readyModal: !this.state.readyModal,
            selectedReadyItem: id
        })
    }

    progressModal = id => {
      this.props.setMixedInQueue(id)
      this.setState({
        modal: !this.state.modal
      })
    }

    orderReadyItem = id => {
        this.props.setReadyInQueue(id)
        this.setState({
            readyModal: !this.state.readyModal
        })
    }

    

    render(){
        console.log('this.props.orderDetailsDate', this.props.orderDetailsDate)
        return(
            <React.Fragment>
                <div className="status-wrapper">
                    <h2 className="sidebar-title">Beverage Queue</h2>
                    <div className="status-container">
                        <div className="subtitle">
                            <h2>In the queue</h2>
                            <ul className="status-of-beverage">
                            {this.props.orderDetailsDate.map((orderDetails, key) => (
                                <li className="items" id="menu_id" key={key} onClick = {() => {this.orderMove(orderDetails.id)}}>
                                    <span className="drink-name">{orderDetails.value}</span>
                                    <span className="person-name">{orderDetails.name}</span>
                                </li>
                            ))}
                            
                                
                            </ul>
                        </div>
                        <div className="subtitle">
                            <h2>Being Mixed</h2>
                            <ul className="status-of-beverage">
                       
                            {this.props.BeingMixedQueueItems.map((orderDetails, key) => (
                                <li className="items" id="menu_id" key={key} onClick = {() => {this.orderMoveReadyQueue(orderDetails.id)}}>
                                    <span className="drink-name">{orderDetails.value}</span>
                                    <span className="person-name">{orderDetails.name}</span>
                                </li>
                            ))}  
                            </ul>
                        </div>
                        <div className="subtitle">
                            <h2>Ready to Collect</h2>
                            <ul className="status-of-beverage">

                                {this.props.ReadyCollectItems.map((orderDetails, key) => (
                                    <li className="items" id="menu_id" key={key} >
                                        <span className="drink-name">{orderDetails.value}</span>
                                        <span className="person-name">{orderDetails.name}</span>
                                    </li>
                                ))} 
                               
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <ProgressModal 
                    isOpen ={this.state.modal} 
                    selectedId={this.state.selectedObject} 
                    toggle={this.orderMove}  
                    progressModal={this.progressModal} 
                    getorderListPerson = {this.state.getorderList}
                    />    

                <ReadyProgressModal 
                    isOpen ={this.state.readyModal}
                    selectedReadyId= {this.state.selectedReadyItem}
                    toggle={this.orderMoveReadyQueue}
                    orderReadyItem= {this.orderReadyItem}
                    getReadyListPerson= {this.state.getReadyList}
                />
            </React.Fragment>
        )
    }
}