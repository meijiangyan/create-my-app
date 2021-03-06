import React, {
  Component
} from 'react';
import {
  Select,
  Table
} from 'antd';
import data from '../../mockData/data';
import {
  connect
} from "react-redux";
import Foot from './test';
import addTodo from '../../action/actions';

const Option = Select.Option;

class FirstTest extends Component {
  constructor(props) {
    super(props);
    let classes = data.filter((item) => {
      return item.gradeName === '2018级'
    })[0].classes;
    let student = classes.filter((item) => {
      return item.className === '高一一班'
    })[0].student;
    this.state = {
      grades: [],
      currentGrade: '2018级',
      classes: [],
      currentClass: '高一一班',
      currentStudent: student || [], // 默认2018级高一一班
      value: 0,
      inputValue:'',
    }
    this.classes = [];
  }

  componentDidMount() {
    const grades = this.formateData(data, 'gradeName');
    this.setState({
      grades,
    });
    // this.test();
    // this.a();
    // var p = this.b()

    // console.log(this.state.value) // 0
    // this.setState({ value: this.state.value + 1 });
    // console.log(this.state.value) // 1
    // this.setState({ value: this.state.value + 1 });
    // console.log(this.state.value)
     
     //console.log('this.state=',this.state)
     //
     console.log('this.props=', this.props);
    //这里主要处理浏览器前进后退功能，不加下面的代码就无法实现前进后退功能
    window.addEventListener('popstate', (e) => {
      let pathname = window.location;
      document.getElementById('body').innerHTML = window.location;
      document.title = '123'
    })
    // var Base = function(){
    //  // this.a = 1;
    //   this.a=1;
    //   this.b = 3;
    //   this.init();
    //   console.log('this=',this);
    //   // this.init();
    // }
    // var b = {
    //   init:function(){
    //     console.log('this.a=',this.a)
    //   },
    // };
    // Base.prototype = b.__proto__;
    // Base.call(b);
    // //Base();
    // //new Base();
  }
  
  componentWillReceiveProps(nextProps){
    console.log('app,componentWillReceiveProps=',nextProps)
  }  

  go(pathname) {
    window.history.pushState({}, null, pathname);
    document.getElementById('body').innerHTML = window.location;
  }

  componentWillUnmount() {
    // window.removeEventListener('popstate',(e)=>{
    //     let pathname = window.location;
    //     document.getElementById('body').innerHTML = window.location;
    // })
  }

  test() {
    let user = {
      foo: 'bar'
    };
    user.age = 18;
    user['name'] = 'eric';
    Object.defineProperty(user, 'gender', {
      // value:'男'
      // value 和get两者只能取其一,因为是矛盾的
      // get属性用于属性访问,当访问gender的时候,会自动调用get方法
      enumerable: false,
      get: function () {
        console.log('取值操作了')
        return 123
      },
      // set 属性设置器,当设置user.gender=xxx,则会自动调用set方法,xxx作为set的参数
      set: function (value) {
        console.log('赋值操作' + value)
      }
    });
    // user.gender      取值操作了 123
    // user.gender=666  赋值操作666
  }

  formateData(data, type) {
    let arr = [];
    for (var i = 0, l = data.length; i < l; i++) {
      Object.keys(data[i]).forEach((item) => {
        if (item === type) {
          arr.push(data[i][item]);
        }
      })
    }
    return arr;
  }

  handleGradeChange(value) {
    this.classes = data.filter((item) => {
      return item.gradeName === value
    })[0].classes;
    let currentClass = this.formateData(this.classes, 'className')[0];
    this.setState({
      currentGrade: value,
      classes: this.formateData(this.classes, 'className'),
      currentClass,
      currentStudent: this.classes.filter((item) => {
        return item.className === currentClass
      })[0].student
    })
  }

  handleClassChange(value) {
    const classes = this.classes;
    const currentStudent = this.classes.filter((item) => {
      return item.className === value
    })[0].student;
    this.setState({
      currentClass: value,
      currentStudent,
    });
  }

  handleInputChange(e){
    this.setState({
      inputValue:e.target.value,
    })
  }

  handleInputSubmit(e){
   // const value = e.target.value;
    this.props.todo(this.state.inputValue);
    this.setState({
      inputValue:'',
    })
  }

  render() {
    const columns = [{
      title: '姓名',
      dataIndex: 'studentName',
      key: 'studentName',
    }, {
      title: 'ID',
      dataIndex: 'studentId',
      key: 'studentId',
    }, {
      title: '分数',
      dataIndex: 'studentgrade',
      key: 'studentgrade',
    }];
    console.log('this.props.todos=',this.props.todos);
    return (
      <div className="App" >
        <div>
          <span> 年级： </span>
          < Select defaultValue={this.state.grades[0]}
            value={this.state.currentGrade}
            style={{ width: '100px', display: 'inline-block' }}
            onSelect={this.handleGradeChange.bind(this)}>
            {this.state.grades.map((item) => {
              return (< Option key={item} value={item} > {item} </Option>)
            })}
          </Select>
          <span > 班级： </span>
          <Select defaultValue={this.state.classes[0]}
            value={this.state.currentClass}
            style={{ width: '100px', display: 'inline-block' }}
            onSelect={this.handleClassChange.bind(this)}
          >
            {this.state.classes.map((item) => {
              return (<Option key={item} value={item}> {item}</Option>)
            })
            }
          </Select>
          <div > 学生个人信息： </div>
          <Table dataSource={this.state.currentStudent} columns={columns} />
        </div >
        <div>
          <Foot id={this.state.currentClass} />
          <div id='container'> </div>
          <a style={{ cursor: 'pointer' }} onClick={this.go.bind(this, '/a')} > pageALink </a>
          <a style={{ cursor: 'pointer' }} onClick={this.go.bind(this, '/b')} > pageBLink </a>
          <span id='body' > </span>
          <div style={{marginBottom:'20px'}}></div>
          <input onChange={this.handleInputChange.bind(this)} value={this.state.inputValue} />
          <div className='button' onClick={this.handleInputSubmit.bind(this)}>提交</div>
          <div style={{background:'',color:'black',fontSize:'20px',textAlign:'left'}}>
             {this.props.todos.map((item,index)=>{return <div key={index}>{item}</div>})}
          </div>
        </div >
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    todo:(text)=>{dispatch(addTodo(text))},
  }
}

const mapStateToProps = (state) => {
  return {
    todos:state.todos
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstTest)