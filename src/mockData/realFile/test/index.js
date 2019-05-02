import React,{ Component } from 'react';


export default class Foot extends Component{
    constructor(props){
      // console.log('constructor',0)
      super(props);
      this.state={
         id:0,
      }
      /**
       * 未传递任何参数的情况下会选择 shouldComponentUpdate(false) 0,1,7,2,5,6 
       *                            shouldComponentUpdate(true)  0,1,7,2,5,6,3,7,4
       * 
       * 传递props的情况下 props未变化 0,1,7,2,5,6,3,7,4
       *                  props变化 5,6,3,7,4
       * 
       * state变化： shouldComponentUpdate(false) 不执行didUpdate
       *             shouldComponentUpdate(true) 6,3,7,4 (componentWillReceiveProps不会执行)
       */
    }
    // componentWillMount(){
    //     console.log('willMount',1);
    // }
    // componentDidMount(){
    //     console.log('didMount',2)
    // }
    // componentWillUpdate(){
    //     console.log('willupdate,',3)
    // }
    // componentDidUpdate(){
    //     console.log('didupdate',4)
    // }
    
    componentWillReceiveProps(nextProps){
        //console.log('componentWillReceiveProps',5,'nextProps=',nextProps)
    }
    shouldComponentUpdate(nextProps,nextState){
        // if(nextState.id===5) return false
        //console.log('shouldComponentUpdate',6,'nextProps=',nextProps,'nextState=',nextState)
        return true;
    }

    handleClickEvent(){
        console.log('this=',this)
        // const id = this.state.id;
        // console.log('我要开始执行setState')
        // this.setState({
        //     id:id+1
        // },()=>{
        //   console.log('我执行完毕setState')
        // })
    }
    
    render(){
       // console.log('render',7);
        return(
            <div style={{cursor:'pointer'}} onClick={this.handleClickEvent}>
               <div>123{this.props.id}</div>
               <div>{this.state.id}</div>
            </div>
        )
    }
}