import React,{Component} from 'react';
import Sidebar from './Sidebar';    
import BeverageStatus from './BeverageStatus'

export default class BeverageList extends Component {
    constructor(props){
        super(props);
        this.state = {
            orderDetailsList: JSON.parse(localStorage.getItem("orderlist") || '[]'),
            BeingMixedQueue: JSON.parse(localStorage.getItem("mixedList") || '[]'),
            ReadyCollect: JSON.parse(localStorage.getItem("readyList") || '[]')
        }
        this.setMixedInQueue = this.setMixedInQueue.bind(this);
        this.setReadyInQueue = this.setReadyInQueue.bind(this);
    }

    //Being mixedfunction
    setMixedInQueue(id){
        let moved_obj = ""
        let newOrderDetails = this.state.orderDetailsList.filter((order_obj) => {
            if(order_obj.id == id){
                moved_obj = order_obj
                return false
            } 
            return true
        })
        const localStateMixedQueue = JSON.parse(localStorage.getItem("mixedList") || '[]')
        const newMixedInQueue = [...this.state.BeingMixedQueue, moved_obj]
        localStorage.setItem("orderlist",JSON.stringify(newOrderDetails))
        this.setState({
            BeingMixedQueue:  newMixedInQueue,
            orderDetailsList: newOrderDetails,
            
        },
            () => {
                newMixedInQueue: localStorage.setItem("mixedList",JSON.stringify(this.state.BeingMixedQueue))  
            }
        )
    }

    //ready statew function
    setReadyInQueue(id){
        let moved_ready = ""
        let readyOrderDetails = this.state.BeingMixedQueue.filter((order_obj) => {
            if(order_obj.id == id){
                moved_ready = order_obj
                return false
            }
            return true
            }) 
            const localStateReadyQueue = JSON.parse(localStorage.getItem("readyList") || '[]')
            const newOrderQueue = [...this.state.ReadyCollect, moved_ready]
            localStorage.setItem("mixedList",JSON.stringify(readyOrderDetails))
            this.setState({
                ReadyCollect: newOrderQueue,
                BeingMixedQueue: readyOrderDetails
            },
            () => {
                newOrderQueue: localStorage.setItem("readyList", JSON.stringify(this.state.ReadyCollect))
            }
        )
    }


    
    render(){
        return(
            <React.Fragment>
                <div className="beverage-details-wrapper">
                    <Sidebar/>
                    <BeverageStatus 
                        orderDetailsDate = {this.state.orderDetailsList} 
                        setMixedInQueue= {this.setMixedInQueue} 
                        BeingMixedQueueItems={this.state.BeingMixedQueue}
                        ReadyCollectItems={this.state.ReadyCollect}
                        setReadyInQueue={this.setReadyInQueue}/>
                </div>
            </React.Fragment>
        )
    }
}