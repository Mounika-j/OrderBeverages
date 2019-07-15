import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Selector from '../../Selector';
import validator from 'validator';

export default class SelectBeverage extends Component {
    constructor(props){
        super(props);
        this.state = {
            orderDetails: [],
            orderedSucess: false,
            personName: '',
            selectOption: props.select_value,
            errorMessage: '',
        }
    }

    handleValue = (selectedOption) => {
        this.setState({
            selectOption: selectedOption.value
        })
    }

    getPersonName = (e) => {
        this.setState({
            personName: e.target.value,
        })
    }

    orderValidate = () => {
        console.log('validator.isEmpty(this.state.personName)', validator.isEmpty(this.state.personName));
        console.log('this.state.selectOption',this.state.selectOption)
        debugger;
        if (validator.isEmpty(this.state.personName) || (!this.state.selectOption)) {
            this.setState({
                errorMessage: !this.setState.errorMessage
            })
          } else {
            this.getOrderDetails()
        }
    }

    getOrderDetails = () => {
        let arrayValue = {
            id: this.state.orderDetails.length + 1,
            name: this.state.personName,
            value: this.state.selectOption
        }
        const localStateData = JSON.parse(localStorage.getItem("orderlist") || '[]')
        const localStorageArray= [...localStateData,  arrayValue];
        this.setState({
            orderDetails: localStorageArray,
            orderedSucess: !this.state.orderedSucess}, () =>{
                localStorageArray: localStorage.setItem("orderlist", JSON.stringify(this.state.orderDetails));
            }
        )

    }
  

    componentDidMount(){
        this.setState({
            orderDetails: JSON.parse(localStorage.getItem("orderlist") || '[]')
        })
        console.log('oorderDetailsorderDetailsrder',this.state.orderDetails)  
    }

    render(){
        console.log('selectOption', this.state.selectOption)
        return(
            <React.Fragment>
                <div className="beverage-wrapper">
                    <div className="inner-wrap">
                        <h2 className="title"> ORDER YOUR BEVERAGE</h2>
                        <form className="beverage-form">
                        {this.state.errorMessage ?<span className="error-message">All fields are manditory </span>: null }
                            <label className="form-label">
                                Name: 
                                <input 
                                    type="text" 
                                    name="name"
                                    value= {this.state.personName} 
                                    onChange = {this.getPersonName}/>
                            </label>

                            <label className="form-label">
                                Beverage: <Selector handleValue = {this.handleValue} selectOption={this.state.selectOption}/>
                            </label>
                            <button 
                                type= "button"
                                className="submit-btn"
                                onClick={this.orderValidate}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                {this.state.orderedSucess ? <Redirect to={{ pathname: '/orderTrack' }} /> : null }
               
            </React.Fragment>
        )
            
        
    }

}
