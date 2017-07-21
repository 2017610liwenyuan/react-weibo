import React,{Component} from 'react';
import {  Link } from 'react-router'
import Style from'../common/App.css';

const ACTIVE = {
  color:'red',
  borderBottom: "2px solid orangered"
}
export default class extends Component{

  render(){
    return(
      <div>
       <div className={Style.appclass}>
          <Link to="/home" activeStyle={ACTIVE} >首页</Link>
          <Link to="/list" activeStyle={ACTIVE} >消息</Link>
          <Link to="/find" activeStyle={ACTIVE} >发现</Link>
          <Link to="/me" activeStyle={ACTIVE} >我</Link>
      
      </div>
        {this.props.children}
        
      </div>
    )
  }
}


