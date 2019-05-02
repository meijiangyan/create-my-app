import React, { Component} from 'react';
import { Router, Route, } from 'react-router';
import Login from '../pages/login';
import My from '../pages/my';
import Index from '../pages/index';
import '../utils/rem'

class RouterPage extends Component{
   constructor(props){
     super(props);
     this.state = {
       isLogin:false,
   
     }
   }
   render(){
    const route = (<Router>
      <Route path="/" component={My}>
        <Route path="index" component={Index}/>
      </Route>
    </Router>);

     return (
       <div>
         {this.state.isLogin ? route : <Login />}
       </div>
     )
   }
}

export default RouterPage;