import React, {Component} from 'react';
import SelectBeverage from './SelectBeverage';

export default class UserDetails extends Component {
    constructor(props){
        super(props);
        this.stste = {

        }

    }
    render(){
        return(
            <React.Fragment>
                <SelectBeverage select_value = {this.props.match.params.value}/>
            </React.Fragment>
        )
            
        
    }

}
