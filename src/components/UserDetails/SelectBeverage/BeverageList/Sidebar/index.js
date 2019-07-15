import React, {Component} from 'react';
import {options} from '../../../../../constants';
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            dropDownOptions: options
        }

    }
    render(){
        return(
            <React.Fragment>
                <div className="sidebar-wrapper">
                    <h2 className="sidebar-title">Beverage Menu</h2>
                    <ul className="list-od-beverage" >
                    {this.state.dropDownOptions.map((optionList, index) => (
                        <li className="items" key={index}><Link to={`/orderBeverage/${optionList.value}`}>{optionList.label}</Link></li>
                    ))}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}