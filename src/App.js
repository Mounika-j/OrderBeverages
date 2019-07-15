import React,{Component} from 'react';
import UserDetails from './components/UserDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BeverageList from './components/UserDetails/SelectBeverage/BeverageList';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/orderBeverage/:value?" component={UserDetails} />
          <Route path='/orderTrack' component={BeverageList}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
